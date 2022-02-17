import { useState, useEffect } from "react";
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
import app from "./firebase";
import { auth } from "./firebase";
import About from "./Pages/About";
import SearchResults from "./Pages/SearchResults";

const code = new URLSearchParams(window.location.search).get("code");
const db = app.firestore();

function App() {
	const [audio, setAudio] = useState([]);
	const [song, setSong] = useState("");
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [url, setUrl] = useState("");
	const [playing, setPlaying] = useState();

	const handlePlay = (index) => {
		setUrl(audio[index].url);
		setSong(audio[index].name);
		setPlaying(audio[index].name);
	};

	const loggedIn = () => {
		return auth.currentUser.uid !== null;
	};

	console.log(loggedIn());

	const handleNext = () => {
		const nextSong =
			currentSongIndex === 0 ? audio.length - 1 : currentSongIndex - 1;
		setCurrentSongIndex(nextSong);
	};

	const handlePrevious = () => {
		const prevSong =
			currentSongIndex < audio.length - 1 ? currentSongIndex + 1 : 0;
		setCurrentSongIndex(prevSong);
	};

	useEffect(() => {
		loggedIn() &&
			db
				.collection("Songs")
				.doc(auth.currentUser.uid)
				.onSnapshot((doc) => {
					setAudio(doc.data().audio || []);
				});
	}, []);

	return (
		<div className="App">
			<AuthProvider>
				<Navbar />
				<SideNav />
				<Routes>
					<Route element={<RequireAuth />}>
						<Route
							element={
								<Home audio={audio} handlePlay={handlePlay} playing={playing} />
							}
							path="/"
						/>
						<Route
							element={
								<MusicList
									audio={audio}
									handlePlay={handlePlay}
									playing={playing}
								/>
							}
							path="/mymusic"
						/>
						<Route element={<LikedSongs />} path="/likedsongs" />
						<Route element={<Search />} path="/search" />
						<Route element={<SearchResults />} path="/search-results" />
						<Route element={<Uploads />} path="/uploads" />
						<Route element={<Profile />} path="/profile" />
						<Route element={<About />} path="/about" />
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
				<Player
					url={url}
					song={song}
					handleNext={handleNext}
					handlePrevious={handlePrevious}
				/>
			</AuthProvider>
		</div>
	);
}

export default App;
