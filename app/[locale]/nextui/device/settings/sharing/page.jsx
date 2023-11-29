'use client';

import { Button, User, Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { NavbarBack, LabelLink, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';
import { Remove } from '@styled-icons/material/Remove';
import { ShareOff } from '@/jujiu-ui-components/icons/shareoff';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('设备分享') + ' - 办3'} />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardHeader>{t('分享好友')} (3)</CardHeader>
					<Divider />
					<CardBody className='gap-2'>
						<div className='flex flex-row items-center justify-between'>
							<User
								name='Peter'
								avatarProps={{
									src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
								}}
							/>
							<Button size='sm' isIconOnly color='danger'>
								<Remove size={24} />
							</Button>
						</div>
						<div className='flex flex-row items-center justify-between'>
							<User
								name='Jane'
								avatarProps={{
									src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
								}}
							/>
							<Button size='sm' isIconOnly color='danger'>
								<Remove size={24} />
							</Button>
						</div>
						<div className='flex flex-row items-center justify-between'>
							<User
								name='Junior Garcia'
								avatarProps={{
									src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
								}}
							/>
							<Button size='sm' isIconOnly color='danger'>
								<Remove size={24} />
							</Button>
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody className='py-0'>
						<LabelLink href='./qrcode' label={t('二维码分享')} />
						<Divider />
						<LabelLink href='./qrcode' label={t('微信分享')} />
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<Button size='sm' color='danger' startContent={<ShareOff size={24} />}>
							{t('取消所有分享')}
						</Button>
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
}
