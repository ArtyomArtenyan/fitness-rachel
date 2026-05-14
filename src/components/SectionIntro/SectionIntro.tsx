import React from 'react';
import CTAButton from '../CTAButton';

type SectionIntroProps = {
	label: string;
	title: string;
	text: string;
	buttonLabel?: string;
	position?: 'left' | 'center';
	children?: React.ReactNode;
};

const SectionIntro = ({
	label,
	title,
	text,
	buttonLabel,
	position = 'left',
	children,
}: SectionIntroProps) => {
	return (
		<div
			className={`flex flex-col justify-center ${position == 'center' ? 'items-center text-center' : ''} gap-2.5`}
		>
			<h4 className='text-[#919191]'>{label}</h4>

			<h2
				className={`text-[31px] font-semibold md:text-[38px] xl:text-5xl ${
					position == 'center' ? 'text-center' : ''
				}`}
				text-center
			>
				{title}
				{children ?? ''}
			</h2>

			<p
				className={`
					max-w-120 w-full
					text-[16px]
					font-medium
					tracking-[-0.01em]
					leading-[1.6em] 
				
					${position == 'center' ? 'text-center max-w-140 w-full leading-6.25 ' : ''}`}
			>
				{text}
			</p>

			{buttonLabel && <CTAButton label={buttonLabel} />}
		</div>
	);
};

export default SectionIntro;
