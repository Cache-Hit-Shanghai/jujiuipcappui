'use client';

import { Button, User, Badge, Card, CardBody } from '@nextui-org/react';
import { ThemeButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Page() {
	const t = useJuJiuT();

	const linkData0 = [
		{ label: '签到', url: '' },
		{ label: '会员', url: '' },
		{ label: '勋章', url: '' },
		{ label: '宠物信息', url: '' },
		{ label: '皮豆商城', url: '' },
		{ label: '皮豆订单', url: '' },
		{ label: '优惠券', url: '' },
		{ label: '规则', url: '' },
	];

	const linkData1 = [
		{ label: '宠物医疗', url: '' },
		{ label: '联系客服', url: '' },
		{ label: '投诉与建议', url: '' },
		{ label: '固件升级', url: '' },
		{ label: '帮助中心', url: '' },
		{ label: '关于小皮部落', url: '' },
	];

	return (
		<>
			<div className='flex items-center justify-between p-2'>
				<Button variant='light' as={Link} href='/my/login'>
					<User
						name='Jane Doe'
						description='VIP 2'
						avatarProps={{
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
						}}
					/>
				</Button>
				<div className='px-2'>
					<ThemeButton />
					<Button isIconOnly variant='light' as={Link} href='/message'>
						<Badge content='5' color='primary'>
							<EnvelopeIcon className='h-6 w-6' />
						</Badge>
					</Button>
				</div>
			</div>
			<div className='flex flex-col flex-1 px-4 gap-4'>
				<Card>
					<CardBody>
						<div className='grid grid-cols-4 gap-4'>
							{linkData0.map((datum) => (
								<div key={datum.label} className='py-2 border text-sm text-center'>
									{datum.label}
								</div>
							))}
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<div className='grid grid-cols-3 gap-4'>
							{linkData1.map((datum) => (
								<div key={datum.label} className='py-2 border text-sm text-center'>
									{datum.label}
								</div>
							))}
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
}
