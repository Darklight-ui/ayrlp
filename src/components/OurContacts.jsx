/** @format */

import ContactsForm from "./ContactsForm";

const OurContacts = () => {
	return (
		<section className='bg-gray-200' id='hero'>
			<div className='container flex flex-col px-6 justify-center mx-auto py-6 space-y-0 md:space-y-0 md:flex-row w-auto'>
				<div className='relative flex flex-col items-center justify-center md:w-1/2 w-full bg-bgImg bg-cover bg-no-repeat bg-center rounded'>
					{/* <!-- Left Item --> */}
					<p className=' text-lg font-bold md:text-lg text-green md:text-left z-10 mt-20'>
						LET’S CHAT
					</p>
					<h1 className='flex items-center justify-center text-center text-darkGrayishBlue font-black text-xl font-monserat w-4/5 z-10 text-white md:text-4xl'>
						Speak With a Recovery Expert Now
					</h1>
					<p className=' text-lg z-10 mt-2 text-white'>
						We will help you to achieve your goals and to grow your business.
					</p>
					<div className='flex flex-col items-left z-10 m-6 p-6 w-full'>
						<div className='flex space-x-16 mb-6'>
							<div className='icon'>
								<i className='bi bi-envelope-arrow-down-fill md:text-2xl text-xl text-white'></i>
							</div>
							<div className='text font-mplus'>
								<p className='md:text-2xl text-xl text-white'>Email:</p>
								<p className='md:text-2xl text-xl text-white'>
									emailaddress@mail.com
								</p>
							</div>
						</div>
						<div className='flex space-x-16 mb-6'>
							<div className='icon'>
								<i className='bi bi-telephone-fill md:text-2xl text-xl text-white'></i>
							</div>
							<div className='text font-mplus'>
								<p className=' md:text-2xl text-xl text-white'>Phone:</p>
								<p className=' md:text-2xl text-xl text-white'>
									+44 7541 609391
								</p>
							</div>
						</div>
						<div className='flex space-x-16 mb-6'>
							<div className='icon'>
								<i className='bi bi-geo-alt md:text-2xl text-xl text-white'></i>
							</div>
							<div className='text font-mplus'>
								<p className=' md:text-2xl text-xl text-white'>Address:</p>
								<p className=' md:text-2xl text-xl text-white'>
									1st Floor Rico House, George Street, Prestwich, Manchester,
									M25 9WS
								</p>
							</div>
						</div>
					</div>
					<a
						href='#'
						className='flex z-10 md:block p-3 px-6 pt-2 text-white bg-tangerineYellow hover:bg-green transition-all rounded-full baseline hover:bg-brightRedLight'>
						Get Started
					</a>
					<div className='absolute inset-0 bg-blue-400 bg-opacity-75'></div>
				</div>
				<ContactsForm />
			</div>
		</section>
	);
};

export default OurContacts;
