'use client';

import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangeAIAlarm } from '@/jujiu-ui-components/nextui/ipc/settings/notification';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('AI报警事件类型设置')} />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='py-0 divide-y divide-divider'>
						<ChangeAIAlarm />
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
};
export default Page;
