import musicLogo from "../images/lamusica_transparent.png";
import {
	IoCloudDownloadOutline,
	IoHeartOutline,
	IoPlay,
} from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import app from "../firebase";
// import jsmediatags from "jsmediatags";

const db = app.firestore();

function MusicList({ audio, handlePlay }) {
	// let tags = {};
	// const url = audio?.map((file) => {
	// 	return file.url;
	// });

	// audio?.map((file) => {
	// 	new jsmediatags.Reader(file.url).read({
	// 		onSuccess: (tag) => {
	// 			tags = tag;
	// 		},
	// 		onError: (err) => {
	// 			console.log(err);
	// 		},
	// 	});
	// });

	return (
		<div className="p-4 absolute left-72 top-14 w-[calc(100%-18rem)]">
			<h1 className="text-2xl">Music List</h1>
			{audio &&
				audio.map((song, index) => (
					<div
						className="shadow-md flex items-center justify-between mt-4 px-4 py-1 w-full cursor-pointer hover:bg-slate-100 transition-all peer"
						key={index}>
						<img
							src={musicLogo}
							alt="musicLogo"
							className="h-10 object-cover"
						/>
						<div
							className="flex flex-col ml-5"
							onClick={() => handlePlay(index)}>
							<span className="truncate">{song.name}</span>
							<span className="text-sm text-sky-500">
								The Kid LAROI, Justin Beiber
							</span>
						</div>
						<div className="mx-auto flex justify-between items-center">
							<span className="text-sm text-slate-500 ml-10">
								Unknown album
							</span>
							<span className="text-sm text-slate-500 ml-10 mr-4">06:10</span>
						</div>
						<div className="flex items-center ml-auto">
							<a
								href={song.url}
								className="mx-4 cursor-pointer hover:bg-slate-500 rounded-full p-1">
								<IoCloudDownloadOutline />
							</a>
							<span className="mx-4 cursor-pointer">
								<IoHeartOutline />
							</span>
							<span className="mx-4 cursor-pointer">
								<HiOutlineDotsHorizontal />
							</span>
						</div>
						<IoPlay className="absolute z-index-30 top-[4.7rem] left-10 text-slate-700 w-8 h-8 hidden peer-hover:inline-flex" />
					</div>
				))}
		</div>
	);
}

export default MusicList;
