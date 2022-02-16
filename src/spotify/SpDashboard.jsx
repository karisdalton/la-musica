import { useState, useEffect } from "react";
import useAuth from "../components/useAuth";
// import SpSearch from "./SpSearch";
import SpPlayer from "./SpPlayer";
import { IoSearchOutline } from "react-icons/io5";
import SpotifyWebApi from "spotify-web-api-node";
import SpTrackResult from "./SpTrackResult";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
	clientId: "0ce32643c7d749ec83b63ad25c85dc8d",
});

function SpDashboard({ code }) {
	const accessToken = useAuth(code);
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [playingTrack, setPlayingTrack] = useState([]);
	const [lyrics, setLyrics] = useState("");

	function chooseTrack(track) {
		setPlayingTrack(track);
		setSearch("");
		setLyrics("");
	}

	useEffect(() => {
		if (!playingTrack) return;

		axios
			.get("http://localhost:3001/lyrics", {
				params: {
					track: playingTrack.title,
					artist: playingTrack.artist,
				},
			})
			.then((res) => {
				setLyrics(res.data.lyrics);
			});
	}, [playingTrack]);

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!search) return setSearchResults([]);
		if (!accessToken) return;

		let cancel = false;

		spotifyApi.searchTracks(search).then((res) => {
			if (cancel) return;
			setSearchResults(
				res.body.tracks.items.map((track) => {
					return {
						artist: track.artists[0].name,
						title: track.name,
						uri: track.uri,
						albumUrl: track.album.images[0].url,
					};
				})
			);
		});
		return () => (cancel = true);
	}, [search, accessToken]);

	return (
		<div className="p-4 absolute w-[calc(100%-1.75rem)] left-5 top-[3rem] flex md:left-72 md:top-14 md:w-[calc(100%-288px)]">
			<div className="w-full">
				<label className="relative block w-full">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-300">
						<IoSearchOutline />
					</span>
					<input
						type="text"
						className="w-full block border py-1 pl-9 rounded-md border-slate-300 focus:outline-0 placeholder:italic placeholder:text-slate-400 shadow-sm focus:border-green-500 focus:ring-green-500 focus:ring-1"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search spotify for music..."
					/>
				</label>
				<div className="mt-2 w-full">
					<div className="flex flex-wrap justify-between mb-20 mt-4 w-full">
						{searchResults.map((track) => (
							<SpTrackResult
								track={track}
								key={track.uri}
								chooseTrack={chooseTrack}
							/>
						))}
						{searchResults.length === 0 && (
							<div className="text-center text-sm overflow-hidden flex mx-auto md:flex-nowrap flex-wrap whitespace-pre">
								{lyrics}
							</div>
						)}
					</div>
				</div>
			</div>
			<SpPlayer accessToken={accessToken} trackUri={playingTrack?.uri} />
		</div>
	);
}

export default SpDashboard;
