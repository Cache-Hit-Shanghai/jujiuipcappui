'use client';

import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import {
	NavbarBack,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';
import { ChevronRight } from '@styled-icons/material/ChevronRight';
import Link, { useJuJiuT } from '@/state/translate';

const data0 = [
	{ device: '客厅', count: 1 },
	{ device: '办3', count: 2 },
	{ device: '办5', count: 3 },
];

const data1 = [
	{ device: '客厅', from: '137319346' },
	{ device: '办3', from: '137319346' },
	{ device: '办5', from: '137319346' },
];

const Cell = ({ device, label, href }) => {
	return (
		<Card as={Link} href={href}>
			<CardBody>
				<div className='flex flex-row items-center justify-between'>
					<div className='flex items-center gap-2'>
						<NestCamWiredStand size={48} />
						<div>
							<p>{device}</p>
							<p className='text-xs text-default-500'>{label}</p>
						</div>
					</div>
					<ChevronRight size={24} />
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
				<Tabs fullWidth>
					<Tab
						key='sharing'
						title={t('我的分享')}
						className='flex flex-col gap-4'
					>
						{data0.map(({ device, count }, i) => (
							<Cell
								key={i}
								device={device}
								label={t('已分享{count}人', { count: count })}
								href='/device/settings/sharing'
							/>
						))}
					</Tab>
					<Tab
						key='shared'
						title={t('来自分享')}
						className='flex flex-col gap-4'
					>
						{data1.map(({ device, from }, i) => (
							<Cell
								key={i}
								device={device}
								label={t('来自 {name}', { name: from })}
								href='/device/streaming/'
							/>
						))}
					</Tab>
				</Tabs>
			</MobileMain>
		</div>
	);
};

export default Page;
