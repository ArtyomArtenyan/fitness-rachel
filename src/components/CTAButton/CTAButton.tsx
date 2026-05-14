import ArrowButton from '../ArrowButton/ArrowButton';

type CTAButtonProps = {
	label: string;
	href?: string;
	variant?: 'primary' | 'secondary';
	className?: string;
};

const CTAButton = ({
	label,
	href = 'https://cal.com/',
	variant = 'primary',
	className,
}: CTAButtonProps) => {
	const variants = {
		primary: {
			container:
				'bg-[#f9652f] p-2 text-[#111111] transition-all duration-300 hover:bg-[#121212] hover:text-white',
			button: 'bg-[#121212] group-hover:bg-[#f9652f]',
		},
		secondary: {
			container:
				' bg-[#121212] border-[#3c3c3c] border-solid border-1 p-2 text-[#fff] transition-all duration-300 hover:bg-[#212121] hover:text-white',
			button: 'bg-[#212121] group-hover:bg-[#f9652f]',
		},
	};

	const currentVariant = variants[variant];

	return (
		<div
			className={`group flex justify-between gap-8 items-center rounded-[10px] md:max-w-fit ${currentVariant.container} ${className}`}
		>
			<span className='w-fit'>{label}</span>
			<ArrowButton href={href} bgColor={currentVariant.button} />
		</div>
	);
};

export default CTAButton;
