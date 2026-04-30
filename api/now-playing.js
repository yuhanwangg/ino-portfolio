export default async function handler(req, res) {
    try {
        const refreshRes = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                    "Basic " +
                    Buffer.from(
                        process.env.SPOTIFY_CLIENT_ID +
                        ":" +
                        process.env.SPOTIFY_CLIENT_SECRET
                    ).toString("base64"),
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
            }),
        });

        const refreshData = await refreshRes.json();
        const access_token = refreshData.access_token;

        const nowPlayingRes = await fetch(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );

        if (nowPlayingRes.status === 204) {
            return res.status(200).json({ error: "No song playing" });
        }

        const data = await nowPlayingRes.json();
        const track = data.item;

        return res.status(200).json({
            title: track.name,
            artist: track.artists.map((a) => a.name).join(", "),
            albumName: track.album.name,
            albumImageUrl: track.album.images[0]?.url,
            songUrl: track.external_urls.spotify,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch now playing" });
    }
}