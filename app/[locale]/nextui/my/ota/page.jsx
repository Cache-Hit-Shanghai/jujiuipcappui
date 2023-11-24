'use client';

import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack, LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';

const data = [
	{ device: '客厅', size: '150MB', from: '1.0.0', to: '1.1.0' },
	{ device: '办3', size: '100MB', from: '0.1.0', to: '1.1.0' },
	{ device: '办5', size: '50MB', from: '1.0.0', to: '2.1.0' },
];

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={'固件升级'} />
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
									<LinkButton variant='solid' color='primary' href='./otainfo' label='现在升级'></LinkButton>
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
