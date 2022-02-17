import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SearchResults() {
	const [searchResults, setSearchResults] = useState(null);

	useEffect(() => {
		const query = new URLSearchParams();
		const queryTerm = query.get("term");
		console.log(query);
	});

	return (
		<div className="p-4 absolute w-[calc(100%-1.75rem)] left-5 top-[3rem] md:left-72 md:top-14 md:w-[calc(100%-18rem)]">
			<h1>Search Results</h1>
		</div>
	);
}

export default SearchResults;
