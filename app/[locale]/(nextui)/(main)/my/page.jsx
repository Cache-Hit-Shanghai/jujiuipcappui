'use client';

import { Button, User, Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import {
	LinkButton,
	LabelLink,
	ThemeButton,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { PhotoAlbum } from '@styled-icons/material/PhotoAlbum';
import { Settings } from '@styled-icons/material/Settings';
import { Update } from '@styled-icons/material/Update';
import { Share } from '@styled-icons/material/Share';
import { HelpOutline } from '@styled-icons/material/HelpOutline';
import { SupportAgent } from '@styled-icons/material/SupportAgent';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { Face } from '@styled-icons/material/Face';
import { Security } from '@styled-icons/material/Security';
import { Try } from '@/jujiu-ui-components/icons/try';

export default function Page() {
	const t = useJuJiuT();

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
					<LinkButton href='./settings' icon={<Settings size={24} />} />
				</div>
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody>
						<div className='grid grid-cols-3'>
							<LinkButton label={t('服务中心')} icon={<SupportAgent size={24} />} href='' />
							<LinkButton label={t('相册')} icon={<PhotoAlbum size={24} />} href='./gallery' />
							<LinkButton label={t('固件升级')} icon={<Update size={24} />} href='./ota' />
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>{t('常用工具')}</CardHeader>
					<Divider />
					<CardBody>
						<div className='grid grid-cols-3 gap-y-2'>
							<LinkButton label={t('我的收藏')} icon={<FavoriteBorder size={24} />} href='' />
							<LinkButton label={t('人脸管理')} icon={<Face size={24} />} href='' />
							<LinkButton label={t('我的分享')} icon={<Share size={24} />} href='./sharing' />
							<LinkButton label={t('产品试用')} icon={<Try size={24} />} href='' />
							<LinkButton label={t('帮助与反馈')} icon={<HelpOutline size={24} />} href='./feedback' />
							<LinkButton label={t('安全中心')} icon={<Security size={24} />} href='' />
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody className='py-0'>
						<LabelLink label='其它(生产环境无此按钮)' href='./other' />
					</CardBody>
				</Card>
			</MobileMain>
		</>
	);
}
