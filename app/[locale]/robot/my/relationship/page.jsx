'use client';

import {
	Avatar,
	Tabs,
	Tab,
	User,
	Badge,
	Button,
	Divider,
	Card,
	CardBody,
	CardFooter,
	Input,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Switch,
	Modal,
	ModalContent,
	useDisclosure,
} from '@nextui-org/react';
import {
	MobileHeader,
	MobileMain,
	NavbarBack,
	LabelButton,
	LabeledControl,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { Confirm } from '@/jujiu-ui-components/nextui/extension/confirm';
import Link, { useJuJiuT } from '@/state/translate';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { MoreHoriz } from '@styled-icons/material/MoreHoriz';
import { Search } from '@styled-icons/material/Search';
import { Edit } from '@styled-icons/material/Edit';
import { DoNotDisturbOn } from '@styled-icons/material/DoNotDisturbOn';
import { PersonRemove } from '@styled-icons/material/PersonRemove';

function FollowingItem({ children }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const unfollowConfirm = useDisclosure();
	const editRemark = useDisclosure();

	const t = useJuJiuT();

	return (
		<div className='flex flex-row items-center justify-between'>
			{children}
			<div className='flex flex-row items-center gap-2'>
				<Button size='sm' onPress={unfollowConfirm.onOpen}>
					{t('取消关注')}
				</Button>
				<Button isIconOnly variant='light' onPress={onOpen}>
					<MoreHoriz size={24} />
				</Button>
				<Confirm
					message={t('确认不再关注？')}
					isOpen={unfollowConfirm.isOpen}
					onClose={unfollowConfirm.onClose}
				/>
				<Modal></Modal>
				<Modal
					backdrop='blur'
					placement='bottom'
					hideCloseButton
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					className='bg-transparent'
				>
					<ModalContent className='gap-2'>
						{() => (
							<>
								<Card>
									<CardBody>
										<Switch
											classNames={{
												base: 'h-10 inline-flex flex-row-reverse w-full max-w-md justify-between',
											}}
										>
											<p className='text-sm'>{t('在关注列表中置顶')}</p>
										</Switch>
										<Divider />
										<LabelButton label={t('设置备注名')} />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<Button
											size='sm'
											color='danger'
											onPress={unfollowConfirm.onOpen}
										>
											{t('取消关注')}
										</Button>
									</CardBody>
								</Card>
							</>
						)}
					</ModalContent>
				</Modal>
			</div>
		</div>
	);
}

function FriendItem({ children }) {
	const t = useJuJiuT();

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
							{t('取消关注')}
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
					<Tab key='following' title={t('关注')}>
						<div className='flex flex-col gap-3'>
							<Input
								size='sm'
								startContent={<Search size={24} />}
								placeholder={t('搜索已关注的人')}
							/>
							<p className='text-sm'>
								{t('我的关注({number})', { number: 3 })}
							</p>
							<FollowingItem>
								<div className='flex flex-row items-center gap-2'>
									<Avatar src='https://avatars.githubusercontent.com/u/30373425?v=4' />
									<div>
										<p className='text-sm'>Junior Garcia</p>
										<p className='text-xs text-default-500'>
											{t('{number}篇笔记未看', { number: 2 })}
										</p>
									</div>
								</div>
							</FollowingItem>
							<FollowingItem>
								<div className='flex flex-row items-center gap-2'>
									<Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
									<div>
										<p className='text-sm'>Tom Chen</p>
										<p className='text-xs text-default-500'>
											{t('{number}篇笔记未看', { number: 5 })}
										</p>
									</div>
								</div>
							</FollowingItem>
							<FollowingItem>
								<div className='flex flex-row items-center gap-2'>
									<Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
									<div>
										<p className='text-sm'>Lisa Wang</p>
										<p className='text-xs text-default-500'>
											{t('{number}篇笔记未看', { number: 20 })}
										</p>
									</div>
								</div>
							</FollowingItem>
						</div>
					</Tab>
					<Tab key='follower' title={t('粉丝')}></Tab>
				</Tabs>
			</MobileMain>
		</div>
	);
}
