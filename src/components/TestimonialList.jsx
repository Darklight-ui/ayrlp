/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/** @format */

import { useState } from "react";
import photo from "../assets/images/1.png";

// eslint-disable-next-line react/prop-types
const TestimonialList = ({ item }) => {
	// eslint-disable-next-line no-unused-vars
	const [showFullDescription, setShowFullDescription] = useState(false);
	let description = item.description;
	if (!showFullDescription) {
		description = description.substring(0, 90) + "...";
	}
	return (
		<div key={item.id} className='flex flex-col m-3'>
			<div className='flex flex-col items-center justify-center w-full border rounded shadow-xl mx-6 p-6 hover:-translate-y-2 transition-all'>
				<div className='flex flex-1 items-center justify-between w-full'>
					<div className='flex flex-col items-center justify-center m-3'>
						<span className='flex items-center justify-center w-8 h-8 shrink-0 grow-0 p-12'>
							<i className='bi bi-quote text-green text-4xl'></i>
						</span>
						<span className='flex items-center justify-center'>
							<p className='text-green text-xl font-bold'>{item.name}</p>
						</span>
					</div>
					<div className='m-3'>
						<img
							src={photo}
							alt='photo'
							className=''
							style={{ width: "100px", borderRadius: "50%" }}
						/>
					</div>
				</div>
				<p className='text-lg text-center p-1'>{description}</p>
				<button
					onClick={() => setShowFullDescription((prevState) => !prevState)}
					className='flex flex-col text-green mb-5 hover:text-tangerineYellow'>
					{showFullDescription ? "Read less" : "Read more"}
				</button>
			</div>
		</div>
	);
};

export default TestimonialList;
