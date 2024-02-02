"use client"

import React, { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
        const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

        console.log('Client ID:', clientId);
        console.log('Redirect URI:', redirectUri);

        const scopes = ['user-read-private', 'user-read-email', 'user-read-recently-played', 'user-read-playback-state']; // Add other scopes as needed
        // const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scopes.join(' '))}`!;

        // window.location.href = authUrl;
    }, []);

    return <div>Redirecting to Spotify...</div>;
};

export default Login;
