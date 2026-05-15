import Container from '../../components/Container/Container';
import { services } from './services.data';
import SectionIntro from '../../components/SectionIntro';

const Services = () => {
	return (
		<section id='services' className='pb-24'>
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
						{services.map(service => {
							if (service.type === 'large') {
								return (
									<article
										key={service.id}
										className='flex flex-col justify-between rounded-[28px] bg-[#2b2b2b] p-6  md:row-[1/3] lg:row-auto'
									>
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
								);
							}

							if (service.type === 'wide') {
								const Icon = service.icon;
								return (
									<article
										key={service.id}
										className='flex justify-between bg-[#2b2b2b] p-6 rounded-[28px] flex-col flex-nowrap gap-2 md:col-[span_2] md:flex-row '
									>
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
								);
							}

							const Icon = service.icon;
							return (
								<article
									key={service.id}
									className='flex flex-col justify-between rounded-[28px] bg-[#2b2b2b] p-6'
								>
									{Icon ? <Icon size={29} /> : null}

									<div className='flex flex-col gap-2.5'>
										<h3 className='text-xl'>{service.label}</h3>
										<p className='text-sm leading-5 text-[#919191]'>
											{service.text}
										</p>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Services;
