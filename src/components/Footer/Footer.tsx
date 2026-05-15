import Logo from '../../assets/icons/logo.svg?react';
import Container from '../Container';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';
import { BsGlobe2 } from 'react-icons/bs';
import type { IconType } from 'react-icons';

type Social = {
	id: string;
	icon: IconType;
	href: string;
};

const socials: Social[] = [
	{ id: 'instagram', icon: FaInstagram, href: '#' },
	{ id: 'twitter', icon: FaXTwitter, href: '#' },
	{ id: 'youtube', icon: FiYoutube, href: '#' },
	{ id: 'website', icon: BsGlobe2, href: '#' },
	{ id: 'email', icon: FaRegEnvelope, href: '#' },
];

const navLinks = [
	{ id: 'home', label: 'Home', href: '#home' },
	{ id: 'about', label: 'About', href: '#about' },
	{ id: 'services', label: 'Services', href: '#services' },
	{ id: 'programs', label: 'Programs', href: '#programs' },
	{ id: 'results', label: 'Results', href: '#results' },
	{ id: 'contact', label: 'Contact', href: '#contact' },
];

const Footer = () => {
	return (
		<footer className='mt-12 mb-6'>
			<Container>
				<div className='p-10 flex flex-col gap-8 bg-[#212121] rounded-[30px] '>
					<div className='flex flex-col justify-center items-center gap-8 lg:justify-between lg:flex-row lg:items-start'>
						<Logo className='w-22' />
						<div className='flex flex-col items-end gap-4'>
							<ul className='hidden md:flex gap-6 text-sm'>
								{navLinks.map(link => (
									<li key={link.id}>
										<a
											href={link.href}
											className='hover:text-white/60 transition-colors duration-300'
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
							<ul className='flex gap-2'>
								{socials.map(social => {
									const Icon = social.icon;
									return (
										<li key={social.id}>
											<a
												href={social.href}
												className='flex h-8 w-8 items-center justify-center rounded-full bg-[#2b2b2b] hover:bg-[#f9652f] transition-colors duration-300'
											>
												<Icon size={14} />
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					<div className='flex items-center justify-between border-t border-t-white/10 pt-6 text-sm text-[#919191]'>
						<span>Copyright © 2025 – All Right Reserved</span>
						<span>Created in Framer by Dject Studio</span>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
