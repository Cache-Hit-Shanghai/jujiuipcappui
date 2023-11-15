'use client';
import { NavbarBack, Information, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Avatar, Progress } from '@nextui-org/react';
import { CameraIcon } from '@heroicons/react/24/outline';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'固件升级'}></NavbarBack>
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<h2 className='font-semibold text-2xl'>固件升级中……</h2>
				<div className='flex flex-col items-center'>
					<Avatar icon={<CameraIcon width={'24px'} height={'24px'}></CameraIcon>}></Avatar>
					<p>办3</p>
				</div>
				<Information label='摄像机正在固件升级中。请保持摄像机的电源开启。摄像机突然断电有可能导致设备无法启动。'></Information>
				<Progress value={50} className='max-w-md' />
				<div className='flex flex-col gap-2'>
					<p>固件升级成功！设备正在重启中，请耐心等待。设备重启后即可正常使用。</p>
					<div className='flex justify-center'>
						<LinkButton
							className={'rounded-full bg-success h-[36px]'}
							href={'/'}
							label={'回到主页'}
						></LinkButton>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Page;
