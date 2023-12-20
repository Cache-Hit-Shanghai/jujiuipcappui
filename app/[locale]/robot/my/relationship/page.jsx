'use client';

import {
	Avatar,
	Tabs,
	Tab,
	User,
	Badge,
	Button,
	Image,
	Card,
	CardBody,
	CardFooter,
} from '@nextui-org/react';
import {
	MobileHeader,
	MobileMain,
	NavbarBack,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { MoreHoriz } from '@styled-icons/material/MoreHoriz';
import { Search } from '@styled-icons/material/Search';
import { MotionPhotosOn } from '@styled-icons/material/MotionPhotosOn';

function ImageCard({ src, title, href }) {
	return (
		<Card>
			<CardBody as={Link} href={href} className='p-0'>
				<Image src={src} />
			</CardBody>
			<CardFooter className='flex-col p-2 gap-2 items-start'>
				<p className='text-sm'>{title}</p>
				<div className='w-full flex flex-row items-center justify-between'>
					<User
						name='庞大小姐'
						avatarProps={{
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
							className: 'w-6 h-6 text-tiny',
						}}
						className='text-tiny'
					/>
					<Button
						size='sm'
						variant='light'
						startContent={<FavoriteBorder size={18} />}
						className='p-0'
					>
						<p className='text-tiny'>324</p>
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}

function FriendItem({ children }) {
	return (
		<div className='flex flex-row items-center justify-between'>
			{children}
			<div className='flex flex-row items-center gap-2'>
				<Button size='sm'>发私信</Button>
				<Button isIconOnly variant='light'>
					<MoreHoriz size={24} />
				</Button>
			</div>
		</div>
	);
}

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader className='fixed'>
				<NavbarBack />
			</MobileHeader>
			<MobileMain>
				<Tabs
					className='self-center'
					classNames={{ tabList: 'p-2' }}
					variant='underlined'
				>
					<Tab key='friends' title={t('朋友')}>
						<div className='flex flex-col gap-3'>
							<FriendItem>
								<div className='flex flex-row items-center gap-2'>
									<Badge
										content=''
										color='success'
										shape='circle'
										placement='bottom-right'
									>
										<Avatar src='https://avatars.githubusercontent.com/u/30373425?v=4' />
									</Badge>
									<div>
										<p className='text-sm'>Junior Garcia</p>
										<p className='text-xs text-default-500'>在线</p>
									</div>
								</div>
							</FriendItem>
							<FriendItem>
								<div className='flex flex-row items-center gap-2'>
									<Badge
										content=''
										color='success'
										shape='circle'
										placement='bottom-right'
									>
										<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
									</Badge>
									<div>
										<p className='text-sm'>Jane Doe</p>
										<p className='text-xs text-default-500'>在线</p>
									</div>
								</div>
							</FriendItem>
							<FriendItem>
								<div className='flex flex-row items-center gap-2'>
									<Badge
										content=''
										color='success'
										shape='circle'
										placement='bottom-right'
									>
										<Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
									</Badge>
									<div>
										<p className='text-sm'>Junior Lee</p>
										<p className='text-xs text-default-500'>在线</p>
									</div>
								</div>
							</FriendItem>
							<FriendItem>
								<div className='flex flex-row items-center gap-2'>
									<Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
									<div>
										<p className='text-sm'>Tom Chen</p>
										<p className='text-xs text-default-500'>今天在线</p>
									</div>
								</div>
							</FriendItem>
							<FriendItem>
								<div className='flex flex-row items-center gap-2'>
									<Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
									<div>
										<p className='text-sm'>Lisa Wang</p>
										<p className='text-xs text-default-500'>离线</p>
									</div>
								</div>
							</FriendItem>
						</div>
					</Tab>
					<Tab key='following' title={t('关注')}></Tab>
					<Tab key='follower' title={t('粉丝')}></Tab>
				</Tabs>
			</MobileMain>
		</div>
	);
}
