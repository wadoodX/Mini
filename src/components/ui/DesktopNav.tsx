import { NavLink, Link } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const DesktopNav = () => {
	// const { user, loading } = UserAuth();

	// const navLoadClass = loading ? "opacity-0" : "";

	return (
		<div className="fixed box-border w-full border-b border-b-slate-800 bg-gradient-to-b from-gray-900 to-black py-4 text-gray-100">
			<div className="m-auto flex max-w-7xl items-center justify-between text-xl font-bold">
			<NavLink className="mr-4" to="/">
    			<img src="/wlogo2.jpg" className="h-[58px] w-[135px] rounded-lg" alt="venture logo" />
			</NavLink>
				<div>
					<NavLink to="/" className="transition-color rounded-full px-8 py-[14px] duration-150 hover:text-cyan-400">
						Home
					</NavLink>
					<NavLink to="/planner" className="transition-color rounded-full px-8 py-[14px] duration-150 hover:text-cyan-400">
						Plan A Trip
					</NavLink>
					<NavLink to="/blog" className="transition-color rounded-full px-8 py-[14px] duration-150 hover:text-cyan-400">
						Blog
					</NavLink>
					<Link target="_blank" to="https://venture.canny.io/feature-requests" className="transition-color rounded-full px-8 py-[14px] duration-150 hover:text-cyan-400">
						Feedback
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DesktopNav;
