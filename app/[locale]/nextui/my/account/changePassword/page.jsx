'use client';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangePassword } from '@/jujiu-ui-components/nextui/ipc/settings/account';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'修改密码'}></NavbarBack>
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<ChangePassword></ChangePassword>
			</div>
		</div>
	);
};
export default Page;
