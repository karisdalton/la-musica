import React, { useEffect } from "react";
import Music from "../components/Music";
import app from "../firebase";

function Home({ audio, handlePlay, playing }) {
	return (
		<div className="flex flex-3 w-full">
			<Music audio={audio} handlePlay={handlePlay} playing={playing} />
			<div className="flex-3 w-full"></div>
		</div>
	);
}

export default Home;
