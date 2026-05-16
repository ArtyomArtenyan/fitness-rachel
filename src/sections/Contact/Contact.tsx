import { useState } from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { PiChatsCircle } from 'react-icons/pi';
import type { IconType } from 'react-icons';
import Container from '../../components/Container';
import SectionIntro from '../../components/SectionIntro';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import CTAButton from '../../components/CTAButton';
import FadeIn from '../../components/FadeIn';

type ContactOption = {
	id: number;
	icon: IconType;
	title: string;
	subtitle: string;
	href: string;
};

const contactOptions: ContactOption[] = [
	{
		id: 1,
		icon: PiChatsCircle,
		title: 'Chat',
		subtitle: 'Chat directly with coach Rachel',
		href: '#',
	},
	{
		id: 2,
		icon: LuPhoneCall,
		title: 'Call Us',
		subtitle: 'Mon - Fri, 8:00 - 17:00 (CET)',
		href: '#',
	},
];

const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<section id='contact' className='py-24 scroll-mt-20'>
			<Container>
				<FadeIn direction='up' className='flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-between'>
					<div className='flex flex-col gap-6 xl:max-w-130'>
						<SectionIntro
							label='Contact'
							title="Let's build your"
							text="Have a question about training, nutrition, or which program fits you best? Reach out — we'll help you find your next step forward."
						>
							<span className='block'>plan together!</span>
						</SectionIntro>

						<div className='flex flex-col gap-4'>
							{contactOptions.map(option => {
								const Icon = option.icon;
								return (
									<div
										key={option.id}
										className='flex h-56 max-w-full flex-col justify-between rounded-3xl bg-[#212121] p-6 xl:max-w-130'
									>
										<Icon size={28} />
										<div className='flex items-end justify-between'>
											<div className='flex flex-col gap-1'>
												<h2 className='text-[20px] font-semibold'>
													{option.title}
												</h2>
												<span className='text-[#919191]'>
													{option.subtitle}
												</span>
											</div>
											<ArrowButton bgColor='bg-[#121212] hover:bg-[#f9652f]' />
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className='flex w-full flex-col mt-auto gap-6 '>
						<h2 className='text-3xl font-bold'>Send a Message</h2>

						<div className='flex flex-col gap-6'>
							<div className='flex flex-col gap-2'>
								<label className='font-semibold'>Full name</label>
								<input
									name='name'
									value={form.name}
									onChange={handleChange}
									placeholder='Enter your full name'
									className='border-b border-b-[#919191] bg-transparent pb-3 outline-none placeholder:text-[#919191] transition-colors duration-300 focus:border-b-white'
								/>
							</div>

							<div className='flex flex-col gap-2'>
								<label className='font-semibold'>Email</label>
								<input
									name='email'
									value={form.email}
									onChange={handleChange}
									placeholder='hello@example.com'
									className='border-b border-b-[#919191] bg-transparent pb-3 outline-none placeholder:text-[#919191] transition-colors duration-300 focus:border-b-white'
								/>
							</div>

							<div className='flex flex-col gap-2'>
								<label className='font-semibold'>Message</label>
								<textarea
									name='message'
									value={form.message}
									onChange={handleChange}
									placeholder="Tell me about your goals or what you'd like help with..."
									rows={4}
									className='resize-none border-b border-b-[#919191] bg-transparent pb-3 outline-none placeholder:text-[#919191] transition-colors duration-300 focus:border-b-white'
								/>
							</div>
						</div>

						<CTAButton label='Send Message' className='md:max-w-full' />
					</div>
				</FadeIn>
			</Container>
		</section>
	);
};

export default Contact;
