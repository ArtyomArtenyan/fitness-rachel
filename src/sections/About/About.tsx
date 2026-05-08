import { AiOutlineFire } from 'react-icons/ai';
import { BsLightning } from 'react-icons/bs';
import { BiCrown } from 'react-icons/bi';

import Container from '../../components/Container/Container';
import aboutVideo from '../../assets/images/SRWzzhloRyGFgTTDJUqYPqiSDA.mp4';

type Card = {
	id: number;
	icon: React.ReactNode;
	text: string;
};

const philosophyCards: Card[] = [
	{
		id: 1,
		icon: <AiOutlineFire />,
		text: 'Strength Over Comparison',
	},
	{
		id: 2,
		icon: <BsLightning />,
		text: 'Balance Over Extremes',
	},
	{
		id: 3,
		icon: <BiCrown />,
		text: 'Habits Over Quick Fixes',
	},
];

const About = () => {
	return (
		<section className='box-border py-24'>
			<Container>
				<div className=' flex  flex-col justify-between xl:flex-row xl:gap-11.25'>
					<div className='shrink-0'>
						<video
							autoPlay
							loop
							muted
							playsInline
							className='w-full max-w-full rounded-[50px] xl:max-w-150'
						>
							<source src={aboutVideo} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</div>
					<div className='flex flex-col justify-between gap-10'>
						<div className='flex flex-col gap-2.5'>
							<h4 className='font-semibold text-[#919191] pt-1'>
								Meet your coach
							</h4>

							<h2 className='text-[30px] font-semibold xl:text-5xl'>
								Hi, I'm Rachel Stone
							</h2>

							<div className='flex flex-col gap-2.5 font-semibold leading-7.5'>
								<p>
									For years, I thought strength meant doing more — training
									harder, eating cleaner, sleeping less. I pushed through
									exhaustion, believing discipline would bring freedom. It
									didn’t.
								</p>

								<p>
									When burnout finally forced me to slow down, I started
									listening. I studied how movement, hormones, rest, and mindset
									work together — and rebuilt my strength through awareness, not
									pressure.
								</p>

								<p>
									Now I help women do the same: feel capable and confident again
									without sacrificing themselves to get there. My approach
									blends science and empathy — habit-based, psychology-first,
									and built for lasting balance.
								</p>
							</div>

							<span className='mt-2.5 -rotate-3 text-end font-signature text-[32px] font-normal'>
								Rachel Stone
							</span>
						</div>

						<div className='flex flex-col gap-3.75'>
							<h2 className='text-xl font-semibold'>My Philosophy</h2>

							<div className='flex flex-col gap-4 min-[575px]:flex-row'>
								{philosophyCards.map(card => (
									<div
										key={card.id}
										className='flex h-38 w-full flex-col items-start justify-between rounded-[20px] bg-[#2b2b2b] p-4 xl:w-37.25'
									>
										<div className='text-[35px]'>{card.icon}</div>

										<p className='leading-6.25'>{card.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default About;
