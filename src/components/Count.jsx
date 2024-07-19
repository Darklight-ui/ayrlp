/** @format */

const Count = () => {
	return (
		<section className='bg-gray-200 p-6' id='count'>
			<div className='container relative flex justify-center items-center p-9 border  bg-paralax-image bg-no-repeat bg-cover bg-center mx-auto rounded bg-fixed content-center overflow-hidden'>
				<div className='absolute inset-0 bg-gray-800 bg-opacity-75'></div>
				<div className='flex flex-col md:flex-row w-full h-full z-10'>
					<div className='my-3 text-2xl flex flex-col flex-1 text-ivory justify-center items-center md:border-r'>
						<p className='md:text-4xl'>$110,723,018</p>
						<p className='md:mt-6 md:text-2xl'>Money Returned</p>
					</div>
					<div className='my-3 text-2xl flex flex-col flex-1 text-ivory justify-center items-center md:border-r'>
						<p className='md:text-4xl'>10,000+</p>
						<p className='md:mt-6 md:text-2xl'>Clients Helped</p>
					</div>
					<div className='my-3 text-2xl flex flex-col flex-1 text-ivory justify-center items-center'>
						<p className='md:text-4xl'>24/7</p>
						<p className='md:mt-6 md:text-2xl'>Available</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Count;
