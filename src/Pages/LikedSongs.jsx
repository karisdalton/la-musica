import React from "react";
import {
	IoHeartOutline,
	IoCloudDownloadOutline,
	IoPlay,
} from "react-icons/io5";
import musicLogo from "../images/lamusica_transparent.png";

function LikedSongs() {
	return (
		<div className="p-4 absolute w-[calc(100%-1.75rem)] left-5 top-[3rem] md:left-72 md:top-14 md:w-[calc(100%-18rem)]">
			<div className="flex items-center">
				<span className="text-2xl mr-2">
					<IoHeartOutline />
				</span>
				<h1 className="text-2xl">Liked Songs</h1>
			</div>
			<span className="ml-3 text-sm text-slate-400">23 songs</span>
			<div className="border-t border-slate-300">
				<div className="flex items-center hover:bg-slate-100 transition-all shadow-md rounded-md cursor-pointer px-2 w-full mt-2">
					<span className="mr-3">1</span>
					<img
						src={musicLogo}
						alt="musicLogo"
						className="h-12 pt-1 object-cover"
					/>
					<div className="flex flex-col ml-5 peer">
						<span className="text-sm">stay</span>
						<span className="text-sm text-sky-500 cursor-pointer">
							The Kid LAROI, Justin Beiber
						</span>
					</div>
					{/* <div className="ml-10 flex justify-between">
						<span className="text-sm text-slate-500 ml-10">Unknown album</span>
						<span className="text-sm text-slate-500 ml-10 mr-4">06:10</span>
					</div> */}
					<div className="flex items-center ml-auto">
						<span className="mx-4 cursor-pointer hover:bg-slate-500 rounded-full p-1">
							<IoCloudDownloadOutline />
						</span>
						<span className="mx-4 cursor-pointer hover:bg-slate-500 rounded-full p-1">
							<IoHeartOutline />
						</span>
					</div>
					<IoPlay className="absolute z-30 left-[3.4rem] text-slate-700 w-8 h-8 hidden peer-hover:inline-flex" />
				</div>
			</div>
		</div>
	);
}

export default LikedSongs;
