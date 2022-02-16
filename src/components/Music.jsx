import React from "react";
import music from "../images/notAvailable.jpg";

function Music({ audio, handlePlay }) {
	return (
		<div className="p-4 absolute w-[calc(100%-1.75rem)] left-5 top-[3.4rem] md:left-72 md:top-14 md:w-[calc(100%-18rem)]">
			<h1 className="uppercase text-lg font-bold">Recent Uploads</h1>
			<div className="flex flex-wrap mt-2 w-full">
				{audio &&
					audio.map((song, index) => (
						<div
							className="hover:shadow-2xl cursor-pointer transition ease-in-out delay-200 w-36 odd:mr-5 md:w-1/5 md:h-60 md:mr-9 mb-3 border-slate-600 bg-slate-100"
							key={index}
							onClick={() => handlePlay(index)}>
							<span className="">
								<img
									src={music}
									alt="palceholder"
									className="h-20 md:h-40 object-cover w-full"
								/>
							</span>
							<div className="text-left px-2 border-t border-slate-400">
								<p className="text-lg font-bold pt-2 truncate">{song.name}</p>
								<p className="text-sm text-slate-500">Two Steps from Hell</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Music;
