import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

function HideNavs() {
	const [showNavs, setShowNavs] = useState(false);
	const { currentUser } = useAuth();

	useEffect(() => {
		if (currentUser) setShowNavs(true);
	}, []);

	console.log(showNavs);

	return <div className={showNavs === false ? "hidden" : "inline-flex"}></div>;
}

export default HideNavs;
