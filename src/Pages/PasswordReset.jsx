import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

function PasswordReset() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage("");
			setError("");
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage("Check your inbox for further instructions");
		} catch (err) {
			setError("Failed to reset password");
			console.log(err);
		}
		setLoading(false);
	}

	return (
		<div className="border-2 border-blue-400 shadow-md shadow-gray-300 rounded-lg flex justify-center w-3/4 md:w-1/2 m-auto mt-24">
			<div className=" w-full flex flex-col items-center justify-center">
				<div className="flex">
					<h1 className="text-4xl font-bold text-center p-4">Password Reset</h1>
				</div>
				<p className="text-sm text-center text-slate-400 p-2">
					Upload and stream music to play anytime anywhere.
				</p>
				<form
					className="mb-4 flex flex-col justify-center items-center w-full"
					onSubmit={handleSubmit}>
					{error && <p className="text-sm text-red-600 px-2 pt-2">{error}</p>}
					{message && (
						<p className="text-sm text-green-600 px-2 pt-2">{message}</p>
					)}
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
					</div>
					<button
						type="submit"
						disabled={loading}
						className="p-2 text-white w-1/2 mb-2 rounded-md bg-blue-600 focus:outline-0">
						Reset Password
					</button>
					<div className="text-center transition-all text-sky-500 hover:underline mb-4">
						<Link to="/login">Login</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default PasswordReset;
