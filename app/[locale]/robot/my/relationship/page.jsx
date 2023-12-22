'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
	User,
	Tabs,
	Tab,
	Button,
	Divider,
	Card,
	CardBody,
	Input,
	Switch,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react';
import {
	MobileHeader,
	MobileMain,
	NavbarBack,
	LabelButton,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { Confirm } from '@/jujiu-ui-components/nextui/extension/confirm';
import { useJuJiuT } from '@/state/translate';
import { MoreHoriz } from '@styled-icons/material/MoreHoriz';
import { Search } from '@styled-icons/material/Search';

function AddRemark({ isOpen, onOpenChange }) {
	const t = useJuJiuT();

	return (
		<Modal
			hideCloseButton
			backdrop='blur'
			placement='center'
			isOpen={isOpen}
			onOpenChange={onOpenChange}
		>
			<ModalContent className='gap-2'>
				{(onClose) => (
					<>
						<ModalHeader className='flex flex-col gap-1'>
							<p>{t('修改备注')}</p>
							<p className='text-xs font-normal text-default-500'>
								{t('最多不超过12个字')}
							</p>
						</ModalHeader>
						<ModalBody>
							<Input
								isClearable
								size='sm'
								placeholder='Junior Garcia'
								defaultValue='Junior Garcia'
							/>
						</ModalBody>
						<ModalFooter>
							<Button
								size='sm'
								color='danger'
								variant='light'
								onPress={onClose}
							>
								{t('取消')}
							</Button>
							<Button size='sm' color='primary' onPress={onClose}>
								{t('确定')}
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

function FollowingItem({ isFriend, children }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const unfollowConfirm = useDisclosure();
	const editRemark = useDisclosure();

	const t = useJuJiuT();

	return (
		<div className='flex flex-row items-center justify-between'>
			{children}
			<div className='flex flex-row items-center gap-2'>
				<Button
					size='sm'
					radius='full'
					variant='bordered'
					onPress={unfollowConfirm.onOpen}
				>
					{isFriend ? t('好友') : t('Following')}
				</Button>
				<Button isIconOnly variant='light' onPress={onOpen}>
					<MoreHoriz size={24} />
				</Button>
				<Confirm
					message={t('确认不再关注？')}
					isOpen={unfollowConfirm.isOpen}
					onClose={unfollowConfirm.onClose}
				/>
				<AddRemark
					isOpen={editRemark.isOpen}
					onOpenChange={editRemark.onOpenChange}
				/>
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
										<LabelButton
											label={t('设置备注名')}
											onPress={editRemark.onOpen}
										/>
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

function FollowerItem({ isFriend, children }) {
	const unfollowConfirm = useDisclosure();

	const t = useJuJiuT();

	return (
		<div className='flex flex-row items-center justify-between'>
			{children}
			<div className='flex flex-row items-center gap-2'>
				<Button
					size='sm'
					radius='full'
					variant='bordered'
					onPress={unfollowConfirm.onOpen}
				>
					{isFriend ? t('好友') : t('Following')}
				</Button>
				<Confirm
					message={t('确认不再关注？')}
					isOpen={unfollowConfirm.isOpen}
					onClose={unfollowConfirm.onClose}
				/>
			</div>
		</div>
	);
}

function FriendItem({ children }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const unfollowConfirm = useDisclosure();
	const editRemark = useDisclosure();
	const t = useJuJiuT();

	return (
		<div className='flex flex-row items-center justify-between'>
			{children}
			<div className='flex flex-row items-center gap-2'>
				<Button size='sm'>{t('发私信')}</Button>
				<Button isIconOnly variant='light' onPress={onOpen}>
					<MoreHoriz size={24} />
				</Button>
				<AddRemark
					isOpen={editRemark.isOpen}
					onOpenChange={editRemark.onOpenChange}
				/>
				<Confirm
					message={t('确认不再关注？')}
					isOpen={unfollowConfirm.isOpen}
					onClose={unfollowConfirm.onClose}
				/>
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
										<LabelButton
											label={t('设置备注名')}
											onPress={editRemark.onOpen}
										/>
									</CardBody>
								</Card>
								<Card>
									<CardBody className='gap-2'>
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

export default function Page() {
	const t = useJuJiuT();
	const searchParams = useSearchParams();
	const tab = searchParams.get('tab');
	const [selected, setSelected] = useState(tab || 'friends');

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
					selectedKey={selected}
					onSelectionChange={setSelected}
				>
					<Tab key='friends' title={t('好友')}>
						<div className='flex flex-col gap-3'>
							<FriendItem>
								<User
									name='Junior Garcia'
									description='C语言专家'
									avatarProps={{
										src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
									}}
								/>
							</FriendItem>
							<FriendItem>
								<User
									name='Jane Doe'
									description='UI设计师'
									avatarProps={{
										src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
									}}
								/>
							</FriendItem>
							<FriendItem>
								<User
									name='Junior Lee'
									description='专业金融分析师'
									avatarProps={{
										src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
									}}
								/>
							</FriendItem>
							<FriendItem>
								<User
									name='Tom Chen'
									description='舞蹈达人'
									avatarProps={{
										src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
									}}
								/>
							</FriendItem>
							<FriendItem>
								<User
									name='Lisa Wang'
									description='an artist from Sydney'
									avatarProps={{
										src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
									}}
								/>
							</FriendItem>
						</div>
					</Tab>
					<Tab key='following' title={t('Following')}>
						<div className='flex flex-col gap-3'>
							<Input
								size='sm'
								type='search'
								labelPlacement='outside'
								startContent={<Search size={24} />}
								placeholder={t('搜索已关注的人')}
							/>
							<p className='text-sm'>
								{t('我的关注({number})', { number: 3 })}
							</p>
							<FollowingItem isFriend>
								<User
									name='Junior Garcia'
									description={t('{number}篇笔记未看', { number: 2 })}
									avatarProps={{
										src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
									}}
								/>
							</FollowingItem>
							<FollowingItem>
								<User
									name='Tom Chen'
									description={t('{number}篇笔记未看', { number: 5 })}
									avatarProps={{
										src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
									}}
								/>
							</FollowingItem>
							<FollowingItem>
								<User
									name='Lisa Wang'
									description={t('{number}篇笔记未看', { number: 20 })}
									avatarProps={{
										src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
									}}
								/>
							</FollowingItem>
						</div>
					</Tab>
					<Tab key='follower' title={t('粉丝')}>
						<div className='flex flex-col gap-3'>
							<p className='text-sm'>
								{t('我的粉丝({number})', { number: 2 })}
							</p>
							<FollowerItem isFriend>
								<User
									name='Junior Garcia'
									avatarProps={{
										src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
									}}
								/>
							</FollowerItem>
							<FollowerItem>
								<User
									name='Alan Stephen'
									avatarProps={{
										src: 'https://i.pravatar.cc/300?u=a042581f4e29026712d',
									}}
								/>
							</FollowerItem>
						</div>
					</Tab>
				</Tabs>
			</MobileMain>
		</div>
	);
}
