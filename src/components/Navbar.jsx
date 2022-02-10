import React from "react";
import profile from "../images/lamusica1.png";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
	return (
		<div className="flex justify-between py-2 px-4">
			<label className="relative block w-1/2">
				<span className="sr-only">Search</span>
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<IoSearchOutline />
				</span>
				<input
					type="text"
					className="w-full border block py-2 pl-9 rounded-md border-slate-300 focus:outline-0 placeholder:italic placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
					placeholder="Search for music..."
				/>
			</label>
			<div className="flex">
				<div className="flex">
					<button className="mr-3 bg-blue-300 px-4 text-gray-700 border border-blue-400 rounded-md hover:bg-blue-400">
						Log in
					</button>
					<button className="bg-blue-500 py-1 px-4 text-white border border-blue-600 rounded-md hover:bg-blue-600">
						Sign up
					</button>
				</div>
				<div className="shrink-0 ml-2">
					<img
						src={profile}
						alt="profile"
						className="h-10 w-10 object-cover rounded-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
