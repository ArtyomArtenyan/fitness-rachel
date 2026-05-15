import beforeImg from '../../assets/images/before__img.png';
import afterImg from '../../assets/images/after__img.png';
import { useRef, useState } from 'react';
import { LiaArrowsAltHSolid } from 'react-icons/lia';

export const ComparisonSlider = () => {
	const [imageRevealFraq, setImageRevealFraq] = useState(0.5);

	const imageContainer = useRef<HTMLDivElement>(null);

	const slide = (xPosition: number): void => {
		if (!imageContainer.current) return;
		const slider = imageContainer.current.getBoundingClientRect();
		const fraction = (xPosition - slider.left) / slider.width;
		setImageRevealFraq(Math.min(Math.max(fraction, 0), 1));
	};

	const hendleMouseDown = (): void => {
		window.onmousemove = hendleMouseMove;
		window.onmouseup = hendleMouseUp;
	};

	const hendleMouseMove = (event: MouseEvent): void => {
		slide(event.clientX);
	};
	const hendleMouseUp = (): void => {
		window.onmousemove = null;
		window.onmouseup = null;
	};
	return (
		<div
			ref={imageContainer}
			className='relative w-full max-w-full overflow-hidden rounded-[20px] shrink-0 md:max-w-136 select-none'
		>
			<img
				className='w-full pointer-events-none'
				src={beforeImg}
				alt='Before'
			/>

			<img
				style={{
					clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`,
				}}
				className='absolute inset-0 w-full pointer-events-none'
				src={afterImg}
				alt='After'
			/>

			<div
				style={{ left: `${imageRevealFraq * 100}%` }}
				className='absolute inset-y-0 -translate-x-1/2'
			>
				<div className='h-full w-0.5 bg-white/60' />
				<div
					onMouseDown={hendleMouseDown}
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg'
				>
					<LiaArrowsAltHSolid size={19} color='black' />
				</div>
			</div>
		</div>
	);
};
