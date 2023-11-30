'use client';

import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack, LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('设备转移') + ' - 办3'} />
			</MobileHeader>
			<MobileMain>
				<Card className='flex-none'>
					<CardBody>
						<h4 className='text-xl'>转移设备说明</h4>
						<p className='text-xs text-default-500'>您正在将此设备转移给其他人，请确认如下事项：</p>
					</CardBody>
				</Card>
				<Card className='flex-none'>
					<CardBody>
						<p className='text-sm'>1. 若设备正在分享中，无法转移。</p>
						<p className='text-sm'>
							2.
							若设备已开通云存储等可以转移的增值服务，相应的服务也会转移；若开通了订阅服务，将取消订阅服务，次月不再扣费续订。
						</p>
						<p className='text-sm'>3. 转移时若设备不在线，设备已开通的增值服务转移过去可能是关闭状态。</p>
						<p className='text-sm'>4. 设备的消息、云录像、人脸库等记录仍保留在原账号下，按原有机制清理。</p>
						<p className='text-sm'>5. 设备本地保存的所有人脸数据将被清空。</p>
					</CardBody>
				</Card>
				<div className='flex flex-row justify-end'>
					<LinkButton size='sm' variant='solid' color='primary' label={t('下一步')} href='./next' />
				</div>
			</MobileMain>
		</div>
	);
}
