'use client';

import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangePassword } from '@/jujiu-ui-components/nextui/ipc/settings/account';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={t('修改密码')} />
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<ChangePassword />
			</div>
		</div>
	);
};
export default Page;
