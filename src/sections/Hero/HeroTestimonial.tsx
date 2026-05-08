import { IoIosStar } from 'react-icons/io';

import userAvatar from '../../assets/images/ksrhA9T3dtRuQYVRj7NR2n41EDA.webp';

import Container from '../../components/Container';

export const HeroTestimonial = () => {
	return (
		<div className='py-24'>
			<Container className='flex justify-center'>
				<div className='flex gap-3.75 items-start justify-center flex-col max-w-207.5 w-full'>
					<div className='testimonial__rate flex gap-1'>
						<IoIosStar color='yellow' />
						<IoIosStar color='yellow' />
						<IoIosStar color='yellow' />
						<IoIosStar color='yellow' />
						<IoIosStar color='yellow' />
					</div>
					<h1 className='testimonial__text text-[35px] xl:text-5xl xl:leading-none'>
						“After two kids, I never thought I’d feel this strong again. Rachel
						Stone helped me rebuild my body and confidence.”
					</h1>
					<div className='flex items-center gap-3.75 flex-nowrap'>
						<img className='w-16.25 h-16.25 rounded-full' src={userAvatar} />
						<div className='testimonial__card-text'>
							<h3 className='text-xl mb-1.25'>Sara Chen</h3>
							<span className='text-[rgb(159,159,159)]'>
								Postnatal Reboot - November 2025
							</span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
