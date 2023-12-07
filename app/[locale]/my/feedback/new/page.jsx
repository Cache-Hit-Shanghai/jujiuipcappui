'use client';

import { Input, Textarea, Button } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('新建问题')} />
			</MobileHeader>
			<MobileMain>
				<Input size='sm' labelPlacement='outside' placeholder={t('标题')} />
				<Textarea size='sm' placeholder={t('添加描述')} />
				<Button size='sm' color='primary'>
					{t('提交')}
				</Button>
			</MobileMain>
		</div>
	);
};
export default Page;
