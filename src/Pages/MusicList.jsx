import { useState, useEffect } from "react";
import musicLogo from "../images/lamusica_transparent.png";
import { IoCloudDownloadOutline, IoHeartOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import app from "../firebase";
import jsmediatags from "jsmediatags";

const db = app.firestore();

function MusicList() {
	const [audio, setAudio] = useState([]);
	let tags = {};
	const url = audio?.map((file) => {
		return file.url;
	});

	audio?.map((file) => {
		new jsmediatags.Reader(file.url).read({
			onSuccess: (tag) => {
				tags = tag;
			},
			onError: (err) => {
				console.log(err);
			},
		});
	});

	console.log(tags);

	useEffect(() => {
		db.collection("Songs")
			.doc("Audio")
			.onSnapshot((doc) => {
				setAudio(doc.data().audio || []);
			});
	}, []);

	return (
		<div className="p-4 absolute left-72 top-14 w-[calc(100%-18rem)]">
			<h1 className="text-2xl">Music List</h1>
			{audio &&
				audio.map((song, index) => (
					<div
						className="shadow-md flex items-center justify-between mt-4 px-4 py-1 w-full"
						key={index}>
						<img
							src={musicLogo}
							alt="musicLogo"
							className="h-10 object-cover"
						/>
						<div className="flex flex-col ml-5">
							<span className="">{song.name}</span>
							<span className="text-sm text-sky-500 cursor-pointer hover:underline">
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
							<span className="mx-4 cursor-pointer">
								<IoCloudDownloadOutline />
							</span>
							<span className="mx-4 cursor-pointer">
								<IoHeartOutline />
							</span>
							<span className="mx-4 cursor-pointer">
								<HiOutlineDotsHorizontal />
							</span>
						</div>
					</div>
				))}
		</div>
	);
}

export default MusicList;
