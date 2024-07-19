/** @format */

// eslint-disable-next-line react/prop-types
const OurWorkingProcessListing = ({ item }) => {
	return (
		<div
			// eslint-disable-next-line react/prop-types
			key={item.id}
			className='flex flex-col row-span-3 items-center justify-center border rounded shadow-xl mx-6 p-6 hover:-translate-y-2 transition-all'>
			<i className={item.icon}></i>
			<p className='text-lg font-monserat font-bold p-3'>{item.title}</p>
			<p className='text-lg text-center p-1'>{item.description}</p>
		</div>
	);
};

export default OurWorkingProcessListing;
