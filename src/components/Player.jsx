import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAuth } from "../context/AuthContext";

const code = new URLSearchParams(window.location.search).get("code");

function Player({ url, song }) {
	const { currentUser } = useAuth();

	return !code && currentUser ? (
		<div className="fixed z-50 bottom-0 left-0 right-0 font-player">
			<AudioPlayer src={url} header={song} autoPlayAfterSrcChange />
		</div>
	) : (
		<div></div>
	);
}

export default Player;
