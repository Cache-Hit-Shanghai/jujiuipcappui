'use client';

import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack, LabelLink } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangeNotification } from '@/jujiu-ui-components/nextui/ipc/settings/notification';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'消息通知设置'}></NavbarBack>
			<div className='flex flex-col shrink-0 overflow-auto px-4 gap-4'>
				<Card>
					<CardBody>
						<ChangeNotification />
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<LabelLink label='AI报警事件类型' href='./type' />
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
export default Page;
