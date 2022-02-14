import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { AuthProvider } from "./context/AuthContext";
import MusicList from "./Pages/MusicList";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Player from "./components/Player";
import LikedSongs from "./Pages/LikedSongs";
import Search from "./Pages/Search";
import Uploads from "./Pages/Uploads";
import Profile from "./Pages/Profile";
import UpdateProfile from "./Pages/UpdateProfile";
import PasswordReset from "./Pages/PasswordReset";
import SpLogin from "./spotify/SpLogin";
import SpDashboard from "./spotify/SpDashboard";
import RequireAuth from "./components/RequireAuth";
import HideNavs from "./components/HideNavs";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Navbar />
				<SideNav />
				<Routes>
					<Route element={<RequireAuth />}>
						<Route element={<Home />} path="/" />
						<Route element={<MusicList />} path="/mymusic" />
						<Route element={<LikedSongs />} path="/likedsongs" />
						<Route element={<Search />} path="/search" />
						<Route element={<Uploads />} path="/uploads" />
						<Route element={<Profile />} path="/profile" />
						<Route element={<UpdateProfile />} path="/update-profile" />
						{code ? (
							<Route
								element={<SpDashboard code={code} />}
								path="/spdashboard"
							/>
						) : (
							<Route element={<SpLogin />} path="/splogin" />
						)}
					</Route>
					<Route element={<PasswordReset />} path="/password-reset" />
					<Route element={<SignUp />} path="/signup" />
					<Route element={<Login />} path="/login" />
				</Routes>
				<Player />
			</AuthProvider>
		</div>
	);
}

export default App;
