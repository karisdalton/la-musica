import React, { useState } from "react";
import upload from "../images/upload_240px.png";

function Uploads() {
	const [file, setFile] = useState(null);

	const handleFile = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = () => {};

	console.log(file);

	return (
		<div className="p-4 absolute left-72 top-14">
			<div className="flex flex-col ml-96 mt-48">
				<img src={upload} alt="upload" className="h-40 w-40" />
				<span className="text-sm text-slate-400">
					No music yet. Upload now.
				</span>
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
					className="rounded-full transition-all mt-3 py-2 text-slate-500 bg-sky-200 hover:bg-sky-300 hover:text-sky-700"
					onClick={handleUpload}>
					Upload
				</button>
			</div>
		</div>
	);
}

export default Uploads;
