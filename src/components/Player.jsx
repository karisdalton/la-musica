import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Player() {
	return (
		<div className="fixed bottom-0 left-[16.9rem] right-0">
			<AudioPlayer showSkipControls={true} />
		</div>
	);
}

export default Player;
