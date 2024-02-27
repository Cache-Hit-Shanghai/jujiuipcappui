'use client';

import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { House } from '@styled-icons/material/House';
import { Explore } from '@styled-icons/material/Explore';
import { Diamond } from '@styled-icons/material/Diamond';
import { NavTabs } from '@/jujiu-ui-components/nextui/core/core-ui';

const navTabsData = [
	{
		label: '设备',
		icon: <House size={24} />,
		href: '/device/',
	},
	{
		label: '发现',
		icon: <Explore size={24} />,
		href: '/explore/',
	},
	{
		label: '我的',
		icon: <AccountCircle size={24} />,
		href: '/my/',
	},
];

export default function MainLayout({ children }) {
	return (
		<div className='h-screen flex flex-col'>
			{children}
			<NavTabs data={navTabsData} />
		</div>
	);
}
