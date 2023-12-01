'use client';

import { NavbarBack, MobileHeader, MobileMain, LinkGroup } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('账号设置'), href: './account' },
		{ label: t('通知设置'), href: './notification' },
		{ label: t('界面设置'), href: './uisettings' },
		{ label: t('系统信息'), href: './sysinfo' },
		{ label: t('关于'), href: './about' },
	];

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('设置')} />
			</MobileHeader>
			<MobileMain>
				<LinkGroup data={links} />
			</MobileMain>
		</div>
	);
}
