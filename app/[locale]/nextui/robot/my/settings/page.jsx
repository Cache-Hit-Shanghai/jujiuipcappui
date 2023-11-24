'use client';

import { NavbarBack, LinkGroup, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	const linkData = [
		{ label: t('账号设置'), href: '../../../my/account' },
		{ label: t('通用设置'), href: '../../../my/uisettings' },
		{ label: t('消息设置'), href: '../../../my/notification' },
		{ label: t('关于'), href: '../../../my/about', last: true },
	];

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('设置')} />
			</MobileHeader>
			<MobileMain>
				<LinkGroup data={linkData} />
			</MobileMain>
		</div>
	);
}
