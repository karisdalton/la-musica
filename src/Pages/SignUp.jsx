import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import firebase from "firebase/compat/app";

function SignUp() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfRef = useRef();
	const { signUp, signInWithGoogle } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const google_provider = new firebase.auth.GoogleAuthProvider();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfRef.current.value) {
			return setError("Passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signUp(emailRef.current.value, passwordRef.current.value);
			navigate("/");
		} catch (err) {
			setError("Failed to create an account");
			console.log(err);
		}
		setLoading(false);
	}

	async function handleGoogle(e) {
		e.preventDefault();

		try {
			setError("");
			await signInWithGoogle(google_provider);
			navigate("/");
		} catch (error) {
			setError("Failed to Sign In with Google");
			console.log(error);
		}
	}

	return (
		<div className="w-3/4 border-2 border-blue-400 shadow-md shadow-gray-300 rounded-lg flex justify-center mx-auto mt-14 md:w-1/2">
			<div className="w-3/4">
				<div className="flex justify-center">
					<h1 className="text-2xl md:text-4xl font-bold text-center p-4">
						Sign Up
					</h1>
				</div>
				<p className="text-sm text-slate-400 p-2 text-center font-info">
					Upload and stream music to play anytime anywhere.
				</p>
				<form
					className="mb-2 flex flex-col items-center w-full"
					onSubmit={handleSubmit}>
					{error && <p className="text-sm text-red-600 px-2 pt-2">{error}</p>}
					<div className="flex flex-col w-full">
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
						<div className="p-2 flex flex-col">
							<label htmlFor="password-confirmation" className="text-slate-700">
								Password Confirmation
							</label>
							<input
								type="password"
								name="password-confirmation"
								id="password-confirmation"
								ref={passwordConfRef}
								className="border mt-1 border-blue-500 p-2 rounded-md focus:outline-0"
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="p-2 text-white  md:w-1/2 mb-2 rounded-md bg-blue-600 focus:outline-0 font-button">
						Create an account
					</button>
				</form>
				<div className="mb-4">
					<p className="text-sm text-slate-600 text-center">Or sign in with</p>
					<div>
						<button
							type="submit"
							className="py-1 px-2 flex items-center justify-center border border-red-600 text-lg font-semibold w-auto mt-2 mb-4 mx-auto rounded-md hover:bg-slate-200 hover:border-slate-900 hover:text-gray-700 transition-all font-button"
							onClick={handleGoogle}>
							<FcGoogle className="mr-2" />
							Sign in with Google
						</button>
					</div>
					<p className="text-center text-sm">
						Already have an account?
						<Link to="/login" className="text-blue-500">
							Log In
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
