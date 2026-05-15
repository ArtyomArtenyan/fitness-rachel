import Container from '../../components/Container';
import SectionIntro from '../../components/SectionIntro';
import { HiOutlineChartBar } from 'react-icons/hi';
import { programs } from './programs.data';
import { LuCheck } from 'react-icons/lu';
import CTAButton from '../../components/CTAButton';

const Programs = () => {
	return (
		<section id='programs' className='py-24'>
			<Container>
				<SectionIntro
					label='For you'
					title='Signature Programs!'
					text='Choose the program that fits your goals, lifestyle, and pace. Every plan includes personalized workouts, nutrition guidance, and weekly support,'
					position='center'
				/>

				<div className='grid grid-cols-1 mt-7.5 gap-7.5 xl:grid-cols-3 xl:items-stretch'>
					{programs.map(program => {
						const Icon = program.icon;
						const isPopular = program.popular;

						return (
							<article
								key={program.id}
								className={`flex flex-col h-full gap-6 rounded-[20px] p-5 ${
									isPopular ? 'bg-[#f9652f] text-[#111111]' : 'bg-[#212121]'
								}`}
							>
								<div className='flex flex-col gap-3.75 '>
									<div className='flex items-center justify-between text-white'>
										<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-[#121212] p-2.5'>
											<Icon size={20} color='white' />
										</div>
										{isPopular && (
											<div className='rounded-lg bg-[#121212] p-2.5'>
												<span className='text-sm text-white'>Most Popular</span>
											</div>
										)}
									</div>

									<h3 className='text-xl'>{program.title}</h3>

									<div className='flex items-end gap-1'>
										<span className='text-[40px] font-bold leading-none'>
											{program.price}
										</span>
										<span
											className={`mb-1 text-sm ${isPopular ? 'text-[#111111]' : 'text-[#919191]'}`}
										>
											/month
										</span>
									</div>

									<p
										className={`leading-normal ${isPopular ? 'text-[#111111]' : 'text-[#919191]'}`}
									>
										{program.description}
									</p>
								</div>
								<div className='flex flex-col gap-4.5'>
									<span className='text-[17px]'>What's included</span>
									<ul className='flex flex-col gap-2.5'>
										{program.features.map((feature, index) => (
											<li
												key={index}
												className='flex items-center gap-2 leading-[1.4]'
											>
												<LuCheck size={18} className='shrink-0' />
												{feature}
											</li>
										))}
									</ul>
								</div>
								<div className='mt-auto'>
									<CTAButton
										className='md:max-w-full'
										label='Book Your Free Call'
										variant='secondary'
									/>
								</div>{' '}
							</article>
						);
					})}
				</div>
			</Container>
		</section>
	);
};

export default Programs;
