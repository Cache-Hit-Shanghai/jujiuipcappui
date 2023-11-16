'use client';

import { UserCircle } from '@styled-icons/heroicons-outline/UserCircle';
import { HomeModern } from '@styled-icons/heroicons-outline/HomeModern';
import { MagnifyingGlass } from '@styled-icons/heroicons-outline/MagnifyingGlass';
import { NavTabs } from '@/jujiu-ui-components/nextui/core/core-ui';

const navTabsData = [
	{
		label: '设备',
		icon: <HomeModern size={24} />,
		href: '/nextui/device/',
	},
	{
		label: '发现',
		icon: <MagnifyingGlass size={24} />,
		href: '/discovery/',
	},
	{
		label: '我的',
		icon: <UserCircle size={24} />,
		href: '/nextui/my/',
	},
];

export default async function MainLayout({ children }) {
	return (
		<div className='h-screen flex flex-col'>
			{children}
			<NavTabs data={navTabsData} />
		</div>
	);
}
