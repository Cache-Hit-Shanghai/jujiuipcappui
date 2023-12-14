'use client';

import { Card, CardBody, Checkbox, Link } from '@nextui-org/react';
import {
	MobileHeader,
	MobileMain,
	NavbarBack,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { PayPanel } from '@/jujiu-ui-components/nextui/ipc/pay/payPanel';
import { useJuJiuT } from '@/state/translate';

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
				<Card>
					<CardBody>
						<Checkbox
							defaultSelected
							classNames={{ base: 'max-w-full', label: 'w-full' }}
						>
							<div className='flex flex-row items-center justify-between'>
								<p>云端语音备忘月套餐</p>
								<p className='text-warning'>￥6</p>
							</div>
						</Checkbox>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<Checkbox classNames={{ base: 'max-w-full', label: 'w-full' }}>
							<div className='flex flex-row items-center justify-between'>
								<p>云端语音备忘季套餐</p>
								<p className='text-warning'>￥15</p>
							</div>
						</Checkbox>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<Checkbox classNames={{ base: 'max-w-full', label: 'w-full' }}>
							<div className='flex flex-row items-center justify-between'>
								<p>云端语音备忘年套餐</p>
								<p className='text-warning'>￥60</p>
							</div>
						</Checkbox>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<Checkbox classNames={{ base: 'max-w-full', label: 'w-full' }}>
							<div className='flex flex-row items-center justify-between'>
								<p>云端语音备忘月订阅套餐</p>
								<p className='text-warning'>￥5.4</p>
							</div>
						</Checkbox>
					</CardBody>
				</Card>
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
