/** @format */

// import { useState } from "react";
import testimonial from "../lists.json";
import Button from "./Button";
import TestimonialList from "./TestimonialList";

const Testimonials = () => {
	const jsonData = testimonial.Testimonials;
	const slicedTestimonial = jsonData.slice(0, 3);
	return (
		<section className='bg-gray-200 p-6' id='count'>
			<div className='flex flex-col items-center m-auto justify-center w-9/12 '>
				<p className='text-green text-md font-bold font-monserat uppercase'>
					testimonials
				</p>
				<p className='text-3xl font-bold font-monserat flex justify-center'>
					What our clients say
				</p>
				<div className='grid grid-cols-1 p-3 md:grid-cols-3'>
					{slicedTestimonial.map((item) => (
						<TestimonialList key={item.id} item={item} />
					))}
				</div>
				<Button title='View More Testimonials' url='/testimonials' />
			</div>
		</section>
	);
};

export default Testimonials;
