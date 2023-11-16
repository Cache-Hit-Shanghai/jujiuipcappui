'use client';

import { Button, User, Card, CardBody } from '@nextui-org/react';
import { LinkButton, LinkGroup, ThemeButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { Photo } from '@styled-icons/heroicons-outline/Photo';
import { CloudArrowUp } from '@styled-icons/heroicons-outline/CloudArrowUp';
import { ArrowUpCircle } from '@styled-icons/heroicons-outline/ArrowUpCircle';
import { ArrowTopRightOnSquare } from '@styled-icons/heroicons-outline/ArrowTopRightOnSquare';
import { QuestionMarkCircle } from '@styled-icons/heroicons-outline/QuestionMarkCircle';

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('账号设置'), href: './account' },
		{ label: t('通知设置'), href: './notification' },
		{ label: t('界面设置'), href: './uisettings' },
		{ label: t('系统信息'), href: './sysinfo' },
		{ label: t('录像截图设置'), href: './storagesettings' },
		{ label: t('关于'), href: './about', last: true },
	];

	return (
		<>
			<div className='flex items-center justify-between p-2'>
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
			</div>
			<div className='flex flex-col flex-1 px-4 gap-4'>
				<Card>
					<CardBody>
						<div className='flex flex-row justify-evenly'>
							<LinkButton label={t('相册')} icon={<Photo size={24} />} href='./gallery' />
							<LinkButton label={t('云存储')} icon={<CloudArrowUp size={24} />} href='./cloudstorage' />
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<div className='flex flex-row justify-evenly'>
							<LinkButton label={t('固件升级')} icon={<ArrowUpCircle size={24} />} href='./ota' />
							<LinkButton label={t('我的分享')} icon={<ArrowTopRightOnSquare size={24} />} href='./sharing' />
							<LinkButton label={t('帮助与反馈')} icon={<QuestionMarkCircle size={24} />} href='./feedback' />
						</div>
					</CardBody>
				</Card>
				<LinkGroup data={links} />
			</div>
		</>
	);
}
