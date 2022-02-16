import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

const code = new URLSearchParams(window.location.search).get("code");

function SpPlayer({ accessToken, trackUri }) {
	const [play, setPlay] = useState(false);

	useEffect(() => {
		setPlay(true);
	}, [trackUri]);

	if (!accessToken) return null;

	return (
		code && (
			<div className="fixed z-40 bottom-0 right-0 left-0">
				<SpotifyPlayer
					token={accessToken}
					showSaveIcon
					callback={(state) => {
						if (!state.isPlaying) setPlay(false);
					}}
					play={play}
					uris={trackUri ? [trackUri] : []}
				/>
			</div>
		)
	);
}

export default SpPlayer;
