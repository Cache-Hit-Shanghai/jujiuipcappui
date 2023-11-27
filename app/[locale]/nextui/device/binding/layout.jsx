'use client';

import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Layout({ children }) {
	const t = useJuJiuT();
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('添加设备')} />
			</MobileHeader>
			<MobileMain>{children}</MobileMain>
		</div>
	);
}
