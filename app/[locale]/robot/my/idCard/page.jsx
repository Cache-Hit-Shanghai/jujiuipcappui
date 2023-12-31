'use client';

import { useRef } from 'react';
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
import { Remove } from '@styled-icons/material/Remove';
import { AddCircleOutline } from '@styled-icons/material/AddCircleOutline';
import { Confirm } from '@/jujiu-ui-components/nextui/extension/confirm';
import { useJuJiuT } from '@/state/translate';

const dogs = [
	{
		id: 0,
		name: '哈机米',
		gender: 'male',
		birthday: '2023-12-29',
		breed: '缅因',
		src: 'https://images.unsplash.com/photo-1543055484-ac8fe612bf31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 1,
		name: 'Jackson',
		gender: 'female',
		birthday: '2022-02-03',
		breed: '大白熊',
		src: 'https://www.niusnews.com/upload/imgs/default/202203_Jennie/0329bear/S__28123141.jpg',
	},
];

function PetIdCard({ src, name, gender, birthday, breed }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const inputFile = useRef();

	return (
		<Card className='flex-none w-full'>
			<CardBody className='flex flex-row gap-4'>
				<input
					type='file'
					accept='image/*;'
					id='file'
					ref={inputFile}
					className='hidden'
				/>
				<div
					className='relative flex-1 flex flex-col justify-begin'
					onClick={() => inputFile.current.click()}
				>
					<Image src={src} />
					<AddCircleOutline
						size={96}
						className='absolute opacity-40 inset-0 m-auto'
					/>
				</div>
				<div className='flex-1 flex flex-col gap-2'>
					<Input size='sm' label='姓名' value={name} />
					<Select
						size='sm'
						label='性别'
						defaultSelectedKeys={gender ? [gender] : []}
					>
						<SelectItem key='male'>弟弟</SelectItem>
						<SelectItem key='female'>妹妹</SelectItem>
					</Select>
					<Input size='sm' type='date' label='生日' value={birthday} />
					<Input size='sm' label='品种' value={breed} />
					{src && (
						<div className='flex flex-row justify-end'>
							<Button isIconOnly color='danger' onPress={onOpen}>
								<Remove size={24} />
							</Button>
							<Confirm
								message={`您确定要删除${name}的身份证吗？`}
								isOpen={isOpen}
								onClose={onClose}
							/>
						</div>
					)}
				</div>
			</CardBody>
		</Card>
	);
}

export default function Page() {
	const t = useJuJiuT();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('宠物身份证')} />
				<Modal
					hideCloseButton
					isOpen={isOpen}
					placement='center'
					onOpenChange={onOpenChange}
				>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className='flex flex-col gap-1'>
									增加新宠物
								</ModalHeader>
								<ModalBody className='flex flex-row gap-4'>
									<PetIdCard noDelete />
								</ModalBody>
								<ModalFooter>
									<Button color='danger' variant='light' onPress={onClose}>
										{t('关闭')}
									</Button>
									<Button color='primary' onPress={onClose}>
										{t('确定')}
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
				<Button isIconOnly variant='light' onClick={onOpen}>
					<Add size={24} />
				</Button>
			</MobileHeader>
			<MobileMain>
				{dogs.map((dog) => (
					<PetIdCard key={dog.id} {...dog} />
				))}
			</MobileMain>
		</div>
	);
}
