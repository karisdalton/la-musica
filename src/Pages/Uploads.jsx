import React, { useEffect, useState } from "react";
import upload from "../images/upload_240px.png";
import loader from "../images/loader.png";
import app from "../firebase";
import firebase from "firebase/compat/app";
import { useAuth } from "../context/AuthContext";

const db = app.firestore();
const storage = app.storage();

function Uploads() {
	const { currentUser } = useAuth();
	const [file, setFile] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [like, setLike] = useState(false);

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
				.doc(currentUser.uid)
				.set(
					{
						audio: firebase.firestore.FieldValue.arrayUnion({
							name: file.name,
							url: await fileRef.getDownloadURL(),
							likeState: like,
						}),
					},
					{ merge: true }
				);
			setLike(false);
			setMessage("File uploaded successfully");
		} catch (err) {
			setError("Could not upload file");
			console.log(err);
		}
		setLoading(false);
	};

	return (
		<div className="p-4 absolute w-[calc(100%-1.75rem)] left-5 top-[3rem] flex items-center md:left-72 md:top-14 md:w-[calc(100%-288px)] h-[calc(100%-3.5rem)]">
			<div className="flex flex-col items-center mx-auto w-full">
				{message && (
					<p className="text-sm text-green-600 px-2 pt-2">{message}</p>
				)}
				{error && <p className="text-sm text-red-600 px-2 pt-2">{error}</p>}
				{loading ? (
					<img src={loader} alt="upload" className="h-40 w-40" />
				) : (
					<img src={upload} alt="upload" className="h-40 w-40" />
				)}
				<form className="w-full" onSubmit={handleUpload}>
					<label className="block mt-2">
						<span className="sr-only">Choose audio file</span>
						<input
							type="file"
							className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file-text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
							accept=".mp3, .mpeg"
							onChange={handleFile}
						/>
					</label>
					<button
						className={
							loading
								? "rounded-full transition-all mt-3 py-2 w-full text-slate-500 bg-sky-200 disabled"
								: "rounded-full transition-all mt-3 py-2 w-full text-slate-500 bg-sky-200 hover:bg-sky-300 hover:text-sky-700"
						}
						disabled={loading}>
						Upload
					</button>
				</form>
			</div>
		</div>
	);
}

export default Uploads;
