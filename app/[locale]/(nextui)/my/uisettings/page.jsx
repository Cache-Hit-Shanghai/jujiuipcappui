'use client';

import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangeUI } from '@/jujiu-ui-components/nextui/ipc/settings/ui';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('界面设置')} />
			</MobileHeader>
			<MobileMain>
				<ChangeUI />
			</MobileMain>
		</div>
	);
};
export default Page;
