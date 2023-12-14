'use client';

import { Card, CardBody, Checkbox, Link } from '@nextui-org/react';
import {
	MobileHeader,
	MobileMain,
	NavbarBack,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { PayPanel } from '@/jujiu-ui-components/nextui/ipc/pay/payPanel';
import { useJuJiuT } from '@/state/translate';

const packages = [
	{
		label: '云端语音备忘月套餐',
		price: 3,
		discount: 3,
	},
	{
		label: '云端语音备忘季套餐',
		price: 7,
		discount: 8,
	},
	{
		label: '云端语音备忘年套餐',
		price: 30,
		discount: 30,
	},
];

function PackagePanel({ label, price, discount }) {
	return (
		<Card>
			<CardBody>
				<Checkbox
					defaultSelected
					classNames={{ base: 'max-w-full', label: 'w-full' }}
				>
					<div className='flex flex-row items-center justify-between'>
						<p>{label}</p>
						<div>
							<p className='text-warning'>￥{price}</p>
							<p className='text-xs line-through text-default-500'>
								￥{price + discount}
							</p>
						</div>
					</div>
				</Checkbox>
			</CardBody>
		</Card>
	);
}

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label='语音备忘套餐选择' />
			</MobileHeader>
			<MobileMain>
				<p className='text-xs text-default-500'>
					备注：为向您提供本服务，云平台需要在服务期间持续访问设备视频画面并进行技术分析，详情请阅读本服务的服务协议。
				</p>
				{packages.map((bundle) => (
					<PackagePanel {...bundle} />
				))}
			</MobileMain>
			<div className='flex flex-col gap-2 p-2'>
				<PayPanel discount={3} price={3} />
				<p className='self-center text-sm'>
					请阅读
					<Link size='sm' href='#'>
						《云端语音备忘服务协议》
					</Link>
				</p>
			</div>
		</div>
	);
}
