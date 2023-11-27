'use client';

import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack, LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Update } from '@styled-icons/material/Update';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';
import { useJuJiuT } from '@/state/translate';

const data = [
	{ device: '客厅', size: '150MB', from: '1.0.0', to: '1.1.0' },
	{ device: '办3', size: '100MB', from: '0.1.0', to: '1.1.0' },
	{ device: '办5', size: '50MB', from: '1.0.0', to: '2.1.0' },
];

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('固件升级')} />
			</MobileHeader>
			<MobileMain>
				{data.map(({ device, size, from, to }, i) => (
					<Card key={i}>
						<CardBody>
							<div className='flex justify-between items-center gap-2'>
								<div className='flex  items-center gap-2'>
									<NestCamWiredStand size={48} />
									<div>
										<p>{device}</p>
										<p className='text-xs text-default-500'>{size}</p>
										<p className='text-xs text-default-500'>
											{from} ~ {to}
										</p>
									</div>
								</div>
								<div>
									<LinkButton
										size='sm'
										variant='solid'
										color='primary'
										href='./otainfo'
										label={t('现在升级')}
										startContent={<Update size={24} />}
									/>
								</div>
							</div>
						</CardBody>
					</Card>
				))}
			</MobileMain>
		</div>
	);
};
export default Page;
