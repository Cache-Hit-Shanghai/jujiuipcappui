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
} from '@nextui-org/react';
import { useState } from 'react';
import { NavbarBack, Information, LabelButton, LabelLink } from '@/jujiu-ui-components/nextui/core/core-ui';

function JuJiuModal({ onOpenChange, onClose, isOpen, title, position, children, ...props }) {
	return (
		<Modal
			isOpen={isOpen}
			placement={position || 'bottom'}
			onClose={onClose}
			onOpenChange={onOpenChange}
			className='m-0'
		>
			<ModalContent>
				{(onClose) => {
					return (
						<>
							<ModalHeader>{title}</ModalHeader>
							<ModalBody className='py-4'>{children}</ModalBody>
							{/* <ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									取消
								</Button>
								<Button color='primary' onPress={onClose}>
									确定
								</Button>
							</ModalFooter> */}
						</>
					);
				}}
			</ModalContent>
		</Modal>
	);
}

const Page = () => {
	const [openAvata, setOpenAvata] = useState(false);
	const [openName, setOpenName] = useState(false);

	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'账号设置'}></NavbarBack>
			<div className='flex flex-col px-4 gap-4'>
				<Card>
					<CardBody className='py-0'>
						<LabelButton
							label={'头像'}
							onClick={() => {
								setOpenAvata(true);
							}}
						>
							<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
						</LabelButton>
						<Divider />
						<LabelButton label={'昵称'} onClick={() => setOpenName(true)}>
							用户12345
						</LabelButton>
						<Divider />
						<LabelLink label={'修改密码'} href='./changePassword'></LabelLink>
					</CardBody>
				</Card>
				<Button color='warning' variant='bordered'>
					退出登录
				</Button>
				<Button color='danger' variant='bordered'>
					注销账号
				</Button>
			</div>
			<JuJiuModal isOpen={openAvata} onOpenChange={setOpenAvata} title={'更换头像'}>
				<Button color='success'>本地相册</Button>
			</JuJiuModal>
			<JuJiuModal isOpen={openName} onOpenChange={setOpenName} title={'修改昵称'}>
				<Input placeholder={'请填写昵称……'} maxLength={20} minLength={2} />
				<Information label={'修改昵称提示'} />
				<Button color='success'>保存</Button>
			</JuJiuModal>
		</div>
	);
};

export default Page;
