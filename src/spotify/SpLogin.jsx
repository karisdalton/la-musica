import React from "react";

const AUTH_URL =
	"https://accounts.spotify.com/authorize?client_id=0ce32643c7d749ec83b63ad25c85dc8d&response_type=code&redirect_uri=http://localhost:3000/spdashboard&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function SpotifyLogin() {
	return (
		<div className="p-4 absolute left-72 top-14 flex flex-row justify-center items-center">
			<a
				className="text-slate-500 transition-all px-4 py-2 rounded-full bg-green-400 hover:bg-green-500 hover:text-slate-700"
				href={AUTH_URL}>
				Login with Spotify
			</a>
		</div>
	);
}
