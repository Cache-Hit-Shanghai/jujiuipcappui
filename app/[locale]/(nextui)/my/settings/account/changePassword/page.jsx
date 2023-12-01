'use client';

import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangePassword } from '@/jujiu-ui-components/nextui/ipc/settings/account';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('修改密码')} />
			</MobileHeader>
			<MobileMain>
				<ChangePassword />
			</MobileMain>
		</div>
	);
};
export default Page;
