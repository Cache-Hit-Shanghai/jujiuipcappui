'use client';

import { Card, CardHeader, CardBody, CardFooter, Divider } from '@nextui-org/react';
import { NavbarBack, LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Update } from '@styled-icons/material/Update';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';
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
					<CardHeader className='flex items-center justify-center gap-2'>
						<NestCamWiredStand size={48} />
						<div className='flex flex-col items-center'>
							<p>{t('最新版本')}: 15.2.3.4</p>
							<p>{t('当前版本')}: 15.2.3.0</p>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						<h2 className='font-semibold text-2xl'>更新日志：</h2>
						<p>1. 修复已知问题若干。</p>
						<p>2. 新增拉流时断线重连的功能。</p>
					</CardBody>
					<Divider />
					<CardFooter className='justify-center'>
						<LinkButton
							size='sm'
							variant='solid'
							color='primary'
							href='./updating'
							label={t('现在升级')}
							startContent={<Update size={24} />}
						/>
					</CardFooter>
				</Card>
			</MobileMain>
		</div>
	);
};
export default Page;
