'use client';

import { Input, Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Info } from '@styled-icons/material/Info';
import { Wifi } from '@styled-icons/material/Wifi';
import { Lock } from '@styled-icons/material/Lock';
import { useJuJiuT } from '@/state/translate';

const WiFiList = ['A90_5G', 'A90_5G_WPA', 'DX-OFFICE', 'ChinaNet-0058', 'ChinaNet-iA4K', '章璐的iPhone'];

export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<Autocomplete size='sm' label={t('WiFi名称(SSID)')} startContent={<Wifi size={20} />}>
				{WiFiList.map((ssid) => (
					<AutocompleteItem key={ssid} value={ssid} startContent={<Wifi size={24} />}>
						{ssid}
					</AutocompleteItem>
				))}
			</Autocomplete>
			<Input size='sm' label={t('密码')} type='password' startContent={<Lock size={20} />} />
			<div className='flex flex-row gap-2 items-center text-warning text-sm'>
				<Info size={24} className='flex-none' />
				{t('请输入需要网络摄像机连接的WiFi名称和密码，随后点击“下一步”。')}
			</div>
			<div className='flex flex-row justify-end'>
				<LinkButton size='sm' variant='solid' color='primary' label={t('下一步')} href='./next' />
			</div>
		</>
	);
}
