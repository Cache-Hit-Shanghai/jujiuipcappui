'use client';

import { Avatar, Progress, Card, CardBody } from '@nextui-org/react';
import {
	NavbarBack,
	Information,
	LinkButton,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={'固件升级'} />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='flex flex-col gap-2'>
						<h2 className='font-semibold text-2xl'>固件升级中……</h2>
						<div className='flex flex-col items-center'>
							<Avatar icon={<NestCamWiredStand size={24} />} />
							<p>办3</p>
						</div>
						<Information label='摄像机正在固件升级中。请保持摄像机的电源开启。摄像机突然断电有可能导致设备无法启动。'></Information>
						<Progress value={50} className='max-w-md' />
						<div className='flex flex-col gap-2'>
							<p>固件升级成功！设备正在重启中，请耐心等待。设备重启后即可正常使用。</p>
							<div className='flex justify-center'>
								<LinkButton variant='solid' color='primary' href={'/'} label={'回到主页'} />
							</div>
						</div>
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
};
export default Page;
