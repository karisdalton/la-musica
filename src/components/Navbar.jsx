import React from "react";
import profile from "../images/lamusica1.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../images/logodark.png";
import { useAuth } from "../context/AuthContext";

function Navbar() {
	const { currentUser } = useAuth();

	return (
		<div className="flex fixed z-50 bg-white shadow-sm top-0 left-0 right-0 justify-between py-2 px-4 border-b border-b-slate-200">
			<Link to="/">
				<img src={logo} alt="logo" className="w-52 px-0 h-10 object-cover" />
			</Link>
			<Search />
			<div className="flex">
				{!currentUser && (
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
				)}
				{currentUser && (
					<div className="shrink-0 ml-4 transition-all border border-sky-500 rounded-full hover:bg-slate-100">
						<Link to="/profile">
							<img
								src={profile}
								alt="profile"
								className="h-10 w-10 object-cover rounded-full"
							/>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
