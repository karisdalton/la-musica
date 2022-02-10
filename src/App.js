import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/SideNav";
import Home from "./components/Home";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Router>
					<Routes>
						<Route element={<Home />} path="/" />
						<Route element={<SignUp />} path="/signup" />
						<Route element={<Login />} path="/login" />
					</Routes>
				</Router>
			</div>
		</AuthProvider>
	);
}

export default App;
