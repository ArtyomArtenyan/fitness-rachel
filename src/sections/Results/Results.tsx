import SectionIntro from '../../components/SectionIntro';
import Container from '../../components/Container';
import resultsAvatar from '../../assets/images/y34ltRyclfKWHicOlS7aoZUlPQ.webp';
import { IoStar } from 'react-icons/io5';
import { ComparisonSlider } from './ComparisonSlider';

const Results = () => {
	return (
		<section className='py-24'>
			<Container>
				<div className='flex flex-col gap-12 md:flex-row md:items-center md:justify-between'>
					<div className='flex flex-col gap-6 md:max-w-125'>
						<SectionIntro
							label='Results'
							title='Progress you can see'
							text='Every transformation tells a story. These programs are built to help you move better, feel stronger, and see steady progress, without extremes, burnout, or quick fixes.'
						/>
						<div className='flex flex-col gap-2'>
							<img
								className='h-18 w-18 rounded-full object-cover'
								src={resultsAvatar}
								alt='Sophie Lammers'
							/>
							<h3 className='text-lg font-semibold'>Sophie Lammers</h3>
							<span className='text-sm font-semibold text-[#919191]'>
								12-Week Transformation Program
							</span>
						</div>

						<div className='flex gap-1'>
							{Array.from({ length: 5 }).map((_, i) => (
								<IoStar key={i} color='gold' size={18} />
							))}
						</div>
						<p className='font-medium leading-7 text-white/90'>
							"I used to feel drained and frustrated no matter how much I tried.
							Rachel helped me reconnect with my body and rebuild strength
							without burnout. For the first time, I actually enjoy moving again
							— and the changes haven't just been physical, they've been mental
							too."
						</p>
					</div>

					<ComparisonSlider />
				</div>
			</Container>
		</section>
	);
};

export default Results;
