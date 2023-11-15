'use client';
import { NavbarBack, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Card, CardBody, CardHeader, Checkbox, Badge, Button } from '@nextui-org/react';
import { Alipay } from '@styled-icons/remix-fill/Alipay';
import { WechatPay } from '@styled-icons/remix-line/WechatPay';
import Link from 'next/link';

const list = [
	{
		day: '7',
		name: '年',
		price: 139,
		discount: 70,
	},
	{
		day: '7',
		name: '半年',
		price: 78,
		discount: 39,
	},
	{
		day: '30',
		name: '年',
		price: 300,
		discount: 151,
	},
	{
		day: '30',
		name: '半年',
		price: 160,
		discount: 80,
	},
];

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'套餐选择'}></NavbarBack>
			<div className='flex flex-col shrink-0 grow  overflow-auto px-4 gap-4'>
				<div className='h-px'></div>
				{list.map(({ day, name, price, discount = 0 }, i) => (
					<Badge
						key={i}
						content={<span className='px-0'>惠</span>}
						color='danger'
						isInvisible={discount <= 0}
					>
						<Card className='w-full '>
							<CardBody className='flex flex-row justify-between items-center '>
								<div className='flex gap-1'>
									<Checkbox></Checkbox>
									<p>{day}天</p>
								</div>
								<p>{name}套餐</p>
								<div className='flex flex-col items-end'>
									<p>￥{price - discount}</p>
									{discount && (
										<p>
											<strike className='text-stone-400'>￥{price}</strike>
										</p>
									)}
								</div>
							</CardBody>
						</Card>
					</Badge>
				))}
			</div>
			<div className='flex flex-col shrink-0 gap-1 p-2 sticky z-20 bottom-0 left-0 right-0 bg-neutral-800'>
				<div className='flex justify-between items-end'>
					<p className='text-xs'>已优惠:￥101</p>
					<p className='text-xs'>
						需支付:<span className='text-sm text-blue-400'>￥199</span>
					</p>
				</div>
				<div className='flex justify-evenly gap-1'>
					{[
						{ Icon: WechatPay, className: 'bg-[#1aad19]' },
						{ Icon: Alipay, className: 'bg-[#1678ff]' },
					].map(({ Icon, className }, i) => (
						<Button
							className={className}
							key={i}
							startContent={<Icon className='shrink-0' width='24px' height='24px'></Icon>}
						>
							确认协议并支付
						</Button>
					))}
				</div>
				<div className='flex justify-center'>
					<p className='text-xs'>
						请阅读{' '}
						<Link href='/doc/cloud-storage-service' className='text-green-300'>
							《云存储服务条款》
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Page;
