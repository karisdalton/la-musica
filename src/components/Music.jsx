import React from "react";
import Recent from "./Recent";

function Music({ audio, handlePlay }) {
	return <Recent audio={audio} handlePlay={handlePlay} />;
}

export default Music;
