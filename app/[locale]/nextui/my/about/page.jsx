'use client';

import { NavbarBack, LinkGroup } from '@/jujiu-ui-components/nextui/core/core-ui';
import { AppAbout, AppMark } from '@/jujiu-ui-components/nextui/ipc/about/brand';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('检查更新'), href: '#' },
		{ label: t('服务条款'), href: '#' },
		{ label: t('隐私政策'), href: '#' },
		{ label: t('官网'), href: '#' },
		{ label: t('使用帮助'), href: '#', last: true },
	];

	return (
		<div className='h-screen flex flex-col'>
			<NavbarBack label={t('关于')} />
			<div className='flex flex-col flex-1 px-4 gap-4'>
				<AppAbout />
				<LinkGroup data={links} />
			</div>
			<AppMark />
		</div>
	);
}