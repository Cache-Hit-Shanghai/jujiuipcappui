import { NavTabs } from '@/jujiu-ui-components/nextui/core/core-ui';

const navTabsData = [
	{
		label: '设备',
		href: '/nextui/robot/device/',
	},
	{
		label: '部落',
		href: '/nextui/robot/tribe/',
	},
	{
		label: '我的',
		href: '/nextui/robot/my/',
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
