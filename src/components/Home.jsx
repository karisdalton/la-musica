import React from "react";
import SideNav from "./SideNav";
import Navbar from "./Navbar";

function Home() {
	return (
		<div className="flex">
			<SideNav />
			<div className="flex-3 w-full">
				<Navbar />
				<h1>My Music</h1>
			</div>
		</div>
	);
}

export default Home;
