import React from "react";
import logo from "../images/lamusica1.png";
import {
	IoCloudUploadOutline,
	IoCompassOutline,
	IoHomeOutline,
	IoSearchOutline,
} from "react-icons/io5";
import { MdPlaylistPlay } from "react-icons/md";

function SideNav() {
	return (
		<div className="flex-2 w-1/5 h-screen p-2 border-r border-blue-500">
			<img src={logo} alt="logo" className="w-36 h-28" />

			<h1 className="text-lg uppercase font-bold py-2 pl-1">Library</h1>

			<div className="flex flex-col">
				<button className="flex mb-4 p-1 items-center border-l-2 border-l-blue-700">
					<span className="mr-2 text-blue-600">
						<IoHomeOutline />
					</span>
					Home
				</button>
				<button className="flex mb-4 p-1 items-center focus:border-l-2 focus:border-l-blue-700">
					<span className="mr-2">
						<IoSearchOutline />
					</span>
					Search
				</button>
				<button className="flex mb-4 p-1 items-center focus:border-l-2 focus:border-l-blue-700">
					<span className="mr-2">
						<IoCloudUploadOutline />
					</span>
					Uploads
				</button>
				<button className="flex mb-4 p-1 items-center focus:border-l-2 focus:border-l-blue-700">
					<span className="mr-2">
						<IoCompassOutline />
					</span>
					About
				</button>
			</div>
			<h1 className="text-lg uppercase font-bold py-2 pl-1">my playlist</h1>

			<div className="flex flex-col">
				<button className="flex mb-4 p-1 items-center border-l-2 border-l-blue-700">
					<span className="mr-2">
						<MdPlaylistPlay />
					</span>
					Eminem
				</button>
				<button className="flex mb-4 p-1 items-center focus:border-l-2 focus:border-l-blue-700">
					<span className="mr-2">
						<MdPlaylistPlay />
					</span>
					Rap Caviar
				</button>
			</div>
		</div>
	);
}

export default SideNav;
