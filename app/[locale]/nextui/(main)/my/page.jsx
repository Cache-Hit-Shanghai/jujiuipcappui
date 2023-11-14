'use client';

import { Button, User, Card, CardBody } from '@nextui-org/react';
import { LinkButton, LinkGroup, ThemeButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import {
	PhotoIcon,
	CloudArrowUpIcon,
	ArrowUpCircleIcon,
	ArrowTopRightOnSquareIcon,
	QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('账号设置'), url: '/my/account' },
		{ label: t('通知设置'), url: '/my/notification' },
		{ label: t('界面设置'), url: '/my/uisettings' },
		{ label: t('系统信息'), url: '/my/sysinfo' },
		{ label: t('录像截图设置'), url: '/my/storagesettings' },
		{ label: t('关于'), url: './about', last: true },
	];

	return (
		<>
			<div className='flex items-center justify-between p-2'>
				<Button variant='light' as={Link} href='/my/login'>
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
							<LinkButton label={t('相册')} icon={<PhotoIcon className='h-6 w-6' />} href='/my/gallery' />
							<LinkButton
								label={t('云存储')}
								icon={<CloudArrowUpIcon className='h-6 w-6' />}
								href='/my/cloudstorage'
							/>
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<div className='flex flex-row justify-evenly'>
							<LinkButton
								label={t('固件升级')}
								icon={<ArrowUpCircleIcon className='h-6 w-6' />}
								href='/my/ota'
							/>
							<LinkButton
								label={t('我的分享')}
								icon={<ArrowTopRightOnSquareIcon className='h-6 w-6' />}
								href='/my/sharing'
							/>
							<LinkButton
								label={t('帮助与反馈')}
								icon={<QuestionMarkCircleIcon className='h-6 w-6' />}
								href='/my/feedback'
							/>
						</div>
					</CardBody>
				</Card>
				<LinkGroup data={links} />
			</div>
		</>
	);
}
