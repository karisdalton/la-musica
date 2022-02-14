import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
	const [error, setError] = useState("");
	const { currentUser, logOut } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		setError("");
		try {
			await logOut();
			navigate("/login");
		} catch (err) {
			setError("Failed to Logout");
		}
	};

	return (
		<div className="p-4 absolute left-72 top-14 w-[calc(100% - 288px)]">
			<h1 className="text-3xl text-sky-600">Profile</h1>
			{error && <p className="text-sm text-red-600 px-2 pt-2">{error}</p>}
			<div className="mt-2">
				<div>
					<span className="text-lg font-semibold mr-3">Email:</span>
					<span className="">{currentUser.email}</span>
				</div>
				<Link
					to="/update-profile"
					className="border border-sky-500 px-4 py-1 rounded-md hover:bg-sky-200 hover:text-slate-600 mr-3">
					Update Profile
				</Link>
				<button
					className="border border-sky-500 py-1 px-4 rounded-md mt-4 hover:bg-slate-400 hover:text-white"
					onClick={handleLogout}>
					Log Out
				</button>
			</div>
		</div>
	);
}

export default Profile;
