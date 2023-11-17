'use client';

import { Button, User, Badge, Card, CardBody, Avatar } from '@nextui-org/react';
import { ThemeButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { Envelope } from '@styled-icons/heroicons-outline/Envelope';
import { Cog6Tooth } from '@styled-icons/heroicons-outline/Cog6Tooth';
import { CalendarCheck } from '@styled-icons/remix-line/CalendarCheck';
import { VipCrown } from '@styled-icons/remix-line/VipCrown';
import { Medal } from '@styled-icons/remix-line/Medal';
import { Store } from '@styled-icons/remix-line/Store';
import { Coupon } from '@styled-icons/remix-line/Coupon';
import { FileText } from '@styled-icons/remix-line/FileText';
import { Stethoscope } from '@styled-icons/remix-line/Stethoscope';
import { Profile } from '@styled-icons/remix-line/Profile';
import { ShoppingCart2 } from '@styled-icons/remix-line/ShoppingCart2';
import { CustomerService } from '@styled-icons/remix-line/CustomerService';
import { Mail } from '@styled-icons/remix-line/Mail';
import { Question } from '@styled-icons/remix-line/Question';
import { ArrowUpCircle } from '@styled-icons/remix-line/ArrowUpCircle';
import { At } from '@styled-icons/remix-line/At';

function StatisticCard({ data }) {
	return (
		<div className='flex flex-row gap-4'>
			{data.map((datum) => (
				<div key={datum.label} className='flex flex-row items-baseline'>
					<p className='px-1 font-bold'>{datum.number}</p>
					<p className='text-sm text-default-400'>{datum.label}</p>
				</div>
			))}
		</div>
	);
}

export default function Page() {
	const t = useJuJiuT();

	const statistics = [
		{ label: '关注', number: 0 },
		{ label: '粉丝', number: 0 },
		{ label: '好友', number: 0 },
		{ label: '皮豆', number: 0 },
	];

	const linkData0 = [
		{ label: '签到', icon: <CalendarCheck size={24} />, href: '' },
		{ label: '会员', icon: <VipCrown size={24} />, href: '' },
		{ label: '勋章', icon: <Medal size={24} />, href: '' },
		{ label: '宠物信息', icon: <Profile size={24} />, href: '' },
		{ label: '商城', icon: <Store size={24} />, href: '' },
		{ label: '订单', icon: <ShoppingCart2 size={24} />, href: '' },
		{ label: '优惠券', icon: <Coupon size={24} />, href: '' },
		{ label: '会员权益', icon: <FileText size={24} />, href: '' },
	];

	const linkData1 = [
		{ label: '宠物医生', icon: <Stethoscope size={24} />, href: '' },
		{ label: '客服', icon: <CustomerService size={24} />, href: '' },
		{ label: '投诉与反馈', icon: <Mail size={24} />, href: '' },
		{ label: '固件升级', icon: <ArrowUpCircle size={24} />, href: '' },
		{ label: '帮助', icon: <Question size={24} />, href: '' },
		{ label: '关于小皮', icon: <At size={24} />, href: '' },
	];

	return (
		<>
			<div className='p-2'>
				<div className='flex items-center justify-end py-1'>
					<div className='px-2'>
						<ThemeButton />
						<Button isIconOnly variant='light' as={Link} href='/message'>
							<Badge content='5' color='primary'>
								<Envelope size={24} />
							</Badge>
						</Button>
						<Button isIconOnly variant='light' as={Link} href='./settings'>
							<Cog6Tooth size={24} />
						</Button>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' className='w-20 h-20 text-large' />
				<p>暴走的鸡腿</p>
				<p>关注: 1 粉丝: 0 好友: 4</p>
			</div>
			<div className='flex flex-col flex-1 px-4 gap-4'></div>
		</>
	);
}
