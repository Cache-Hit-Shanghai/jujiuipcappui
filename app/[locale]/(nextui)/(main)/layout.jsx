import { NavTabs } from '@/jujiu-ui-components/nextui/core/core-ui';

export default async function MainLayout({ children }) {
	return (
		<div className='h-screen flex flex-col'>
			{children}
			<NavTabs />
		</div>
	);
}
