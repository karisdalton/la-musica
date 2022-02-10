import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import lamusica from "../images/lamusicatext.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { logIn } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await logIn(emailRef.current.value, passwordRef.current.value);
			navigate("/");
		} catch (err) {
			setError("Failed to sign in");
			console.log(err);
		}
		setLoading(false);
	}

	return (
		<div className="border-2 border-blue-400 shadow-md shadow-gray-300 rounded-lg flex justify-center w-1/2 m-auto mt-24">
			<div className="">
				<div className="flex">
					<h1 className="text-4xl font-bold text-center p-4">Welcome to</h1>
					<img src={lamusica} alt="logo" className="w-28 h-16" />
				</div>
				<p className="text-sm text-slate-400 p-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
					eum!
				</p>
				<form className="mb-4" onSubmit={handleSubmit}>
					{error && <p className="text-sm text-red-600 px-2 pt-2">{error}</p>}
					<div className="flex flex-col">
						<div className="p-2 flex flex-col">
							<label htmlFor="email" className="text-slate-700">
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								ref={emailRef}
								className="border border-blue-500 p-2 mt-1 rounded-md focus:outline-0"
							/>
						</div>
						<div className="p-2 flex flex-col">
							<label htmlFor="password" className="text-slate-700">
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								ref={passwordRef}
								className="border mt-1 border-blue-500 p-2 rounded-md focus:outline-0"
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="p-2 text-white w-1/2 mb-4 ml-28 rounded-md bg-blue-600 focus:outline-0">
						Log In
					</button>
					<p className="text-sm text-slate-600 text-center">Or sign in with</p>
					<div>
						<button
							type="submit"
							className="p-1 text-white w-1/3 mt-2 mb-4 ml-40 rounded-md bg-red-600">
							Google
						</button>
					</div>
					<p className="text-center text-sm">
						Don't have an account?
						<Link to="/signup" className="text-blue-500">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;