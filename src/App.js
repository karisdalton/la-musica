import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import SpLogin from "./spotify/SpLogin";
import SpDashboard from "./spotify/SpDashboard";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Router>
					<Navbar />
					<SideNav />
					<Routes>
						<Route element={<Home />} path="/" />
						<Route element={<SignUp />} path="/signup" />
						<Route element={<Login />} path="/login" />
						<Route element={<MusicList />} path="/mymusic" />
						<Route element={<LikedSongs />} path="/likedsongs" />
						<Route element={<Search />} path="/search" />
						<Route element={<Uploads />} path="/uploads" />
						{code ? (
							<Route
								element={<SpDashboard code={code} />}
								path="/spdashboard"
							/>
						) : (
							<Route element={<SpLogin />} path="/splogin" />
						)}
					</Routes>
					<Player />
				</Router>
			</div>
		</AuthProvider>
	);
}

export default App;
