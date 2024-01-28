import { NextRequest, NextResponse } from 'next/server';

let ACCESS_TOKEN = '';
let REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

async function refreshAccessToken() {
    const basicHeader = Buffer.from(`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basicHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN,
        }),
    });

    const data = await response.json();

    // console.log(data);

    if (!response.ok) {

        // console.log(response);

        throw new Error(data.error || 'Failed to refresh access token');
    }

    ACCESS_TOKEN = data.access_token;
    // Optionally update the refresh token if Spotify provides a new one
    if (data.refresh_token) {
        REFRESH_TOKEN = data.refresh_token;
    }
}

export async function GET(request: NextRequest) {
    // If there's no access token or it is assumed expired, refresh it
    if (!ACCESS_TOKEN) {
        try {
            await refreshAccessToken();
        } catch (error) {
            return new NextResponse(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    }

    try {
        const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
            },
        });

        if (!spotifyResponse.ok) {

            // console.log(spotifyResponse);

            // If the token is expired, it needs to be refreshed
            if (spotifyResponse.status === 401) {
                await refreshAccessToken();
            } else {
                throw new Error('Failed to fetch data from Spotify');
            }
        }

        const recentlyPlayedData = await spotifyResponse.json();

        // console.log(recentlyPlayedData.items[0]);

        return new NextResponse(JSON.stringify(recentlyPlayedData.items[0].track), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
