import React from "react";
import music from "../images/notAvailable.jpg";

function Recent({ audio, handlePlay }) {
	return (
		<div className="p-4 absolute left-72 top-14 w-[calc(100%-18rem)]">
			<h1 className="uppercase text-lg font-bold">Recent Uploads</h1>
			<div className="flex flex-wrap mt-2 w-full">
				{audio &&
					audio.map((song, index) => (
						<div
							className="hover:shadow-2xl cursor-pointer transition ease-in-out delay-200 w-1/5 h-60 mr-9 mb-3 last:mr-0 border border-slate-600 bg-slate-100"
							key={index}
							onClick={() => handlePlay(index)}>
							<span className="">
								<img
									src={music}
									alt="palceholder"
									className="h-40 object-cover w-full"
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

export default Recent;
