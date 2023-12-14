'use client';

import { Card, CardBody, Checkbox, Badge, Link } from '@nextui-org/react';
import {
	NavbarBack,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { PayPanel } from '@/jujiu-ui-components/nextui/ipc/pay/payPanel';

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

export default function Page() {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={'套餐选择'} />
			</MobileHeader>
			<MobileMain>
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
