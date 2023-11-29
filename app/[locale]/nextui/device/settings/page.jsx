'use client';

import { NavbarBack, LinkGroup, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('设备信息'), href: './information' },
		{ label: t('通用设置'), href: './general' },
		{ label: t('设备分享'), href: './sharing' },
		{ label: t('设备转移'), href: '/device/transfer', last: true },
	];

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('设备设置') + ' - 办3'} />
			</MobileHeader>
			<MobileMain>
				<LinkGroup data={links} />
			</MobileMain>
		</div>
	);
}
