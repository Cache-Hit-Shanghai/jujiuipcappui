'use client';

import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';
import { useJuJiuT } from '@/state/translate';

const data0 = [
	{ device: '客厅', to: '137319346' },
	{ device: '办3', to: '137319346' },
	{ device: '办5', to: '137319346' },
];

const data1 = [
	{ device: '客厅', from: '137319346' },
	{ device: '办3', from: '137319346' },
	{ device: '办5', from: '137319346' },
];

const Cell = ({ device, label }) => {
	return (
		<Card>
			<CardBody>
				<div className='flex items-center gap-2'>
					<NestCamWiredStand size={48} />
					<div>
						<p>{device}</p>
						<p className='text-xs text-default-500'>{label}</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('我的分享')} />
			</MobileHeader>
			<MobileMain>
				<Tabs fullWidth={true}>
					<Tab key='sharing' title={t('我的分享')} className='flex flex-col gap-4'>
						{data0.map(({ device, to }, i) => (
							<Cell key={i} device={device} label={t('分享给 {name}', { name: to })} />
						))}
					</Tab>
					<Tab key='shared' title={t('来自分享')} className='flex flex-col gap-4'>
						{data1.map(({ device, from }, i) => (
							<Cell key={i} device={device} label={t('来自 {name}', { name: from })} />
						))}
					</Tab>
				</Tabs>
			</MobileMain>
		</div>
	);
};

export default Page;
