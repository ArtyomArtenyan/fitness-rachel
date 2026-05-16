import { motion } from 'framer-motion';
import React from 'react';

type FadeInProps = {
	children: React.ReactNode;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right' | 'none';
	duration?: number;
	className?: string;
};

const FadeIn = ({
	children,
	delay = 0,
	direction = 'up',
	duration = 0.5,
	className = '',
}: FadeInProps) => {
	const directions = {
		up: { y: 40, x: 0 },
		down: { y: -40, x: 0 },
		left: { y: 0, x: -40 },
		right: { y: 0, x: 40 },
		none: { y: 0, x: 0 },
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
				...directions[direction],
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				y: 0,
			}}
			viewport={{ once: true, margin: '-50px' }}
			transition={{
				duration: duration,
				delay: delay,
				ease: 'easeOut',
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
