'use client';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Tabs, Tab } from '@nextui-org/react';
import { CameraIcon } from '@heroicons/react/24/outline';

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
		<div className='flex justify-between items-center gap-2 border-b py-1'>
			<div className='flex items-center gap-2'>
				<CameraIcon width={'48px'} height={'48px'}></CameraIcon>
				<div>
					<p>{device}</p>
					<p>{label}</p>
				</div>
			</div>
			<div></div>
		</div>
	);
};

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'我的分享'} />
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<Tabs variant='underlined' fullWidth={true}>
					<Tab key='sharing' title='我的分享'>
						{data0.map(({ device, to }, i) => (
							<Cell key={i} device={device} label={`分享给${to}`}></Cell>
						))}
					</Tab>
					<Tab key='shared' title='来自好友'>
						{' '}
						{data1.map(({ device, from }, i) => (
							<Cell key={i} device={device} label={`来自${from}`}></Cell>
						))}
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default Page;
