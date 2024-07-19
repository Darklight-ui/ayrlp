/** @format */

import logo from "../assets/images/ayr.png";
const navbar = () => {
	return (
		<>
			<nav className='drop-shadow-lg sticky top-0 p-6 bg-ivory z-50'>
				<div className='flex items-center justify-between'>
					<div className='pt-2'>
						<img src={logo} alt='logo' width='200' />
					</div>

					<div className='hidden space-x-6 md:flex'>
						<a href='#' className='font-bold text-lg hover:text-green'>
							Home
						</a>
						<p
							href='#'
							className='font-bold text-lg hover:text-green'
							id=''
							onClick='toggleButton()'>
							Services
						</p>

						<div
							className='hidden absolute right-30 top-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
							id='dropdownMenu'>
							<div className='py-1' role='none'>
								<a
									href='./servicesPage/binaryOption.html'
									className='text-gray-700 block px-4 py-2 text-sm'
									role='menuitem'
									tabIndex='-1'
									id='menu-item-0'>
									Binary Options
								</a>
								<a
									href='./servicesPage/cryptocurrencyScam.html'
									className='text-gray-700 block px-4 py-2 text-sm'
									role='menuitem'
									tabIndex='-1'
									id='menu-item-1'>
									Cryptocurrency Scam
								</a>
								<a
									href='./servicesPage/forexScam.html'
									className='text-gray-700 block px-4 py-2 text-sm'
									role='menuitem'
									tabIndex='-1'
									id='menu-item-2'>
									Forex Scam
								</a>
								<a
									href='./servicesPage/stockexchangescam.html'
									className='text-gray-700 block px-4 py-2 text-sm'
									role='menuitem'
									tabIndex='-1'
									id='menu-item-2'>
									Stock Trading Scam
								</a>
								<a
									href='./servicesPage/MT799.html'
									className='text-gray-700 block px-4 py-2 text-sm'
									role='menuitem'
									tabIndex='-1'
									id='menu-item-2'>
									MT760/MT799 Fraud
								</a>
							</div>
						</div>

						<a
							href='./about.html'
							className='font-bold text-lg hover:text-green'>
							About
						</a>
						<a
							href='./contact.html'
							className='font-bold text-lg hover:text-green'>
							Contact Us
						</a>
						<a href='#' className='font-bold text-lg hover:text-green'>
							FAQs
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default navbar;
