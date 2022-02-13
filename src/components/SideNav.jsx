import React, { useState } from "react";
import {
	IoCloudUploadOutline,
	IoCompassOutline,
	IoHeartOutline,
	IoHomeOutline,
	IoMusicalNotesOutline,
	IoSearchOutline,
} from "react-icons/io5";
import { MdPlaylistPlay } from "react-icons/md";
import { RiSpotifyLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const code = new URLSearchParams(window.location.search).get("code");

function SideNav() {
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	return (
		<div className="relative">
			<div className="flex-2 w-1/5 fixed left-0 top-14 h-screen p-2 border-r border-slate-200">
				<h1 className="text-lg uppercase font-bold py-2 pl-1 border-b border-slate-200">
					Library
				</h1>

				<div className="flex flex-col pt-2">
					<Link
						to="/"
						onClick={() => setActiveItemIndex(0)}
						className={
							activeItemIndex === 0
								? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
								: "flex mb-4 p-1 items-center hover:text-sky-500"
						}>
						<span className="mr-2">
							<IoHomeOutline />
						</span>
						Home
					</Link>
					<Link
						to="/mymusic"
						onClick={() => setActiveItemIndex(1)}
						className={
							activeItemIndex === 1
								? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
								: "flex mb-4 p-1 items-center hover:text-sky-500"
						}>
						<span className="mr-2">
							<IoMusicalNotesOutline />
						</span>
						My Music
					</Link>
					<Link
						to="/search"
						onClick={() => setActiveItemIndex(2)}
						className={
							activeItemIndex === 2
								? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
								: "flex mb-4 p-1 items-center hover:text-sky-500"
						}>
						<span className="mr-2">
							<IoSearchOutline />
						</span>
						Search
					</Link>
					{code ? (
						<Link
							to="/spDashboard"
							onClick={() => setActiveItemIndex(3)}
							className={
								activeItemIndex === 3
									? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
									: "flex mb-4 p-1 items-center hover:text-sky-500"
							}>
							<span className="mr-2">
								<RiSpotifyLine />
							</span>
							Stream on Spotify
						</Link>
					) : (
						<Link
							to="/spotifylogin"
							onClick={() => setActiveItemIndex(3)}
							className={
								activeItemIndex === 3
									? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
									: "flex mb-4 p-1 items-center hover:text-sky-500"
							}>
							<span className="mr-2">
								<RiSpotifyLine />
							</span>
							Stream on Spotify
						</Link>
					)}
					<Link
						to="/likedsongs"
						onClick={() => setActiveItemIndex(4)}
						className={
							activeItemIndex === 4
								? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
								: "flex mb-4 p-1 items-center hover:text-sky-500"
						}>
						<span className="mr-2">
							<IoHeartOutline />
						</span>
						Liked Songs
					</Link>
					<Link
						to="/uploads"
						onClick={() => setActiveItemIndex(5)}
						className={
							activeItemIndex === 5
								? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
								: "flex mb-4 p-1 items-center hover:text-sky-500"
						}>
						<span className="mr-2">
							<IoCloudUploadOutline />
						</span>
						Uploads
					</Link>
					<Link
						to="/about"
						onClick={() => setActiveItemIndex(6)}
						className={
							activeItemIndex === 6
								? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
								: "flex mb-4 p-1 items-center hover:text-sky-500"
						}>
						<span className="mr-2">
							<IoCompassOutline />
						</span>
						About
					</Link>
				</div>
				<h1 className="text-lg uppercase font-bold py-2 pl-1 border-t border-b border-slate-200">
					my playlist
				</h1>

				<div className="flex flex-col pt-2">
					<button
						onClick={() => setActiveItemIndex(7)}
						className={
							activeItemIndex === 7
								? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
								: "flex mb-4 p-1 items-center hover:text-sky-500"
						}>
						<span className="mr-2">
							<MdPlaylistPlay />
						</span>
						Eminem
					</button>
					<button
						onClick={() => setActiveItemIndex(8)}
						className={
							activeItemIndex === 8
								? "flex mb-4 p-1 items-center border-l-2 border-l-blue-700 text-sky-500"
								: "flex mb-4 p-1 items-center hover:text-sky-500"
						}>
						<span className="mr-2">
							<MdPlaylistPlay />
						</span>
						Rap Caviar
					</button>
				</div>
			</div>
		</div>
	);
}

export default SideNav;
