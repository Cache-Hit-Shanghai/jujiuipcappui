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
import {
	NavbarBack,
	Information,
	LabelButton,
	LabelLink,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

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
	const t = useJuJiuT();
	const [openAvata, setOpenAvata] = useState(false);
	const [openName, setOpenName] = useState(false);

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
							<Avatar size='sm' src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
						</LabelButton>
						<Divider />
						<LabelButton label={t('修改昵称')} onClick={() => setOpenName(true)}>
							用户12345
						</LabelButton>
						<Divider />
						<LabelLink label={t('修改密码')} href='./changePassword'></LabelLink>
					</CardBody>
				</Card>
				<Card>
					<CardBody className='flex flex-col gap-3'>
						<Button color='secondary'>{t('退出登录')}</Button>
						<Divider />
						<Button color='danger'>{t('注销账号')}</Button>
					</CardBody>
				</Card>
			</MobileMain>
			<JuJiuModal isOpen={openAvata} onOpenChange={setOpenAvata} title={t('更换头像')}>
				<Button color='success'>{t('本地相册')}</Button>
			</JuJiuModal>
			<JuJiuModal isOpen={openName} onOpenChange={setOpenName} title={t('修改昵称')}>
				<Input placeholder={t('请填写昵称……')} maxLength={20} minLength={2} />
				<Information label={t('修改昵称提示')} />
				<Button color='success'>{t('保存')}</Button>
			</JuJiuModal>
		</div>
	);
};

export default Page;
