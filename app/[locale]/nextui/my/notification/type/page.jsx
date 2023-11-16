'use client';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangeAIAlarm } from '@/jujiu-ui-components/nextui/ipc/settings/notification';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'报警事件类型设置 - 办3'}></NavbarBack>
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<ChangeAIAlarm></ChangeAIAlarm>
			</div>
		</div>
	);
};
export default Page;
