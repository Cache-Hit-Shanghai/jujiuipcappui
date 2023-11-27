'use client';

import { Input } from '@nextui-org/react';
import { LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Info } from '@styled-icons/material/Info';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<Input label={t('WiFi名称(SSID)')} />
			<Input label={t('密码')} type='password' />
			<div className='flex flex-row gap-2 items-center text-warning'>
				<Info size={24} className='flex-none' />
				{t('请输入需要网络摄像机连接的WiFi名称和密码，随后点击“下一步”。')}
			</div>
			<div className='flex flex-row justify-end'>
				<LinkButton size='sm' variant='solid' color='primary' label={t('下一步')} href='./next' />
			</div>
		</>
	);
}
