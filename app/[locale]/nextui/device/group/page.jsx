'use client';

import {
	Input,
	Button,
	Card,
	CardBody,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react';
import { ChevronRight } from '@styled-icons/material/ChevronRight';
import { DeleteOutline } from '@styled-icons/material/DeleteOutline';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const groups = [
		{ label: t('默认分组'), disabled: true },
		{ label: '办公室' },
		{ label: '家' },
		{ label: '废弃' },
	];

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('设备分组')} />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='flex flex-col py-0 divide-y divide-divider'>
						{groups.map((group) => (
							<Button
								isDisabled={group.disabled}
								variant='light'
								radius='none'
								endContent={<ChevronRight size={24} />}
								className='justify-between px-0'
								onPress={onOpen}
							>
								{group.label}
							</Button>
						))}
					</CardBody>
				</Card>
				<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader>{t('编辑分组')}</ModalHeader>
								<ModalBody>
									<Input placeholder={t('请输入分组名……')} />
								</ModalBody>
								<ModalFooter className='flex flex-col'>
									<Button color='danger' startContent={<DeleteOutline size={24} />}>
										{t('删除分组')}
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</MobileMain>
		</div>
	);
}
