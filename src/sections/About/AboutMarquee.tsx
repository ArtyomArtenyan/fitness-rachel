import { motion } from 'framer-motion';
import { BRAND_ICONS } from './brands';

export const AboutMarquee = () => {
	return (
		<div className='overflow-hidden py-18'>
			<motion.div
				className='flex gap-16 w-max'
				animate={{ x: ['-50%', '0%'] }}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: 'linear',
				}}
			>
				{[...BRAND_ICONS, ...BRAND_ICONS, ...BRAND_ICONS, ...BRAND_ICONS].map(
					(logo, i) => (
						<img key={i} src={logo} alt='' className='h-10 w-auto opacity-30' />
					),
				)}
			</motion.div>
		</div>
	);
};
