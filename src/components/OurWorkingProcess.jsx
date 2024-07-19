/** @format */

import jsonData from "../lists.json";
import Button from "./Button";
import OurWorkingProcessListing from "./OurWorkingProcessListing";

function OurWorkingProcess() {
	const workingProcess = jsonData.workingProcess;
	return (
		<>
			<section>
				<div className=' flex flex-col justify-center px-6 mx-auto py-6 space-y-0 md:soace-y-0 md:flex-row w-full'>
					{/* <!-- Left Item --> */}
					<div className='flex flex-col mb-32 space-y-3 md:w-1/4 items-center justify-center w-full'>
						<p className='max-w-md text-darkGrayishBlue md:text-left text-green font-bold'>
							Our Working Process
						</p>
						<h1 className='text-center text-3xl font-bold md:text-xl md:text-left'>
							Here to help you get back what you lost to online fraud.
						</h1>
						<p className='text-md text-center font-monserat'>
							Cyberdarklight is a progressive company focused on executing
							chargebacks and recovery of wealth/resources lost via internet
							scams and fraud. We noticed that with the growth and publicity of
							binary options, cryptocurrencies, and Ponzi schemes, innocent
							people have lost millions of dollars to malicious companies,
							hence, the birth of Cyberdarklight to help unfortunate victims get
							their money back.
						</p>
						<p className='text-md text-center font-monserat'>
							However, In Cyberdarklight, every stage and procedure of retrieval
							is systematic, we go through legal processes which involve
							financial sector experts who know and follow the means to help
							recover your funds within a short time. The process are easier,
							faster and better.
						</p>
						<p className='text-md text-center font-monserat'>
							We offer full transparency during the entire process and invite
							you to look up our registration information or to come meet us in
							person. The service is very straight forward and delivers results.
						</p>
						<p className='text-md text-center font-monserat'>
							There are tens of millions of victims every single year throughout
							the world. We know how to recover your funds and we helped
							thousands of scam victims from around the world to recover their
							funds.
						</p>
						<p className='text-md text-center font-monserat'>
							When Cyberdarklight receives a complaint from victims, we
							immediately work and review the details of the situation. For a
							successful recovery, funds recovery review or scam recovery review
							of the claims must be done, and pieces of evidence must be
							gathered.
						</p>
						<p className='text-md text-center font-monserat p-3'>
							The complaint must be valid, and the terms and conditions of the
							company must be followed.
						</p>
						<Button title='Read more' url='/services' />
					</div>
					{/* <!-- Right Item --> */}
					<div className='md:w-1/2'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 -z-50'>
							{workingProcess.map((item) => (
								<OurWorkingProcessListing key={item.id} item={item} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default OurWorkingProcess;
