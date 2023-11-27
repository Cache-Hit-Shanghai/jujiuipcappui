'use client';

import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack, LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';
import { OtaDeviceCard } from '@/jujiu-ui-components/nextui/ipc/ota/card';

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
					<OtaDeviceCard
						key={i}
						device={{ _id: '1', desc: device }}
						currentVersion={from}
						upgradeVersion={to}
						upgradeSize={size}
					></OtaDeviceCard>
				))}
			</MobileMain>
		</div>
	);
};
export default Page;
