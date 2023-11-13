import { UserCircleIcon, HomeModernIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { NavTabs } from '@/jujiu-ui-components/nextui/core/core-ui';

const navTabsData = [
	{
		label: '设备',
		icon: <HomeModernIcon className='h-6 w-6' />,
		href: '/robot/device/',
	},
	{
		label: '发现',
		icon: <MagnifyingGlassIcon className='h-6 w-6' />,
		href: '/discovery/',
	},
	{
		label: '我的',
		icon: <UserCircleIcon className='h-6 w-6' />,
		href: '/my2/',
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
