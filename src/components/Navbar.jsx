import React, { useState } from "react";
import profile from "../images/lamusica1.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../images/oie_transparent2.png";
import { useAuth } from "../context/AuthContext";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
	const { currentUser } = useAuth();

	return (
		currentUser && (
			<div className="flex fixed z-50 bg-white shadow-sm top-0 left-0 right-0 justify-between items-center py-1 md:py-2 md:px-4 border-b border-b-slate-200">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						className="w-26 h-6 md:w-52 md:h-10 object-cover"
					/>
				</Link>
				<form className="flex mr-2 md:w-3/4">
					<label className="relative block w-full md:w-full">
						<span className="sr-only">Search</span>
						<span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-300">
							<IoSearchOutline />
						</span>
						<input
							type="text"
							className={
								"w-full border block py-1 pl-7 md:py-2 md:pl-9 md:w-full rounded-md border-slate-300 focus:outline-0 placeholder:italic placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
							}
							placeholder="Search for music..."
						/>
					</label>
				</form>
				<div className="flex">
					{currentUser && (
						<div className="shrink-0 mr-1 md:ml-4 transition-all border border-sky-500 rounded-full hover:bg-slate-100">
							<Link to="/profile">
								<img
									src={profile}
									alt="profile"
									className="w-8 h-8  md:h-10 md:w-10 object-cover rounded-full"
								/>
							</Link>
						</div>
					)}
				</div>
			</div>
		)
	);
}

export default Navbar;
