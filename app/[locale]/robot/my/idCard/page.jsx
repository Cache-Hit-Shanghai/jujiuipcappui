'use client';

import {
	Button,
	Image,
	Card,
	CardBody,
	Input,
	Select,
	SelectItem,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react';
import {
	NavbarBack,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { Add } from '@styled-icons/material/Add';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	console.log(isOpen);

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('宠物身份证')} />
				<Button isIconOnly variant='light' onPress={onOpen}>
					<Add size={24} />
				</Button>
			</MobileHeader>
			<MobileMain>
				<Card className='flex-none w-full'>
					<CardBody className='flex flex-row gap-4'>
						<div className='flex-1 flex flex-col justify-center'>
							<Image src='https://images.unsplash.com/photo-1543055484-ac8fe612bf31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						</div>
						<div className='flex-1 flex flex-col gap-2'>
							<Input size='sm' label='姓名' value='哈机米' />
							<Select size='sm' label='性别' defaultSelectedKeys={['mail']}>
								<SelectItem key='mail'>弟弟</SelectItem>
								<SelectItem key='femail'>妹妹</SelectItem>
							</Select>
							<Input size='sm' type='date' label='生日' />
							<Input size='sm' label='品种' value='缅因' />
						</div>
					</CardBody>
				</Card>
				<Card className='flex-none w-full'>
					<CardBody className='flex flex-row gap-4'>
						<div className='flex-1 flex flex-col justify-center'>
							<Image src='https://www.niusnews.com/upload/imgs/default/202203_Jennie/0329bear/S__28123141.jpg' />
						</div>
						<div className='flex-1 flex flex-col gap-2'>
							<Input size='sm' label='姓名' value='Jacson' />
							<Select size='sm' label='性别' defaultSelectedKeys={['femail']}>
								<SelectItem key='mail'>弟弟</SelectItem>
								<SelectItem key='femail'>妹妹</SelectItem>
							</Select>
							<Input size='sm' type='date' label='生日' />
							<Input size='sm' label='品种' value='大白熊' />
						</div>
					</CardBody>
				</Card>
			</MobileMain>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								增加新宠物
							</ModalHeader>
							<ModalBody></ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									Close
								</Button>
								<Button color='primary' onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
