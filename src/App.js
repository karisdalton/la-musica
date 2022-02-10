import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Router>
					<Routes>
						<Route element={<SignUp />} path="/" />
					</Routes>
				</Router>
			</div>
		</AuthProvider>
	);
}

export default App;
