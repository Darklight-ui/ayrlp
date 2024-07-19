/** @format */
import logo from "../assets/images/ayr.png";
const AboutUs = () => {
	return (
		<>
			<section className='bg-gray-200' id='aboutUs'>
				<div className=' flex flex-col items-center justify-center px-6 mx-auto py-6 space-y-0 md:soace-y-0 md:flex-row'>
					{/* <!-- Left item --> */}
					<div className='flex items-center justify-center w-full md:w-1/2'>
						<img src={logo} alt='aboutSVG' />
					</div>
					{/* <!-- Right item --> */}
					<div className='flex flex-col w-full md:w-1/2'>
						<div className='flex flex-col items-left'>
							<p className='text-sm text-green font-monserat uppercase'>
								About Us
							</p>
							<p className='text-5xl font-bold w-9/12'>
								We Are Industry Leaders in Financial Recovery.
							</p>
							<p className='text-md font-monserat tracking-wider leading-7 mt-3'>
								Cyberdarklight is a group of professionals with amazing skills
								and extensive financial, legal, and regulatory backgrounds. We
								take up the fight to help victims of fraudulent and unregulated
								Binary Options/Forex and Cryptocurrency companies get back their
								money to the very last penny.
							</p>
						</div>
						{/* <!-- progress bar --> */}
						<div className='flex flex-col items-left my-6 p-2'>
							<div className='p-3 my-2'>
								<p className='text-sm font-thin uppercase'>binary options</p>
								<div className='h-3 w-full bg-gray-400 rounded overflow-hidden'>
									<div
										className='h-full bg-green transition-all'
										style={{ width: "97%" }}></div>
								</div>
							</div>
							<div className='p-3 my-2'>
								<p className='text-sm font-thin uppercase'>binary options</p>
								<div className='h-3 w-full bg-gray-400 rounded overflow-hidden'>
									<div
										className='h-full bg-green transition-all'
										style={{ width: "90%" }}></div>
								</div>
							</div>
							<div className='p-3 my-2'>
								<p className='text-sm font-thin uppercase'>Cryptocurrency</p>
								<div className='h-3 w-full bg-gray-400 rounded overflow-hidden'>
									<div
										className='h-full bg-green transition-all'
										style={{ width: "89%" }}></div>
								</div>
							</div>
							<div className='p-3 my-2'>
								<p className='text-sm font-thin uppercase'>Stock Trading</p>
								<div className='h-3 w-full bg-gray-400 rounded overflow-hidden'>
									<div
										className='h-full bg-green transition-all'
										style={{ width: " 92%" }}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUs;
