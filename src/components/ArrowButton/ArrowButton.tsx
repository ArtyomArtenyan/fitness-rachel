import { IoIosArrowRoundForward } from 'react-icons/io';

type ArrowButtonProps = {
	href?: string;
	bgColor: string;
	bgHoverColor?: string;
};

const ArrowButton = ({ href, bgColor, bgHoverColor }: ArrowButtonProps) => {
	return (
		<a
			className={`group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg ${bgColor} p-3 ${bgHoverColor}`}
			href={href}
			target='_blank'
			rel='noreferrer'
		>
			<IoIosArrowRoundForward
				size={34}
				color='white'
				className='absolute translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-8.75 group-hover:opacity-0'
			/>

			<IoIosArrowRoundForward
				size={34}
				color='white'
				className='absolute -translate-x-8.75 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'
			/>
		</a>
	);
};

export default ArrowButton;
