'use client';

import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { CloudOrSDCard } from '../../components/gallery';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={t('录像截图设置')} />
			<div className='flex flex-col shrink-0 grow  overflow-auto p-4 gap-4'>
				<Card>
					<CardBody>
						<CloudOrSDCard label={t('录像截图存放到')} />
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
export default Page;
