import React from "react";
import { IoPlay } from "react-icons/io5";

function SpTrackResult({ track, chooseTrack }) {
	const handlePlay = () => {
		chooseTrack(track);
	};

	return (
		<div
			className="relative mb-7 last:mb-3 w-48 h-auto cursor-pointer shadow-xl"
			onClick={handlePlay}>
			<img
				src={track.albumUrl}
				alt="albumImg"
				className="w-48 h-48 object-cover peer"
			/>
			<div className="flex flex-col px-2 py-3 peer">
				<span className="truncate">{track.title}</span>
				<span className="text-sm text-slate-600 truncate">{track.artist}</span>
			</div>
			<IoPlay className="absolute z-index-30 top-16 left-16 text-green-600 w-16 h-16 hidden peer-hover:inline-flex" />
		</div>
	);
}

export default SpTrackResult;
