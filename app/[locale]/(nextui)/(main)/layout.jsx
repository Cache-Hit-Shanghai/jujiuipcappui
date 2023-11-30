'use client';

import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { House } from '@styled-icons/material/House';
import { Diamond } from '@styled-icons/material/Diamond';
import { NavTabs } from '@/jujiu-ui-components/nextui/core/core-ui';

const navTabsData = [
	{
		label: '设备',
		icon: <House size={24} />,
		href: '/device/',
	},
	{
		label: '会员',
		icon: <Diamond size={24} />,
		href: '/vip/',
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