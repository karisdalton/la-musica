import React from "react";
import useAuth from "../components/useAuth";
import SpSearch from "./SpSearch";

function SpDashboard({ code }) {
	const accessToken = useAuth(code);

	return (
		<div className="p-4 absolute flex left-72 top-14 w-[calc(100% - 288px)]">
			<SpSearch accessToken={accessToken} />
		</div>
	);
}

export default SpDashboard;
