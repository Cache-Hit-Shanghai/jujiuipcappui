'use client';

import { Button, Card, CardBody, Divider, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { Check } from '@styled-icons/material/Check';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Toast } from '@/jujiu-ui-components/nextui/extension/toast';
import { Confirm } from '@/jujiu-ui-components/nextui/extension/confirm';

const Page = () => {
	const [isOpenToast, setIsOpenToast] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label='其它(生产环境无此页)' />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='gap-2'>
						<Button size='sm' onPress={() => setIsOpenToast(true)}>
							Toast
						</Button>
						<Divider />
						<Button size='sm' onPress={onOpen}>
							dialog
						</Button>
					</CardBody>
				</Card>
				<Toast
					isOpen={isOpenToast}
					onClose={() => setIsOpenToast(false)}
					message='This operation completes successfully. This toast will close in 5 seconds.'
					startContent={
						<div className='rounded-full bg-success p-1 flex'>
							<Check size={20} />
						</div>
					}
				/>
				<Confirm title='Confirmation' message='Do you want to exit?' isOpen={isOpen} onClose={onClose} />
			</MobileMain>
		</div>
	);
};
export default Page;
