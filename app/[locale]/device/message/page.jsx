'use client';

import {
	Card,
	CardBody,
	CardHeader,
	Divider,
	Badge,
	Select,
	SelectItem,
} from '@nextui-org/react';
import { Notifications } from '@/jujiu-ui-components/icons/notifications';
import { NotificationsUnread } from '@/jujiu-ui-components/icons/notificationsunread';
import {
	NavbarBack,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();

	const messages = [
		{
			id: 0,
			title: t('服务过期提醒'),
			date: '2023/7/24',
			time: '10:24',
			content: '办3（GF12345678）的云存储服务已过期。录像已无法访问。',
			href: '/my/cloudstorage',
			read: false,
		},
		{
			id: 1,
			title: t('服务即将到期提醒'),
			date: '2023/7/23',
			time: '04:24',
			content:
				'办3（GF12345678）的云存储服务将于1天后到期。到期后已保存的录像将无法访问。请及时续费。',
			href: '/my/cloudstorage',
			read: false,
		},
		{
			id: 2,
			title: t('服务即将到期提醒'),
			date: '2023/7/22',
			time: '21:24',
			content:
				'办3（GF12345678）的云存储服务将于7天后到期。到期后已保存的录像将无法访问。请及时续费。',
			href: '/my/cloudstorage',
			read: false,
		},
		{
			id: 3,
			title: t('设备访问提醒'),
			date: '2023/7/21',
			time: '10:24',
			content: '用户“AB1234”正在查看办3（GF12345678）的视频流。',
			href: '#',
			read: false,
		},
		{
			id: 4,
			title: t('设备异常提醒'),
			date: '2023/7/20',
			time: '04:24',
			content: '办3（GF12345678）绑定用户失败。',
			href: '#',
			read: false,
		},
		{
			id: 5,
			title: t('设备状态提醒'),
			date: '2023/7/19',
			time: '21:24',
			content: '办3（GF12345678）已上线',
			href: '#',
			read: true,
		},
		{
			id: 6,
			title: t('设备状态提醒'),
			date: '2023/7/18',
			time: '00:24',
			content: '办3（GF12345678）已离线。',
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
						<CardHeader className='flex flex-row gap-2 items-center'>
							{message.read ? (
								<Notifications size={24} />
							) : (
								<NotificationsUnread size={24} />
							)}
							<div>
								<p>{message.title}</p>
								<p className='text-xs text-default-500'>
									{message.date} {message.time}
								</p>
							</div>
						</CardHeader>
						<Divider />
						<CardBody className='flex-none text-sm'>{message.content}</CardBody>
					</Card>
				))}
			</MobileMain>
		</div>
	);
};
export default Page;
