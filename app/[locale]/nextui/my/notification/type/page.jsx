'use client';
import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangeAIAlarm } from '@/jujiu-ui-components/nextui/ipc/settings/notification';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={t('AI报警事件类型设置')} />
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<Card>
					<CardBody className='py-0 divide-y divide-divider'>
						<ChangeAIAlarm />
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
export default Page;
