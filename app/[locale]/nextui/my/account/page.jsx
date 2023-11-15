'use client';
import { NavbarBack, Information, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';

import {
	Button,
	Avatar,
	Link,
	Modal,
	ModalContent,
	ModalFooter,
	ModalBody,
	ModalHeader,
	Input,
} from '@nextui-org/react';
import { ChevronRightIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const LabelButton = ({ label, children, onClick, ...props }) => {
	return (
		<div className='flex grow justify-between border-b py-1' onClick={onClick}>
			<span>{label}</span>
			<Button
				{...props}
				onClick={onClick}
				variant='light'
				endContent={<ChevronRightIcon width={'24px'} height={'24px'}></ChevronRightIcon>}
			>
				{children || <p className='w-10'></p>}
			</Button>
		</div>
	);
};

const LabelLink = ({ href, ...props }) => {
	return (
		<Link href={href} color='foreground'>
			<LabelButton {...props}></LabelButton>
		</Link>
	);
};

function JuJiuModal({ onOpenChange, onClose, isOpen, title, position, children, ...props }) {
	return (
		<Modal isOpen={isOpen} placement={position || 'bottom'} onClose={onClose} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => {
					return (
						<>
							<ModalHeader>{title}</ModalHeader>
							<ModalBody>{children}</ModalBody>
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
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<LabelButton
					label={'头像'}
					onClick={() => {
						setOpenAvata(true);
					}}
				>
					<Avatar icon={<UserIcon width={'24px'} height={'24px'}></UserIcon>}></Avatar>
				</LabelButton>
				<LabelButton label={'昵称'} onClick={() => setOpenName(true)}>
					用户12345
				</LabelButton>
				<LabelLink label={'修改密码'} href='./changePassword'></LabelLink>
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
