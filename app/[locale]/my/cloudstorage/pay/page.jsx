'use client';

import { Link, Tabs, Tab } from '@nextui-org/react';
import {
	NavbarBack,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { PayPanel } from '@/jujiu-ui-components/nextui/ipc/pay/payPanel';
import { BundlePanel } from '@/jujiu-ui-components/nextui/ipc/pay/bundlePanel';

const bundlesActive = [
	{
		label: '7天年套餐',
		price: 70,
		discount: 69,
	},
	{
		label: '7天半年套餐',
		price: 39,
		discount: 39,
	},
	{
		label: '30天年套餐',
		price: 150,
		discount: 150,
	},
	{
		label: '30天半年套餐',
		price: 80,
		discount: 80,
	},
];

const bundlesContinuous = [
	{
		label: '7天年套餐',
		price: 399,
		discount: 400,
	},
	{
		label: '7天月套餐',
		price: 34,
		discount: 35,
	},
	{
		label: '30天年套餐',
		price: 499,
		discount: 500,
	},
	{
		label: '30天月套餐',
		price: 44,
		discount: 45,
	},
];

export default function Page() {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={'套餐选择'} />
			</MobileHeader>
			<MobileMain>
				<Tabs className='self-center'>
					<Tab key='active' title='活动录像'>
						<BundlePanel bundles={bundlesActive} />
					</Tab>
					<Tab key='continuous' title='连续录像'>
						<BundlePanel bundles={bundlesContinuous} />
					</Tab>
				</Tabs>
			</MobileMain>
			<div className='flex flex-col gap-2 p-2'>
				<PayPanel discount={101} price={199} />
				<p className='self-center text-sm'>
					请阅读
					<Link size='sm' href='#'>
						《云存储服务条款》
					</Link>
				</p>
			</div>
		</div>
	);
}
