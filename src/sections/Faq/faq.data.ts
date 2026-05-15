import { useState } from 'react';

type quation = {
	id: number;
	title: string;
	text: string;
	isActive: boolean;
};

export const quations: quation[] = [
	{
		id: 1,
		title: 'What should I expect during my first session?',
		text: 'Your first session is an assessment. We’ll discuss your goals, review your movement patterns, and set a realistic plan tailored to your lifestyle. No intense workout on day one—just clarity and direction.',
		isActive: false,
	},
	{
		id: 2,
		title: 'Do I need a gym membership?',
		text: 'No. All programs are designed to work with your available space and equipment. Whether you train at home, outdoors, or in a gym, your plan adapts to your environment.',
		isActive: false,
	},
	{
		id: 3,
		title: 'How often should I train each week?',
		text: 'Most clients train 3–4 times per week, but it depends on your goals and recovery. We’ll find the right balance between progress and sustainability.',
		isActive: false,
	},
	{
		id: 4,
		title: 'Is nutrition coaching included?',
		text: 'Yes. Every program includes personalized nutrition guidance to support your training, energy, and recovery—without restrictive diets.',
		isActive: false,
	},
	{
		id: 5,
		title: 'Can I cancel or pause my plan anytime?',
		text: 'Absolutely. There are no long-term contracts. You can pause, switch, or cancel anytime if your schedule or goals change.',
		isActive: false,
	},
	{
		id: 6,
		title: 'How long will it take to see results?',
		text: 'Most clients start feeling stronger and more energized within 3–4 weeks. Visible results depend on consistency, effort, and lifestyle outside the gym.',
		isActive: false,
	},
];
