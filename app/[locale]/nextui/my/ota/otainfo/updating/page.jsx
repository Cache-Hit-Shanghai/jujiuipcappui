'use client';

import { Avatar, Progress, Card, CardHeader, CardBody, CardFooter, Divider } from '@nextui-org/react';
import {
	NavbarBack,
	Information,
	LinkButton,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';
import { Home } from '@styled-icons/material/Home';
import { TaskAlt } from '@styled-icons/material/TaskAlt';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('固件升级') + ' - 办3'} />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardHeader>
						<h4 className='font-bold text-large'>{t('固件升级中……')}</h4>
					</CardHeader>
					<Divider />
					<CardBody className='flex flex-col gap-2'>
						<div className='flex flex-col items-center'>
							<Avatar icon={<NestCamWiredStand size={24} />} />
							<p>办3</p>
						</div>
						<Information
							label={t('设备正在固件升级中。请保持设备的电源开启。突然断电有可能导致设备无法启动。')}
						></Information>
						<Progress value={50} className='max-w-md' />
					</CardBody>
					<Divider />
					<CardFooter className='flex flex-col gap-2 text-sm'>
						<TaskAlt size={48} className='text-success' />
						<p>{t('固件升级成功！设备正在重启中，请耐心等待。设备重启后即可正常使用。')}</p>
						<div className='flex justify-center'>
							<LinkButton
								size='sm'
								variant='solid'
								color='primary'
								href={'/'}
								label={t('回到主页')}
								startContent={<Home size={24} />}
							/>
						</div>
					</CardFooter>
				</Card>
			</MobileMain>
		</div>
	);
};
export default Page;
