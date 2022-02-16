import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
	return (
		<label className="navsearch relative block w-1/2">
			<span className="sr-only">Search</span>
			<span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-300">
				<IoSearchOutline />
			</span>
			<input
				type="text"
				className="w-full border block py-1 pl-7 md:py-2 md:pl-9 rounded-md border-slate-300 focus:outline-0 placeholder:italic placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
				placeholder="Search for music..."
			/>
		</label>
	);
}

export default Search;
