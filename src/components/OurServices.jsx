/** @format */

import serviceList from "../lists.json";
import Button from "./Button";

const jsonData = serviceList.ourServices;
const recentService = jsonData.slice(0, 3);
const OurServices = () => {
	return (
		<section className='p-6' id='count'>
			<div className='flex flex-col justify-center items-center'>
				<p className='text-green text-lg font-monserat font-bold'>
					Our Services
				</p>
				<p className='font-bold text-3xl font-mplus'>
					Want Your Money Back? We’re In the Solutions Business!
				</p>
				<div className='grid grid-cols-1 p-3 my-6 md:grid-cols-3'>
					{/* List map will wrap here */}
					{recentService.map((item) => (
						<div
							key={item.id}
							className='flex flex-col items-center justify-center border rounded shadow-xl mx-6 p-6 hover:-translate-y-2 transition-all'>
							<span className='flex items-center justify-center w-8 h-8 shrink-0 grow-0 p-12 bg-tangerineYellow rounded-full bg-opacity-50'>
								<i
									className={`${item.icon} text-green text-4xl`}
									style={{}}></i>
							</span>
							<p className='text-lg font-monserat font-bold p-3 text-green'>
								{item.title}
							</p>
							<p className='text-lg text-center  p-1'>{item.description}</p>
						</div>
					))}
				</div>
				<Button title='View More Services' url='services' />
			</div>
		</section>
	);
};

export default OurServices;
