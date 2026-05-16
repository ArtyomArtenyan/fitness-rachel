import Container from '../../components/Container';
import processPic from '../../assets/images/kj6QbbsZicslqM1dil6JN1y8U.webp';
import { steps } from './process.data';
import SectionIntro from '../../components/SectionIntro';

const Process = () => {
	return (
		<section className='pt-48'>
			<Container>
				<div className='flex flex-col justify-between gap-7.5 md:flex-row'>
					<div className='flex flex-col gap-2.5'>
						<SectionIntro
							label='How it works'
							title='Your path to'
							text='Every transformation starts with structure. Here’s how we turn goals into real progress — one step at a time.'
							buttonLabel='Book Your Free Call'
						>
							{' '}
							<span className='xl:block'>lasting results</span>
						</SectionIntro>

						<img
							className='max-w-full w-full h-125 xl:max-w-135 object-cover object-top mt-2.5 rounded-[25px]'
							src={processPic}
							alt=''
						/>
					</div>

					<div className='flex flex-col justify-evenly gap-5'>
						{steps.map(step => (
							<article key={step.id} className='flex flex-col flex-wrap gap-1'>
								<span className='text-lg font-semibold text-[#919191]'>
									{step.number}
								</span>
								<h3 className='text-[31px] font-semibold'>{step.title}</h3>
								<p className='text-[#919191] font-medium'>{step.text}</p>
							</article>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Process;
