import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { AuthProvider } from "./context/AuthContext";
import MusicList from "./Pages/MusicList";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";

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
					</Routes>
				</Router>
			</div>
		</AuthProvider>
	);
}

export default App;
