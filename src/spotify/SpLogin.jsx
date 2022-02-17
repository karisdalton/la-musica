import React from "react";

const AUTH_URL =
	"https://accounts.spotify.com/authorize?client_id=0ce32643c7d749ec83b63ad25c85dc8d&response_type=code&redirect_uri=https://lamusica.netlify.app/spdashboard&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function SpotifyLogin() {
	return (
		<div className="p-4 absolute h-[calc(100%-6.5rem)] w-[calc(100%-1.75rem)] left-5 top-[3rem] md:left-72 md:top-14 flex flex-col justify-center items-center md:w-[calc(100%-288px)]">
			<p className="text-center text-orange-600 mb-2">
				<span className="text-lg font-semibold text-orange-700">NOTE:</span>
				This will only work with a premium spotify account!
			</p>
			<a
				className="text-slate-500 transition-all px-4 py-2 rounded-full bg-green-400 hover:bg-green-500 hover:text-slate-700"
				href={AUTH_URL}>
				Login to Spotify
			</a>
		</div>
	);
}
