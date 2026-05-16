import { useEffect, useState } from 'react';

import Logo from '../../assets/icons/logo.svg?react';

import { type IconType } from 'react-icons';
import { BsGlobe2 } from 'react-icons/bs';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';

import Container from '../Container';

type Social = {
	id: string;
	icon: IconType;
	href: string;
};

type NavItem = {
	id: string;
	value: string;
	href: string;
};
const socials: Social[] = [
	{ id: 'instagram', icon: FaInstagram, href: '#' },
	{ id: 'twitter', icon: FaXTwitter, href: '#' },
	{ id: 'youtube', icon: FiYoutube, href: '#' },
	{ id: 'website', icon: BsGlobe2, href: '#' },
	{ id: 'email', icon: FaRegEnvelope, href: '#' },
];
const nav: NavItem[] = [
	{
		id: 'home',
		value: 'Home',
		href: '#home',
	},
	{
		id: 'about',
		value: 'About',
		href: '#about',
	},
	{
		id: 'services',
		value: 'Services',
		href: '#services',
	},
	{
		id: 'programs',
		value: 'Programs',
		href: '#programs',
	},
	{
		id: 'results',
		value: 'Results',
		href: '#results',
	},
	{
		id: 'contact',
		value: 'Contact',
		href: '#contact',
	},
];
const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1200) {
				setIsActive(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<header
			className='
			fixed left-0 top-0 z-1000 
			px-0 py-7
			backdrop-filter-none 
		  xl:w-full xl:backdrop-blur-[2px] 
			'
		>
			<Container>
				<div
					className={`
						items-start flex-col
						gap-2.5 w-48 h-14.5 
						px-4 py-2 rounded-[30px] 
						backdrop-blur-[10px] bg-[rgba(0,0,0,0.65)] 
						transition-[width,height,border-radius] duration-300 ease-in-out
						${isActive ? 'items-start w-68 h-112' : ''}
						xl:flex xl:h-auto xl:w-full xl:flex-row xl:items-center xl:justify-between xl:bg-transparent  xl:px-0

					`}
				>
					<div
						className='
					 cursor-pointer
					flex justify-between
					w-full
					xl:w-auto'
					>
						<div
							className='
						shrink-0 
						w-21.25 
						xl:w-46.25'
						>
							<a href='#home'>
								<Logo />
							</a>
						</div>
						<button
							className='w-11 h-10 relative flex items-center justify-center bg-none border-none p-0 xl:hidden'
							onClick={() => {
								setIsActive(!isActive);
							}}
						>
							<span
								className={`absolute w-6 h-0.5 bg-white transition-all duration-300  ${isActive ? 'translate-x-0 translate-y-0 -rotate-45' : '-translate-y-2'}`}
							></span>
							<span
								className={`absolute w-6 h-0.5 bg-white transition-all duration-300  ${isActive ? 'hidden' : ''}`}
							></span>
							<span
								className={`absolute w-6 h-0.5 bg-white transition-all duration-300  ${isActive ? 'translate-x-0 translate-y-0 rotate-45' : 'translate-y-2'}`}
							></span>
						</button>
					</div>
					<nav
						className={`
							overflow-hidden opacity-0 h-0
							transition-[width,height,border-radius] duration-300 
							${isActive ? 'w-full h-full opacity-100 flex flex-col items-start gap-5 px-0 py-5 transition-[width,height,border-radius] duration-300' : ''}
							xl:flex xl:items-center xl:gap-20 xl:opacity-100 xl:h-auto
							`}
					>
						<ul
							className={`
								${isActive ? 'w-full text-3xl flex flex-col justify-start gap-5' : ''}
								xl:flex xl:gap-5
								`}
						>
							{nav.map(el => (
								<li key={el.id}>
									<a
										className='hover:text-[#f9652f] transition-all duration-300'
										href={el.href}
									>
										{el.value}
									</a>
								</li>
							))}
						</ul>
						<ul className='flex gap-3'>
							{socials.map(el => {
								const Icon = el.icon;
								return (
									<li key={el.id}>
										<a
											href={el.href}
											className='
										flex items-center justify-center
										w-8 h-8 rounded-full bg-black
										xl:backdrop-blur xl:bg-[#000000a1] '
										>
											<Icon size={17} />
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
};

export default Navbar;
