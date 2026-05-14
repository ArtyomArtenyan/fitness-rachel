import type { IconType } from 'react-icons';
import { RiBarChartLine } from 'react-icons/ri';

type Program = {
	id: number;
	icon: IconType;
	title: string;
	price: string;
	description: string;
	features: string[];
	popular?: boolean;
};

export const programs: Program[] = [
	{
		id: 1,
		icon: RiBarChartLine,
		title: '12-Week Transformation',
		price: '$249',
		description:
			'Step-by-step coaching to rebuild strength, improve energy, and see real, lasting results.',
		features: [
			'Personalized workouts',
			'Weekly Progress tracking',
			'Nutrition fundamentals',
			'Chat & email support',
		],
	},
	{
		id: 2,
		icon: RiBarChartLine,
		title: 'Postnatal Reboot',
		price: '$329',
		description:
			'Gentle, structured recovery for new mothers to help them get confidence and balance again.',
		features: [
			'Tailored postpartum training plan',
			'Nutrition & recovery coaching',
			'Weekly 1-on-1 check-ins',
			'Ongoing support between sessions',
		],
		popular: true,
	},
	{
		id: 3,
		icon: RiBarChartLine,
		title: 'Tone with Hormone Balance',
		price: '$449',
		description:
			'Workouts + nutrition designed around your cycle, energy, and hormonal needs.',
		features: [
			'Custom periodized training cycles',
			'Ready made cooked meals',
			'Bi-weekly performance reviews',
			'Priority messaging access',
		],
	},
];
