import { useState, useEffect } from "react";
import musicLogo from "../images/lamusica_transparent.png";
import {
	IoCloudDownloadOutline,
	IoHeartOutline,
	IoHeartSharp,
	IoPlay,
} from "react-icons/io5";
import app from "../firebase";
import firebase from "firebase/compat/app";
import { useAuth } from "../context/AuthContext";

const db = app.firestore();

function MusicList({ audio, handlePlay, playing }) {
	const { currentUser } = useAuth();
	const [like, setLike] = useState(false);

	const handleLike = async (index) => {
		// try {
		// 	db.collection("Songs")
		// 		.doc(currentUser.uid)
		// 		.update({
		// 			// [`audio.${index}.likeState`]: like,
		// 			audio: firebase.firestore.FieldValue.arrayUnion({
		// 				likeState: like,
		// 			}),
		// 		});
		// 	setLike(!like);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	return (
		<div className="p-4 absolute w-[calc(100%-1.75rem)] left-5 top-[3rem] md:left-72 md:top-14 md:w-[calc(100%-18rem)]">
			<h1 className="text-2xl">Music List</h1>
			{audio &&
				audio.map((song, index) => (
					<div
						className={
							playing === song.name
								? "shadow-md flex items-center w-full cursor-pointer rounded-md px-2 mt-2 bg-slate-200 transition-all"
								: "shadow-md flex items-center w-full cursor-pointer rounded-md px-2 mt-2 hover:bg-slate-100 transition-all"
						}
						key={index}>
						<img
							src={musicLogo}
							alt="musicLogo"
							className="h-12 object-cover"
						/>
						<div
							className="flex flex-col ml-5 peer"
							onClick={() => handlePlay(index)}>
							<span className="text-sm">{song.name}</span>
							<span className="text-sm text-sky-500">unknown artist</span>
						</div>
						<div className="flex items-center ml-auto">
							<a
								href={song.url}
								className="mx-4 cursor-pointer hover:bg-slate-500 rounded-full p-1">
								<IoCloudDownloadOutline />
							</a>
							{!song.likeState ? (
								<span
									className="mx-4 cursor-pointer hover:bg-slate-500 rounded-full p-1"
									onClick={() => handleLike(index)}>
									<IoHeartOutline />
								</span>
							) : (
								<span
									className="mx-4 cursor-pointer text-sky-500 hover:bg-slate-500 rounded-full p-1"
									onClick={() => handleLike(index)}>
									<IoHeartSharp />
								</span>
							)}
						</div>
						<IoPlay
							className={
								playing === song.name
									? "absolute z-30 left-9 text-blue-500 w-8 h-8"
									: "absolute z-30 left-9 text-slate-500 w-8 h-8 hidden peer-hover:inline-flex"
							}
						/>
					</div>
				))}
		</div>
	);
}

export default MusicList;
