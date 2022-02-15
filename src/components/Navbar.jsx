import React from "react";
import profile from "../images/lamusica1.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../images/logodark.png";
import { useAuth } from "../context/AuthContext";

function Navbar() {
	const { currentUser } = useAuth();

	return (
		currentUser && (
			<div className="flex fixed z-50 bg-white shadow-sm top-0 left-0 right-0 justify-between py-2 px-4 border-b border-b-slate-200">
				<Link to="/">
					<img src={logo} alt="logo" className="w-52 px-0 h-10 object-cover" />
				</Link>
				<Search />
				<div className="flex">
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
		)
	);
}

export default Navbar;
