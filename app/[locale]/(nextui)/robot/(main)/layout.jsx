import { NavTabs } from '@/jujiu-ui-components/nextui/core/core-ui';

const navTabsData = [
	{
		label: '设备',
		href: '/robot/device/',
	},
	{
		label: '部落',
		href: '/robot/tribe/',
	},
	{
		label: '会员',
		href: '/robot/vip/',
	},
	{
		label: '我的',
		href: '/robot/my/',
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
