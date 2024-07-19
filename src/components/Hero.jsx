/** @format */

import ContactsForm from "./ContactsForm";

// eslint-disable-next-line react/prop-types
const Hero = ({ title, tagline }) => {
	return (
		<>
			<section className='bg-gray-200' id='hero'>
				{/* <!-- Flex container --> */}
				<div className=' flex flex-col items-center justify-center px-6 mx-auto py-6 space-y-0 md:soace-y-0 md:flex-row w-full'>
					{/* <!-- Left Item --> */}
					<div className='flex flex-col mb-32 space-y-12 md:w-1/2 justify-center w-full'>
						<h1 className=' text-4xl font-bold md:text-5xl md:text-left'>
							{title}
						</h1>
						<p className='max-w-md text-darkGrayishBlue md:text-left'>
							{tagline}
						</p>
					</div>
					{/* <!-- Right item --> */}
					<ContactsForm />
				</div>
			</section>
		</>
	);
};

export default Hero;
