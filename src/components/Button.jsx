/** @format */

const Button = (props) => {
	return (
		<section className='m-auto max-w-lg my-10 px-6 '>
			<a
				href={`${props.url}`}
				className='z-10 text-center py-4 px-6 rounded-xl bg-tangerineYellow text-white hover:bg-green'>
				{props.title}
			</a>
		</section>
	);
};

export default Button;
