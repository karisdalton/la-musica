import React from "react";
import profile from "../images/lamusica1.png";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../images/logodark.png";

function Navbar() {
	return (
		<div className="flex fixed z-50 bg-white shadow-sm top-0 left-0 right-0 justify-between py-2 px-4 border-b border-b-slate-200">
			<Link to="/">
				<img src={logo} alt="logo" className="w-52 px-0 h-10 object-cover" />
			</Link>
			<label className="relative block w-1/2">
				<span className="sr-only">Search</span>
				<span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-300">
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
					<Link
						to="/login"
						className="mr-3 bg-blue-300 py-1 px-4 w-20 h-10 text-gray-700 text-center border border-blue-400 rounded-md hover:bg-blue-400">
						Log in
					</Link>
					<Link
						to="/signup"
						className="bg-blue-500 py-1 px-4 w-24 h-10 text-white text-center border border-blue-600 rounded-md hover:bg-blue-600">
						Sign up
					</Link>
				</div>
				<div className="shrink-0 ml-4">
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
