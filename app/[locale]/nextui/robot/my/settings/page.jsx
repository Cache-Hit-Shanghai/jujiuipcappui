'use client';

import { Button, User, Badge, Card, CardBody } from '@nextui-org/react';
import { NavbarBack, LinkGroup } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { EnvelopeIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import {
	CalendarCheck,
	VipCrown,
	Medal,
	Store,
	Coupon,
	FileText,
	Profile,
	ShoppingCart2,
	CustomerService,
	Mail,
	Question,
	ArrowUpCircle,
	Stethoscope,
	At,
} from '@styled-icons/remix-line';

export default function Page() {
	const t = useJuJiuT();

	const linkData = [
		{ label: t('账号设置'), href: '/my/account' },
		{ label: t('通用设置'), icon: <VipCrown size={24} />, href: '/my/uisettings' },
		{ label: t('消息设置'), icon: <Medal size={24} />, href: '/my/notification' },
		{ label: t('关于'), icon: <Profile size={24} />, href: '/my/about', last: true },
	];

	return (
		<>
			<div className='flex items-center justify-between p-2'>
				<NavbarBack label={t('设置')} />
			</div>
			<div className='flex flex-col flex-1 px-4 gap-4'>
				<LinkGroup data={linkData} />
			</div>
		</>
	);
}
