/** @format */

import {
	countries,
	amountList,
	currencyList,
	paymentList,
	scamTypeList,
} from "../assets/js/formData";
const ContactsForm = () => {
	return (
		<div className='md:w-1/2'>
			<div className='flex flex-col border  shadow-xl bg-ivory rounded max-h-full mb-6'>
				<div className='flex flex-col p-2 my-3 items-center'>
					<p className='font-bold font-mplus text-2xl'>Get Your Money Back</p>
					<p className='text-center'>
						Just some basic details to get us started
					</p>
				</div>
				{/* <!-- form --> */}
				<form action='#' className='form'>
					<div className='flex flex-1 justify-around container px-6'>
						<div className='sm:col-span-4 flex flex-col w-full'>
							<label
								htmlFor='First Name'
								className='block text-sm font-medium leading-6 text-gray-900'>
								First Name
							</label>
							<div className='mt-2'>
								<input
									type='text'
									name='firstName'
									id='firstName'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='First Name'
									required
								/>
							</div>
						</div>
						<div className='sm:col-span-4 flex flex-col w-full mx-3'>
							<label
								htmlFor='Last Name'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Last Name
							</label>
							<div className='mt-2'>
								<input
									type='text'
									name='lastName'
									id='lastName'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='Last Name'
									required
								/>
							</div>
						</div>
					</div>
					<div className='sm:col-span-4 p-6'>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-gray-900'>
							Email
						</label>
						<div className='mt-2'>
							<input
								type='email'
								name='email'
								id='email'
								className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
								placeholder='Email'
								required
							/>
						</div>
					</div>
					<div className='flex flex-1 justify-around container px-6'>
						<div className='sm:col-span-4 flex flex-col w-full'>
							<label
								htmlFor='Country'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Country
							</label>
							<div className='mt-2'>
								<select
									type='text'
									name='country'
									id='countryList'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='Country'
									required>
									{countries.map((country) => (
										<option key={country} value={country}>
											{country}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='sm:col-span-4 flex flex-col w-full mx-3'>
							<label
								htmlFor='Phone'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Phone
							</label>
							<div className='mt-2'>
								<input
									type='tel'
									name='phone'
									id='phone'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='Phone'
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-1 justify-around container px-6'>
						<div className='sm:col-span-4 flex flex-col w-full'>
							<label
								htmlFor='scam company name'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Scam Company Name
							</label>
							<div className='mt-2'>
								<input
									type='text'
									name='scam company name'
									id='scn'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='Scam Company Name'
								/>
							</div>
						</div>
						<div className='sm:col-span-4 flex flex-col w-full mx-3'>
							<label
								htmlFor='amount'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Amount Lost
							</label>
							<div className='mt-2'>
								<select
									type='text'
									name='amountStolen'
									id='amountLostList'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='Amount'
									required>
									{amountList.map((amount) => (
										<option key={amount} value={amount}>
											{amount}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<div className='flex flex-1 justify-around container px-6'>
						<div className='sm:col-span-4 flex flex-col w-full'>
							<label
								htmlFor='currency'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Currency
							</label>
							<div className='mt-2'>
								<select
									type='text'
									name='currency'
									id='currencyList'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='currency'
									required>
									{currencyList.map((currency) => (
										<option key={currency} value={currency}>
											{currency}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='sm:col-span-4 flex flex-col w-full mx-3'>
							<label
								htmlFor='payment method'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Payment Method
							</label>
							<div className='mt-2'>
								<select
									type='text'
									name='paymentMethod'
									id='paymentMethodList'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='paymentMethod'
									required>
									{paymentList.map((payment) => (
										<option key={payment} value={payment}>
											{payment}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<div className='flex flex-1 justify-around container px-6'>
						<div className='sm:col-span-4 flex flex-col w-full'>
							<label
								htmlFor='transaction'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Last Transaction Date
							</label>
							<div className='mt-2'>
								<input
									type='date'
									name='transactionDate'
									id='transaction'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='DD/MM/YYYY'
									required
								/>
							</div>
						</div>
						<div className='sm:col-span-4 flex flex-col w-full mx-3'>
							<label
								htmlFor='payment method'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Select Scam Type
							</label>
							<div className='mt-2'>
								<select
									type='text'
									name='Scamtype'
									id='selectScamtypeList'
									className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
									placeholder='selectScamtype'
									required>
									{scamTypeList.map((scamType) => (
										<option key={scamType} value={scamType}>
											{scamType}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<div className='sm:col-span-4 p-6'>
						<label
							htmlFor='msg'
							className='block text-sm font-medium leading-6 text-gray-900'>
							Message
						</label>
						<div className='mt-2'>
							<textarea
								rows='3'
								name='message'
								id='email'
								className='form__input w-full block flex-1 shadow-sm border ring-1 ring-gray-300 rounded-md bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
								placeholder='Tell us what happened'
								required></textarea>
						</div>
					</div>
					<div className='sm:col-span-4 p-6'>
						<div className='mt-2'>
							<input
								type='submit'
								name='submit'
								id='submit'
								className='w-full block flex-1 shadow-sm border rounded-md bg-green  py-1.5 pl-3 text-white  sm:text-sm sm:leading-6 hover:bg-tangerineYellow cursor-pointer transition-all'
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactsForm;
