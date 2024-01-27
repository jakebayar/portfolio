import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for tokens (note: these will reset when your server restarts)
let ACCESS_TOKEN = '';
let REFRESH_TOKEN = 'AQD33uYJov6kmb8fIZ9YsF-MUoM7KHRp0uJa2h0IKnpFUAQVThYHd2LVQ9K39wuLWxvWNhqHlfsZX2acUkkX6gFO8o2qzuMZQGYuMjfWvOKhwiB0-Y3YQFfn3Cly8a6dD90';

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

    // Now ACCESS_TOKEN should be set, so use it for Spotify API requests
    try {
        const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
            },
        });

        if (!spotifyResponse.ok) {

            console.log(spotifyResponse);

            // If the token is expired, it needs to be refreshed
            if (spotifyResponse.status === 401) {
                await refreshAccessToken();
                // Retry the Spotify API request with the new access token...
            } else {
                throw new Error('Failed to fetch data from Spotify');
            }
        }

        const recentlyPlayedData = await spotifyResponse.json();

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


/**
 *   song.name: 'Bao'
 *   artist.name: 'BaoBao',
 *   external_urls: { spotify: 'https://open.spotify.com/track/0St5oj9IgPyKMfp3LMxykj' },
 *   preview_url: 'https://p.scdn.co/mp3-preview/716e3c4c4cb953c0da15ddf6c7dac403801db8b5?cid=29d102e8644c42a8afb7b9f6f678d16c',
 *   uri: 'spotify:track:0St5oj9IgPyKMfp3LMxykj'
 *   href: 'https://api.spotify.com/v1/tracks/0St5oj9IgPyKMfp3LMxykj',
 */



// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
//     const accessToken = 'BQBevr2hV7puwoSssv9QFlY8PkLv-pVUqwHSZwlfEr89kJtMdrUkTxW6Pm7_EgBGjukGzQCqVZ-i_8vQM23RQfFeWoeSHbi9LC_qed2MS7XuBCoUXC_GdvKcHLwiiMXS-uuS57UxFImKjuc0-6rIEaHNBjjkTnzDjK-pd8NR2r3c73hEFidHnOrfDyJG8NLKp6JBgw'; // Replace with the actual access token

//     if (!accessToken) {
//         return new NextResponse(JSON.stringify({ error: 'Access Token is missing' }), {
//             status: 401,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     }

//     const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
//         headers: {
//             'Authorization': `Bearer ${accessToken}`
//         }
//     });

//     if (!spotifyResponse.ok) {
//         // Handle errors from Spotify API
//         return new NextResponse(JSON.stringify({ error: 'Failed to fetch recently played track' }), {
//             status: spotifyResponse.status,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     }

//     const recentlyPlayedData = await spotifyResponse.json();
//     return new NextResponse(JSON.stringify(recentlyPlayedData.items[0].track), {
//         status: 200,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
// }
