import React, { useState, useEffect } from "react";

const Loading: React.FC = () => {
	const [dots, setDots] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prevDots) => {
				if (prevDots.length < 3) {
					return prevDots + ".";
				} else {
					return "";
				}
			});
		}, 400);

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	return (
		<div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg">
			<h2 className="text-3xl font-bold text-white sm:text-5xl">Planning Your Trip</h2>
			<p className="w-5 text-3xl font-bold text-white sm:text-5xl">{dots}</p>
		</div>
	);
};

export default Loading;
