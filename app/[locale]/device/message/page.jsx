'use client';

import {
	Card,
	CardBody,
	CardHeader,
	Divider,
	Badge,
	Select,
	SelectItem,
	Image,
	Button,
} from '@nextui-org/react';
import { Notifications } from '@/jujiu-ui-components/icons/notifications';
import { NotificationsUnread } from '@/jujiu-ui-components/icons/notificationsunread';
import { Download } from '@styled-icons/material/Download';
import { Share } from '@styled-icons/material/Share';
import {
	NavbarBack,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	const messages = [
		{
			id: -1,
			title: t('智能识别提醒'),
			date: '2023/12/14',
			time: '10:24',
			device: '办3 (GF12345678)',
			content: '识别到人脸。',
			href: '/my/cloudstorage',
			read: false,
			image:
				'https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fcrossing-cms-cwg-tw%2Farticle%2F201808%2Farticle-5b62c5a4d374e.jpg/?w=1170&format=webp',
		},
		{
			id: 0,
			title: t('服务过期提醒'),
			date: '2023/7/24',
			time: '10:24',
			device: '办3 (GF12345678)',
			content: '云存储服务已过期。录像已无法访问。',
			href: '/my/cloudstorage',
			read: false,
		},
		{
			id: 1,
			title: t('服务即将到期提醒'),
			date: '2023/7/23',
			time: '04:24',
			device: '办3 (GF12345678)',
			content:
				'云存储服务将于1天后到期。到期后已保存的录像将无法访问。请及时续费。',
			href: '/my/cloudstorage',
			read: false,
		},
		{
			id: 2,
			title: t('服务即将到期提醒'),
			date: '2023/7/22',
			time: '21:24',
			device: '办3 (GF12345678)',
			content:
				'云存储服务将于7天后到期。到期后已保存的录像将无法访问。请及时续费。',
			href: '/my/cloudstorage',
			read: false,
		},
		{
			id: 3,
			title: t('设备访问提醒'),
			date: '2023/7/21',
			time: '10:24',
			device: '办3 (GF12345678)',
			content: '用户“AB1234”正在查看视频流。',
			href: '#',
			read: false,
		},
		{
			id: 4,
			title: t('设备异常提醒'),
			date: '2023/7/20',
			time: '04:24',
			device: '办3 (GF12345678)',
			content: '绑定用户失败。',
			href: '#',
			read: false,
		},
		{
			id: 5,
			title: t('设备状态提醒'),
			date: '2023/7/19',
			time: '21:24',
			device: '办3 (GF12345678)',
			content: '已上线',
			href: '#',
			read: true,
		},
		{
			id: 6,
			title: t('设备状态提醒'),
			date: '2023/7/18',
			time: '00:24',
			device: '办3 (GF12345678)',
			content: '已离线。',
			href: '#',
			read: true,
		},
	];

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack
					label={
						<Badge
							color='primary'
							content={messages.reduce(
								(counter, message) => (message.read ? counter : counter + 1),
								0
							)}
						>
							<p className='pr-2'>{t('消息通知')}</p>
						</Badge>
					}
				/>
				<Select size='sm' className='w-32' defaultSelectedKeys={['all']}>
					<SelectItem key='all' value='all'>
						{t('全部')}
					</SelectItem>
					<SelectItem key='unread' value='unread'>
						{t('未读')}
					</SelectItem>
					<SelectItem key='read' value='read'>
						{t('已读')}
					</SelectItem>
				</Select>
			</MobileHeader>
			<MobileMain>
				{messages.map((message) => (
					<Card
						key={message.id}
						className={'flex-none' + (message.read ? '' : ' bg-primary')}
					>
						<CardHeader className='flex flex-row items-center justify-between'>
							<div className='flex flex-row items-center gap-2'>
								{message.read ? (
									<Notifications size={24} />
								) : (
									<NotificationsUnread size={24} />
								)}
								<div>
									<p>{message.title}</p>
									<p className='text-xs text-default dark:text-default-500'>
										{message.device}
									</p>
								</div>
							</div>
							<div className='flex flex-col items-end'>
								<p className='text-sm'>{message.time}</p>
								<p className='text-xs text-default dark:text-default-500'>
									{message.date}
								</p>
							</div>
						</CardHeader>
						<Divider />
						<CardBody className='flex-none text-sm flex flex-col gap-2'>
							<p>{message.content}</p>
							{message.image && (
								<div className='relative'>
									<Image src={message.image} />
									<div className='absolute top-0 right-0 p-1 z-20 invert flex flex-row gap-2'>
										<Button isIconOnly variant='flat'>
											<Download size={24} />
										</Button>
										<Button isIconOnly variant='flat'>
											<Share size={24} />
										</Button>
									</div>
								</div>
							)}
						</CardBody>
					</Card>
				))}
			</MobileMain>
		</div>
	);
}
