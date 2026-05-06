import { IoIosStar } from 'react-icons/io';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { CiCalendar } from 'react-icons/ci';

import avatar1 from '../../assets/images/39fns76RhZkslOIUwoW2fWRiGg.webp';
import avatar2 from '../../assets/images/opAKDP2owoXDO7n6xoppYXwxfo.webp';
import ArrowButton from '../../components/ArrowButton/ArrowButton';

const Hero = () => {
	return (
		<section>
			<div className='mx-auto w-full max-w-380 px-4 md:px-10 xl:px-12'>
				<div className='flex flex-col gap-10 pb-7 md:flex-row md:items-end md:justify-between'>
					<div className='flex flex-col gap-5'>
						<div className='flex w-fit items-center justify-center gap-2.5 rounded-[30px] bg-[#121212] px-3.5 py-2.5'>
							<IoShieldCheckmarkOutline size={22} />

							<span className='text-sm font-semibold'>
								30-Day Money-Back Guarantee
							</span>
						</div>

						<div className='flex items-center gap-2.5'>
							<div className='flex w-fit shrink-0 items-center gap-1 rounded-[30px] bg-[#121212] p-0.5'>
								<img className='w-10 rounded-full' src={avatar1} alt='' />
								<img className='w-10 rounded-full' src={avatar2} alt='' />
							</div>

							<div className='flex flex-col gap-1 text-[15px] font-semibold italic'>
								<span>Trusted by 2,000+ clients worldwide</span>

								<span className='flex items-center font-medium not-italic'>
									<IoIosStar className='text-yellow-400' />
									Rated 4.9 out of 5.0
								</span>
							</div>
						</div>

						<h1 className='w-full max-w-196.25 text-[32px] font-normal leading-none tracking-[-0.04em] lg:text-[40px] md:max-w-165 md:text-[52px] xl:max-w-196.25 xl:text-[65px]'>
							Because your best self isn’t behind you, it’s ahead
						</h1>
					</div>

					<div className='group w-full max-w-full md:flex md:max-w-75 md:items-center'>
						<div className='flex w-full max-w-full flex-col justify-between gap-4.5 rounded-[15px] bg-[#f9652f] p-2 text-[#111111] transition-all duration-300 hover:bg-[#121212] hover:text-white md:max-w-105 md:rounded-[20px] md:px-5.5 md:py-5'>
							<div className='hidden md:block'>
								<CiCalendar size={24} />
							</div>

							<div className='flex items-center justify-between'>
								<div className='flex flex-col gap-1.5'>
									<span className='hidden md:block'>30-min session</span>

									<span className='text-xl font-medium'>Book Your Call</span>
								</div>
								<ArrowButton
									href='https://cal.com/'
									bgColor='#121212'
									bgHoverColor='bg-[#f9652f]'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
