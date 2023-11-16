'use client';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangeUI } from '@/jujiu-ui-components/nextui/ipc/settings/ui';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'界面设置'}></NavbarBack>
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<ChangeUI></ChangeUI>
			</div>
		</div>
	);
};
export default Page;
