'use client';

import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChangeUI } from '@/jujiu-ui-components/nextui/ipc/settings/ui';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={t('界面设置')} />
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<ChangeUI />
			</div>
		</div>
	);
};
export default Page;
