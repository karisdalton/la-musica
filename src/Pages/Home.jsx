import React, { useEffect } from "react";
import Music from "../components/Music";
import app from "../firebase";
import { useAuth } from "../context/AuthContext";

const db = app.firestore();

function Home({ audio, handlePlay }) {
	const { currentUser } = useAuth();

	useEffect(() => {
		db.collection("Songs").doc(currentUser.uid).set({
			name: "Audio",
		});
	}, []);

	return (
		<div className="flex">
			<div className="flex-3 w-full">
				<Music audio={audio} handlePlay={handlePlay} />
			</div>
		</div>
	);
}

export default Home;
