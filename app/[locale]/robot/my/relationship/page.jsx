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
	Input,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Switch,
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
import { Edit } from '@styled-icons/material/Edit';
import { DoNotDisturbOn } from '@styled-icons/material/DoNotDisturbOn';
import { PersonRemove } from '@styled-icons/material/PersonRemove';

function FriendItem({ children }) {
	return (
		<div className='flex flex-row items-center justify-between'>
			{children}
			<div className='flex flex-row items-center gap-2'>
				<Button size='sm'>发私信</Button>
				<Dropdown backdrop='blur'>
					<DropdownTrigger>
						<Button isIconOnly variant='light'>
							<MoreHoriz size={24} />
						</Button>
					</DropdownTrigger>
					<DropdownMenu variant='faded' aria-label='Static Actions'>
						<DropdownItem
							showDivider
							key='nickname'
							endContent={<Edit size={24} />}
						>
							设置备注
						</DropdownItem>
						<DropdownItem key='noaccess' endContent={<Switch />}>
							不让他看作品
						</DropdownItem>
						<DropdownItem showDivider key='filterout' endContent={<Switch />}>
							不看他的作品
						</DropdownItem>
						<DropdownItem key='breakup' endContent={<PersonRemove size={24} />}>
							移除朋友
						</DropdownItem>
						<DropdownItem
							key='delete'
							className='text-danger'
							color='danger'
							endContent={<DoNotDisturbOn size={24} />}
						>
							取消关注
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
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
							<Input
								size='sm'
								startContent={<Search size={24} />}
								placeholder={t('{number}位朋友', { number: 5 })}
							/>
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
										<p className='text-xs text-default-500'>{t('在线')}</p>
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
										<p className='text-xs text-default-500'>{t('在线')}</p>
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
										<p className='text-xs text-default-500'>{t('在线')}</p>
									</div>
								</div>
							</FriendItem>
							<FriendItem>
								<div className='flex flex-row items-center gap-2'>
									<Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
									<div>
										<p className='text-sm'>Tom Chen</p>
										<p className='text-xs text-default-500'>{t('离线')}</p>
									</div>
								</div>
							</FriendItem>
							<FriendItem>
								<div className='flex flex-row items-center gap-2'>
									<Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
									<div>
										<p className='text-sm'>Lisa Wang</p>
										<p className='text-xs text-default-500'>{t('离线')}</p>
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
