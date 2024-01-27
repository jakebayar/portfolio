import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

    console.log('code: ' + code);
    console.log('id: ' + clientId);
    console.log('secret: ' + clientSecret);
    console.log('uri: ' + redirectUri);

    if (!clientId || !clientSecret || !redirectUri || !code) {

        console.log('object');
        return new NextResponse(JSON.stringify({ error: 'Missing parameters' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }


    const basicHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${basicHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            code,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code',
        }),
    });


    const tokenData = await tokenResponse.json();
    console.log(tokenData);

    return new NextResponse(JSON.stringify(tokenData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
