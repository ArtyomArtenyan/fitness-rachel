import type { IconType } from 'react-icons';
import { HiOutlineVideoCamera, HiOutlineUsers } from 'react-icons/hi';
import { LuListTodo } from 'react-icons/lu';
import serviceImage from '../../assets/images/1cRcS1tLDy4l5E9CTKgrvPq0.webp';

type Service = {
	id: number;
	type?: 'large' | 'wide';
	icon?: IconType;
	label: string;
	text: string;
	image?: string;
	title?: string;
};

export const services: Service[] = [
	{
		id: 1,
		type: 'large',
		title: 'NYC',
		label: 'In-Person Training',
		text: 'Train face-to-face with personalized coaching and real-time feedback.',
	},
	{
		id: 2,
		icon: HiOutlineVideoCamera,
		label: 'Online Coaching',
		text: 'Flexible sessions from anywhere — your program, your schedule.',
	},
	{
		id: 3,
		icon: LuListTodo,
		label: 'Nutrition plans',
		text: 'Tailored guidance to support your training and daily routine.',
	},
	{
		id: 4,
		type: 'wide',
		icon: HiOutlineUsers,
		label: 'Business or Group Training',
		text: 'Designed for teams or partners who want shared motivation and accountability.',
		image: serviceImage,
	},
];
