import Container from '../../components/Container/Container';
import { services } from './services.data';
import SectionIntro from '../../components/SectionIntro';
import Process from '../Process';
import FadeIn from '../../components/FadeIn';

const Services = () => {
	return (
		<section id='services' className='pb-24 scroll-mt-20 gap-24'>
			<Container>
				<div className='flex flex-col justify-between gap-8.75 xl:flex-row'>
					<SectionIntro
						label='Services'
						title='Choose the support'
						text='Flexible options to fit every budget and lifestyle, all packages
							includes nutrition guidance and on-going weekly support'
						buttonLabel='Get Started with Rachel'
					>
						{' '}
						<span className='xl:block'> that fits your life</span>
					</SectionIntro>

					<div
						className='
						grid
						grid-cols-1
						gap-4
						md:grid-cols-2
						md:grid-rows-[200px_200px_1fr]
						xl:grid-cols-[262px_262px]
						xl:grid-rows-[200px_200px]
						xl:justify-center'
					>
						{services.map((service, index) => {
							if (service.type === 'large') {
								return (
									<FadeIn
										key={service.id}
										direction='up'
										delay={index * 0.1}
										className='flex md:row-[1/3] lg:row-auto'
									>
										<article className='flex flex-col justify-between rounded-[28px] bg-[#2b2b2b] p-6 w-full'>
											<h3 className='text-[35px] xl:text-[65px]'>
												{service.title}
											</h3>

											<div className='flex flex-col gap-2.5'>
												<h4 className='text-xl'>{service.label}</h4>
												<p className='text-sm leading-5 text-[#919191]'>
													{service.text}
												</p>
											</div>
										</article>
									</FadeIn>
								);
							}

							if (service.type === 'wide') {
								const Icon = service.icon;
								return (
									<FadeIn
										key={service.id}
										direction='up'
										delay={index * 0.1}
										className='flex md:col-[span_2]'
									>
										<article className='flex justify-between bg-[#2b2b2b] p-6 rounded-[28px] flex-col flex-nowrap gap-2 md:flex-row w-full'>
											<div className='flex flex-col justify-between'>
												{Icon ? <Icon size={29} /> : null}

												<div className='flex flex-col gap-2.5'>
													<h3 className='text-xl'>{service.label}</h3>
													<p className='text-sm leading-5 text-[#919191]'>
														{service.text}
													</p>
												</div>
											</div>

											<img
												className='h-50 w-full rounded-[20px] object-cover object-top xl:h-full md:max-w-62.5 md:h-full'
												src={service.image}
												alt=''
											/>
										</article>
									</FadeIn>
								);
							}

							const Icon = service.icon;
							return (
								<FadeIn
									key={service.id}
									direction='up'
									delay={index * 0.1}
									className='flex'
								>
									<article className='flex flex-col justify-between rounded-[28px] bg-[#2b2b2b] p-6 w-full'>
										{Icon ? <Icon size={29} /> : null}

										<div className='flex flex-col gap-2.5'>
											<h3 className='text-xl'>{service.label}</h3>
											<p className='text-sm leading-5 text-[#919191]'>
												{service.text}
											</p>
										</div>
									</article>
								</FadeIn>
							);
						})}
					</div>
				</div>
			</Container>
			<Process />
		</section>
	);
};

export default Services;
