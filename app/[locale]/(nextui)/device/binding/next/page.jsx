'use client';

import { Card } from '@nextui-org/react';
import { QrCode2 } from '@styled-icons/material/QrCode2';
import { Info } from '@styled-icons/material/Info';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<Card className='aspect-square flex items-center justify-center'>
				<QrCode2 size={96} />
			</Card>
			<div className='flex flex-row gap-2 items-center text-warning text-sm'>
				<Info size={24} className='flex-none' />
				{t(
					'请在听到网络摄像机“绑定设备”的提示音后，将该二维码放置在摄像机镜头前约30厘米左右，等待设备“配置成功”的提示音。'
				)}
			</div>
		</>
	);
}
