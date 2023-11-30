'use client';

import { Button, User, Card, CardBody } from '@nextui-org/react';
import {
	LinkButton,
	LabelLink,
	LinkGroup,
	ThemeButton,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { PhotoAlbum } from '@styled-icons/material/PhotoAlbum';
import { CloudUpload } from '@styled-icons/material/CloudUpload';
import { Update } from '@styled-icons/material/Update';
import { IosShare } from '@styled-icons/material/IosShare';
import { HelpOutline } from '@styled-icons/material/HelpOutline';

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('账号设置'), href: './account' },
		{ label: t('通知设置'), href: './notification' },
		{ label: t('界面设置'), href: './uisettings' },
		{ label: t('系统信息'), href: './sysinfo' },
		{ label: t('关于'), href: './about' },
	];

	return (
		<>
			<MobileHeader>
				<Button variant='light' as={Link} href='./login'>
					<User
						name='Jane Doe'
						description='VIP level 1'
						avatarProps={{
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
						}}
					/>
				</Button>
				<div className='px-2'>
					<ThemeButton />
				</div>
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody>
						<div className='flex flex-row justify-evenly'>
							<LinkButton label={t('相册')} icon={<PhotoAlbum size={24} />} href='./gallery' />
							<LinkButton label={t('云存储')} icon={<CloudUpload size={24} />} href='./cloudstorage' />
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<div className='flex flex-row justify-evenly'>
							<LinkButton label={t('固件升级')} icon={<Update size={24} />} href='./ota' />
							<LinkButton label={t('我的分享')} icon={<IosShare size={24} />} href='./sharing' />
							<LinkButton label={t('帮助与反馈')} icon={<HelpOutline size={24} />} href='./feedback' />
						</div>
					</CardBody>
				</Card>
				<LinkGroup data={links} />
				<Card>
					<CardBody className='py-0'>
						<LabelLink label='其它(生产环境无此按钮)' href='./other' />
					</CardBody>
				</Card>
			</MobileMain>
		</>
	);
}