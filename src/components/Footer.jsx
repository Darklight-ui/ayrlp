/** @format */

import logo from "../assets/images/ayr.png";
const Footer = () => {
	return (
		<section className='bg-gray-200' id='footer'>
			<div className='flex flex-col px-6 justify-around mx-auto py-6 space-y-0 md:space-y-0 md:flex-row w-auto'>
				<div className='flex flex-col w-full justify-start'>
					<img src={logo} alt='logo' width='370' />
					<p className=' text-lg text-gray-500'>
						Cyberdarklight is a funds recovery firm that specializes in cases
						globally.
					</p>
				</div>
				<div className='flex flex-col w-full items-start md:items-center py-3'>
					<div className='flex flex-col'>
						<p className='text-2xl font-monserat font-bold text-slate-800'>
							Links
						</p>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							Home
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							Contact
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							FAQs
						</a>
					</div>
				</div>
				<div className='flex flex-col w-full items-start md:items-center py-3'>
					<div className='flex flex-col'>
						<p className='text-2xl font-monserat font-bold text-slate-800'>
							Services
						</p>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							Binary Option Scams
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							Cryptocurrency Scams
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							Forex Scams
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							Stock Trading Scams
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							{" "}
							Unexpected Money Scams
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							{" "}
							Unexpected Prize & Lottery Scams
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							{" "}
							MT760/MT799 Fraud
						</a>
					</div>
				</div>
				<div className='flex flex-col w-full items-start md:items-center py-3'>
					<div className='flex flex-col'>
						<p className='text-2xl font-monserat font-bold text-slate-800'>
							Customer Service
						</p>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							customercare@webmal.com
						</a>
						<a
							href='#'
							className=' text-gray-500 hover:text-tangerineYellow p-1'>
							@cyberdarklight
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
