import React from 'react';
import CTAButton from '../CTAButton';

type SectionIntroProps = {
	label: string;
	title: string;
	text: string;
	buttonLabel?: string;
	children?: React.ReactNode;
};

const SectionIntro = ({
	label,
	title,
	text,
	buttonLabel,
	children,
}: SectionIntroProps) => {
	return (
		<div className='flex flex-col justify-center gap-2.5'>
			<h4 className='text-[#919191]'>{label}</h4>

			<h2 className='text-[31px] md:text-[38px] xl:text-5xl'>
				{title}
				{children ?? ''}
			</h2>

			<p className='w-full max-w-110 text-[17px] leading-7.5'>{text}</p>

			{buttonLabel && <CTAButton label={buttonLabel} />}
		</div>
	);
};

export default SectionIntro;
