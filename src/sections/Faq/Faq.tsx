import { useState } from 'react';
import Container from '../../components/Container';
import SectionIntro from '../../components/SectionIntro';
import { quations } from './faq.data';

const Faq = () => {
	const [active, setActive] = useState<number[]>([]);

	const hendleClick = (id: number): void => {
		setActive(prev =>
			prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
		);
	};
	return (
		<div className='py-24'>
			<Container>
				<div className='flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-between'>
					<div className='flex flex-col gap-6 xl:max-w-125'>
						<SectionIntro
							label='FAQ'
							title='Frequently '
							text='If you’re new here or wondering what to expect, these answers will guide you through how coaching works, what’s included, and how we tailor every plan to your needs.'
							buttonLabel='Send e-mail'
							buttonType='secondary'
						>
							<span className='block'>Asked Questions</span>
						</SectionIntro>
					</div>
					<div className='flex flex-col '>
						{quations.map(quation => {
							const isOpen = active.includes(quation.id);
							return (
								<div
									key={quation.id}
									className='group border-b border-[#919191] py-5 transition-all duration-500 hover:border-white'
								>
									<button
										onClick={() => hendleClick(quation.id)}
										className='flex w-full items-center justify-between gap-5 text-left cursor-pointer'
									>
										<span className='text-lg'>{quation.title}</span>

										<div className='relative h-5 w-5 shrink-0'>
											<span className='absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white' />

											<span
												className={`
											absolute left-1/2 top-1/2 h-3 w-0.5
											-translate-x-1/2 -translate-y-1/2
											rounded-full bg-white
											transition-all duration-300
											${isOpen ? 'rotate-90 opacity-0' : ''}
										`}
											/>
										</div>
									</button>

									<div
										className={`
									grid transition-all duration-300 ease-in-out
									${isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'}
									`}
									>
										<div className='overflow-hidden'>
											<p className='leading-7 text-[#919191] text-[15px]'>
												{quation.text}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Faq;
