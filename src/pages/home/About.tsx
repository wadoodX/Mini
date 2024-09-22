import React from "react";
import "../../styles/animations.css";
import { useNavigate } from "react-router-dom";
import ai from "../../assets/ai.webp";
import map from "../../assets/map.webp";
import passport from "../../assets/passport.webp";

const gradient: React.FC = () => {
	const navigate = useNavigate();

	const handleNaviagtion = () => {
		navigate("/planner");
	};
	const gradient = [
		{
			id: 1,
			title: "Input All Your Travel Details",
			par: "Input all your travelling information such as locations, dates, budget, and interests in the system and it will check them out and provide you with the best plans to allow your itinerary to match your preferences.",
			src: map,
			cta: "Start Your Journey",
			alt: "Map illustration",
			bg: "bg-gradient-to-r from-sky-500 to-indigo-500",
		},
		{
			id: 2,
			title: "Wait for the Results",
			par: "Once you input your information, venture starts working on your itinerary. The process is highly based on large data merge to get the best match for your time on your trip. Your custom plan will be generated and displayed to you.",
			src: ai,
			cta: "Travel The World",
			alt: "AI chip illustration",
			bg: "bg-gradient-to-bl from-sky-500 to-indigo-500",
		},
		{
			id: 3,
			title: "Explore Your Trip",
			par: "Review and customize the suggested itinerary. Make any changes to fit your needs, explore additional options, and save the final plan. Get ready to enjoy a journey that's uniquely tailored to you.",
			src: passport,
			cta: "Try It Out Today",
			alt: "Passport illustration",
			bg: "bg-gradient-to-br from-sky-500 to-indigo-500",
		},
	];

	return (
		<div style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(245,245,245,0.5),rgba(0,0,0,0)), url('https://img.freepik.com/free-vector/gradient-white-monochrome-background_23-2149017048.jpg?w=1800&t=st=1727006162~exp=1727006762~hmac=9fa9f9a422e3dd2975be9f53292cccf99e9d3529c067fc58d1191b72121a98e1')" }} className="w-full bg-cover bg-center px-6 pb-40 pt-16">
			<h2 className="mx-auto mb-6 max-w-6xl text-5xl font-extrabold text-gray-800 sm:mb-16 ">How to Use venture</h2>
			<div className="mx-auto max-w-6xl gap-8">
				{gradient.map((item, id) => (
					<div key={id} className="mb-8 flex flex-col justify-between gap-8 lg:flex-row">
						<div className="flex w-full items-center justify-center">
							<img className="aspect-square max-h-80" src={item.src} alt={item.alt} />
						</div>
						<div className="mx-auto max-w-xl rounded-3xl  bg-white px-8 py-10 shadow-lg backdrop-blur-xl">
							<h3 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">{item.title}</h3>
							<p className="mb-8 text-justify text-base font-medium leading-7 text-gray-400 sm:text-lg">{item.par}</p>
							<button onClick={handleNaviagtion} className={`${item.bg} w-full rounded-xl px-6 py-4 text-center text-xl font-bold text-white shadow-md transition-transform duration-150 hover:scale-[1.02]`}>
								{item.cta}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default gradient;
