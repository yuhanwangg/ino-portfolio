import React, { useState, useEffect } from "react";
import albumArt from "../components/assets/day6_daydream.jpg";
import './MusicPlayer.css'

const MusicPlayer = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [prevSong, setPrevSong] = useState(null); // Track previous song

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch("/api/now-playing");
                const data = await response.json();

                if (data.error) {
                    return;
                }
                if (!prevSong || prevSong.title !== data.title) {
                    setNowPlaying(data);
                    setPrevSong(data);
                }
            } catch (error) {
                console.error("Error fetching now playing song:", error);
            }
        };

        const interval = setInterval(fetchNowPlaying, 5000); // Refresh every 5s
        fetchNowPlaying();

        return () => clearInterval(interval);
    }, [prevSong]);

    return (
        <div className="component">
            <div className="musicPlayerCard">
                <div className="musicPlayerImage">
                    <img src={nowPlaying?.albumImageUrl || albumArt} className="albumImage" alt="Album" />
                </div>
            </div>
            <div className="musicPlayerDetails">
                <h3>{nowPlaying?.title || "Wish"}</h3>
                <p><i>{nowPlaying?.albumName || "DAYDREAM"}</i></p>
                <p>{nowPlaying?.artist || "Day6"}</p>
            </div>
        </div >
    );
};

export default MusicPlayer;