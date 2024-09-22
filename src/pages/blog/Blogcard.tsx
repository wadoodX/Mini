import React from "react";
import { BlogCardProps } from "../../types/BlogCardProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { trimStringToCharLimit } from "../../helpers/truncate";

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
	return (
		<div onClick={onClick} className="group relative h-[380px] cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg sm:h-[400px]  md:h-[400px]">
			<div className="overflow-hidden">
				<img className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.08]" src={post.image} alt={post.title} />
			</div>
			<div className="bg--to-t absolute left-0 top-0 flex h-64 w-full items-end from-[#000000] to-[#00000010] px-6 py-4">
				<div className="mb-2 text-xl font-bold text-white">{post.title}</div>
			</div>
			<div className="px-6 py-4">
				<div className="mb-2 flex space-x-2">
					{post.tags.map((item, index) => (
						<div key={index} className="w-fit rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-white">
							{item}
						</div>
					))}
				</div>
				<p className="mb-2 text-justify text-base text-gray-500 ">{trimStringToCharLimit(post.preview, 100)}</p>
			</div>
			<button className="bg--to-t relative bottom-0 w-full -translate-y-20 rounded-xl from-white via-[#ffffff98] to-transparent py-8 font-bold text-gray-600 transition-transform duration-300 hover:-translate-y-24 hover:text-gray-800">
				<span className=" mx-auto flex w-fit flex-col rounded-full px-2 py-1 duration-150">
					<FontAwesomeIcon icon={faChevronUp} />
					Read More
				</span>
			</button>
		</div>
	);
};

export default BlogCard;
