import React from "react";

function About() {
	return (
		<div className="p-4 absolute h-[calc(100%-6.5rem)] w-[calc(100%-1.75rem)] left-5 top-[3.4rem] md:left-72 md:top-14 md:w-[calc(100%-18rem)] flex flex-col justify-center items-center">
			<h1 className="text-2xl font-bold font-title">About</h1>
			<span className="text-lg font-info mt-4">
				Music Streaming Application
			</span>
		</div>
	);
}

export default About;
