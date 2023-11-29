'use client';

import { Card } from '@nextui-org/react';
import { LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';
import { Home } from '@styled-icons/material/Home';
import { QrCode2 } from '@styled-icons/material/QrCode2';
import { Info } from '@styled-icons/material/Info';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<p className='h-10 flex flex-col justify-center'>{t('设备转移') + ' - 办3'}</p>
			</MobileHeader>
			<MobileMain>
				<Card className='aspect-square flex items-center justify-center'>
					<QrCode2 size={96} />
				</Card>
				<div className='flex flex-row gap-2 items-center text-warning text-sm'>
					<Info size={24} className='flex-none' />
					{t('使用App扫一扫上面的二维码图案，接受转移的设备。')}
				</div>
				<div className='flex justify-center'>
					<LinkButton
						size='sm'
						variant='solid'
						color='primary'
						href={'/'}
						label={t('回到主页')}
						startContent={<Home size={24} />}
					/>
				</div>
			</MobileMain>
		</div>
	);
}
