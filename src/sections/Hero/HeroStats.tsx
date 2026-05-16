import Container from '../../components/Container';
import FadeIn from '../../components/FadeIn';

type Stat = {
	id: number;
	value: string;
	title: string;
	text: string;
};
const stats: Stat[] = [
	{
		id: 1,
		value: '+250',
		title: 'Women Coached',
		text: 'From postpartum recovery to full transformations',
	},
	{
		id: 2,
		value: '98 %',
		title: 'Consistency Rate',
		text: 'Clients report staying on track week after week',
	},
	{
		id: 3,
		value: '5',
		title: 'Average Feedback',
		text: 'Based on client satisfaction and progress surveys',
	},
	{
		id: 4,
		value: '3x',
		title: 'Faster Progress',
		text: 'From postpartum recovery to full transformations',
	},
];
export const HeroStats = () => {
	return (
		<div className='py-24'>
			<Container>
				<div
					className='
				grid grid-cols-1 gap-12.5 
				md:grid-cols-2 md:gap-10 xl:grid-cols-4 lg:grid-cols-2'
				>
					{stats.map((stat, index) => (
						<FadeIn key={stat.value} direction='up' delay={index * 0.1}>
							<div className='flex flex-col justify-start'>
								<h2 className='text-6xl font-semibold leading-none'>
									{stat.value}
								</h2>

								<h3 className='mt-2 font-medium text-lg leading-7'>
									{stat.title}
								</h3>

								<p className='mt-1 text-sm leading-5 text-white/70'>
									{stat.text}
								</p>
							</div>
						</FadeIn>
					))}
				</div>
			</Container>
		</div>
	);
};
