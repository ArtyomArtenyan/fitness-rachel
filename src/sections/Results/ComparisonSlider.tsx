import beforeImg from '../../assets/images/before__img.png';
import afterImg from '../../assets/images/after__img.png';
import { useRef } from 'react';
import { LiaArrowsAltHSolid } from 'react-icons/lia';

export const ComparisonSlider = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const revealRef = useRef<HTMLImageElement>(null);
	const handleRef = useRef<HTMLDivElement>(null);

	const isDragging = useRef(false);
	const raf = useRef<number | null>(null);

	const setPosition = (pos: number) => {
		if (revealRef.current) {
			revealRef.current.style.clipPath = `polygon(0 0, ${pos * 100}% 0, ${pos * 100}% 100%, 0 100%)`;
		}
		if (handleRef.current) {
			handleRef.current.style.left = `${pos * 100}%`;
		}
	};

	const updatePosition = (clientX: number) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const pos = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
		setPosition(pos);
	};

	const handlePointerDown = (e: React.PointerEvent) => {
		isDragging.current = true;
		updatePosition(e.clientX);
	};

	const handlePointerMove = (e: React.PointerEvent) => {
		if (!isDragging.current) return;
		if (raf.current) return;

		raf.current = requestAnimationFrame(() => {
			updatePosition(e.clientX);
			raf.current = null;
		});
	};

	const stopDragging = () => {
		isDragging.current = false;
	};

	return (
		<div
			ref={containerRef}
			onPointerMove={handlePointerMove}
			onPointerUp={stopDragging}
			onPointerLeave={stopDragging}
			className=' relative w-full max-w-full touch-none overflow-hidden rounded-[20px] shrink-0 md:max-w-136 select-none'
		>
			<img
				className='pointer-events-none w-full'
				src={beforeImg}
				alt='Before'
				draggable={false}
			/>

			<img
				ref={revealRef}
				style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
				className='pointer-events-none absolute inset-0 w-full will-change-[clip-path]'
				src={afterImg}
				alt='After'
				draggable={false}
			/>

			<div
				ref={handleRef}
				style={{ left: '50%' }}
				className='pointer-events-none absolute inset-y-0 -translate-x-1/2'
			>
				<div className='h-full w-0.5 bg-white/60' />
				<div
					onPointerDown={handlePointerDown}
					className='pointer-events-auto absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg'
				>
					<LiaArrowsAltHSolid size={19} color='black' />
				</div>
			</div>

			<div
				className='absolute bottom-4 left-4 cursor-pointer'
				onClick={() => setPosition(0)}
			>
				<span className='rounded-lg bg-white/30 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm'>
					Before
				</span>
			</div>

			<div
				className='absolute bottom-4 right-4 cursor-pointer'
				onClick={() => setPosition(1)}
			>
				<span className='rounded-lg bg-white/30 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm'>
					After
				</span>
			</div>
		</div>
	);
};
