import React, { useEffect, useState } from "react";
import upload from "../images/upload_240px.png";
import app from "../firebase";
import firebase from "firebase/compat/app";

const storage = app.storage();
const db = app.firestore();

function Uploads() {
	const [songs, setSongs] = useState([]);
	const [file, setFile] = useState("");
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const handleFile = (e) => {
		setMessage("");
		setError("");
		if (e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		try {
			setMessage("");
			setError("");
			setLoading(true);

			const storageRef = storage.ref();
			const fileRef = storageRef.child(file.name);
			await fileRef.put(file);
			db.collection("Songs")
				.doc("Audio")
				.update({
					audio: firebase.firestore.FieldValue.arrayUnion({
						name: file.name,
						url: await fileRef.getDownloadURL(),
					}),
				});
			setMessage("File uploaded successfully");

			// const uploadTask = storage.ref(`Audio/${file.name}`).put(file);
			// uploadTask.on(
			// 	"state_changed",
			// 	(snapshot) => {
			// 		const progress = Math.round(
			// 			(snapshot.bytesTransferred / snapshot.totalBytes) * 100
			// 		);
			// 		setProgress(progress);
			// 		progress === 100 && setMessage("File uploaded successfully");
			// 		setSize(snapshot.totalBytes * 0.00000095367432);
			// 	},
			// 	(error) => {
			// 		console.log(error);
			// 	},
			// 	() => {
			// 		storage
			// 			.ref("Audio")
			// 			.child(file.name)
			// 			.getDownloadURL()
			// 			.then((url) => {
			// 				setUrl(url);
			// 			});
			// 	}
			// );
		} catch (err) {
			setError("Could not upload file");
			console.log(err);
		}
		setLoading(false);
	};

	useEffect(() => {
		db.collection("Songs").onSnapshot((snapshot) => {
			const songList = [];
			snapshot.docs.forEach((doc) => {
				songList.push({ ...doc.data(), id: doc.id });
			});
			setSongs(songList);
		});
	}, []);

	return (
		<div className="p-4 absolute flex items-center left-72 top-14 w-[calc(100%-288px)] h-[calc(100%-3.5rem)]">
			<div className="flex flex-col items-center mx-auto w-full">
				{message && (
					<p className="text-sm text-green-600 px-2 pt-2">{message}</p>
				)}
				{error && <p className="text-sm text-red-600 px-2 pt-2">{error}</p>}
				<img src={upload} alt="upload" className="h-40 w-40" />
				<form className="w-full" onSubmit={handleUpload}>
					<label className="block mt-2">
						<span className="sr-only">Choose audio file</span>
						<input
							type="file"
							className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file-text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
							accept="audio/*"
							onChange={handleFile}
							multiple
						/>
					</label>
					<button
						className="rounded-full transition-all mt-3 py-2 w-full text-slate-500 bg-sky-200 hover:bg-sky-300 hover:text-sky-700"
						disabled={loading}>
						Upload
					</button>
				</form>
			</div>
		</div>
	);
}

export default Uploads;
