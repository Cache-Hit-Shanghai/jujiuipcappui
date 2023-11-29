'use client';

import { Button, User, Card, CardHeader, CardBody, Divider, useDisclosure } from '@nextui-org/react';
import {
	NavbarBack,
	LabelLink,
	LabelButton,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';
import { ActionSheet } from '@/jujiu-ui-components/nextui/extension/actionsheet';
import { Confirm } from '@/jujiu-ui-components/nextui/extension/confirm';
import { Remove } from '@styled-icons/material/Remove';
import { ShareOff } from '@/jujiu-ui-components/icons/shareoff';

export default function Page() {
	const t = useJuJiuT();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const confirm = useDisclosure();

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
						<LabelButton label={t('微信分享')} onPress={onOpen} />
						<ActionSheet
							isOpen={isOpen}
							onOpenChange={onOpenChange}
							title={t('微信分享')}
							buttons={[
								{ label: t('发送给朋友'), key: 'wechat_friends' },
								{ label: t('分享到朋友圈'), key: 'wechat_moments' },
							]}
						/>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<Button size='sm' color='danger' startContent={<ShareOff size={24} />} onPress={confirm.onOpen}>
							{t('取消所有分享')}
						</Button>
						<Confirm
							title={t('设备分享')}
							message={t('是否取消该设备的所有分享？')}
							isOpen={confirm.isOpen}
							onClose={confirm.onClose}
						/>
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
}
