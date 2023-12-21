'use client';

import {
	Button,
	Avatar,
	Card,
	CardBody,
	Modal,
	ModalContent,
	Divider,
	ModalBody,
	ModalHeader,
	Input,
	useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';
import {
	NavbarBack,
	Information,
	LabelButton,
	LabelLink,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { Logout } from '@styled-icons/material/Logout';
import { Save } from '@styled-icons/material/Save';
import { PhotoLibrary } from '@styled-icons/material/PhotoLibrary';
import { DeleteOutline } from '@styled-icons/material/DeleteOutline';
import { Confirm } from '@/jujiu-ui-components/nextui/extension/confirm';
import { useJuJiuT } from '@/state/translate';

function JuJiuModal({
	onOpenChange,
	onClose,
	isOpen,
	title,
	position,
	children,
	...props
}) {
	return (
		<Modal
			isOpen={isOpen}
			placement={position || 'bottom'}
			onClose={onClose}
			onOpenChange={onOpenChange}
			className='m-0'
			{...props}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>{title}</ModalHeader>
						<ModalBody className='py-4'>{children}</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

const Page = () => {
	const t = useJuJiuT();
	const [openAvata, setOpenAvata] = useState(false);
	const [openName, setOpenName] = useState(false);
	const logout = useDisclosure();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('账号设置')} />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='py-0'>
						<LabelButton
							label={t('更换头像')}
							onClick={() => {
								setOpenAvata(true);
							}}
						>
							<Avatar
								size='sm'
								src='https://i.pravatar.cc/150?u=a04258114e29026702d'
							/>
						</LabelButton>
						<Divider />
						<LabelButton
							label={t('修改昵称')}
							onClick={() => setOpenName(true)}
						>
							用户12345
						</LabelButton>
						<Divider />
						<LabelLink label={t('修改密码')} href='./changePassword' />
					</CardBody>
				</Card>
				<Card>
					<CardBody className='flex flex-col gap-3'>
						<Button
							size='sm'
							color='primary'
							startContent={<Logout size={24} />}
							onPress={logout.onOpen}
						>
							{t('退出登录')}
						</Button>
						<Confirm
							message={t('您是否确定退出登录？')}
							isOpen={logout.isOpen}
							onClose={logout.onClose}
						/>
						{/* <Divider />
						<Button size='sm' color='danger' startContent={<DeleteOutline size={24} />}>
							{t('注销账号')}
						</Button> */}
					</CardBody>
				</Card>
			</MobileMain>
			<JuJiuModal
				isOpen={openAvata}
				onOpenChange={setOpenAvata}
				title={t('更换头像')}
			>
				<Button
					size='sm'
					color='primary'
					startContent={<PhotoLibrary size={24} />}
				>
					{t('本地相册')}
				</Button>
			</JuJiuModal>
			<JuJiuModal
				isOpen={openName}
				onOpenChange={setOpenName}
				title={t('修改昵称')}
			>
				<Input
					size='sm'
					placeholder={t('请填写昵称……')}
					maxLength={20}
					minLength={2}
				/>
				<Information label={t('修改昵称提示')} />
				<Button size='sm' color='primary' startContent={<Save size={24} />}>
					{t('保存')}
				</Button>
			</JuJiuModal>
		</div>
	);
};

export default Page;
