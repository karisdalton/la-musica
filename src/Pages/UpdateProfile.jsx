import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import lamusica from "../images/lamusicatext.png";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfRef = useRef();
	const { currentUser, updateEmail, updatePassword } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfRef.current.value) {
			return setError("Passwords do not match");
		}

		const promises = [];
		setLoading(true);
		setError("");

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}

		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				navigate("/profile");
			})
			.catch(() => {
				setError("Failed to update account");
			})
			.finally(() => setLoading(false));
	}

	return (
		<div className="p-4 absolute left-72 top-14 w-[calc(100% - 288px)] flex justify-center mx-auto">
			<div className="">
				<h1 className="text-4xl font-bold text-center p-4">Update Profile</h1>
				<p className="text-sm text-slate-400 p-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
					eum!
				</p>
				<form className="mb-4" onSubmit={handleSubmit}>
					{error && <p className="text-sm text-red-600 px-2 pt-2">{error}</p>}
					<div className="flex flex-col mb-3">
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
								defaultValue={currentUser.email}
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
								className="border mt-1 border-blue-500 p-2 rounded-md focus:outline-0 placeholder:italic placeholder:text-slate-400"
								placeholder="leave blank to keep the same"
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
								className="border mt-1 border-blue-500 p-2 rounded-md focus:outline-0 placeholder:italic placeholder:text-slate-400"
								placeholder="leave blank to keep the same"
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="p-2 cursor-pointer text-white w-1/2 mb-4 ml-28 rounded-md bg-sky-600 focus:outline-0 hover:bg-sky-500 transition-all">
						Update Profile
					</button>
					<p className="text-center text-lg">
						<Link to="/" className="text-blue-500 hover:underline">
							Cancel
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
