import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SpotifyWebApi from "spotify-web-api-node";
import SpTrackResult from "./SpTrackResult";

const spotifyApi = new SpotifyWebApi({
	clientId: "0ce32643c7d749ec83b63ad25c85dc8d",
});

function SpSearch({ accessToken }) {
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);

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
					const smallestAlbumImage = track.album.images.reduce(
						(smallest, image) => {
							if (image.height < smallest.height) return image;
							return smallest;
						},
						track.album.images[0]
					);

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
		<div>
			<label className="relative block w-96">
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
			<div className="mt-2">
				<span className="text-2xl text-green-500 italic">Search Results</span>
				<div className="flex flex-wrap justify-between mb-20 mt-4">
					{searchResults.map((track) => (
						<SpTrackResult track={track} key={track.uri} />
					))}
				</div>
			</div>
		</div>
	);
}

export default SpSearch;
