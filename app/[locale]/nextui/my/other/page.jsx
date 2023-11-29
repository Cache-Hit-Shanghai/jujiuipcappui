'use client';

import { Button, Card, CardBody, Divider, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { Check } from '@styled-icons/material/Check';
import { Close } from '@styled-icons/material/Close';
import { Warning } from '@styled-icons/material/Warning';
import { Exclamation } from '@/jujiu-ui-components/icons/exclamation';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Toast } from '@/jujiu-ui-components/nextui/extension/toast';
import { Confirm } from '@/jujiu-ui-components/nextui/extension/confirm';

const Page = () => {
	const [isOpenToastSuccess, setIsOpenToastSuccess] = useState(false);
	const [isOpenToastError, setIsOpenToastError] = useState(false);
	const [isOpenToastWarning, setIsOpenToastWarning] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label='其它(生产环境无此页)' />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='gap-2'>
						<Button size='sm' onPress={() => setIsOpenToastSuccess(true)}>
							Toast success
						</Button>
						<Divider />
						<Button size='sm' onPress={() => setIsOpenToastError(true)}>
							Toast error
						</Button>
						<Divider />
						<Button size='sm' onPress={() => setIsOpenToastWarning(true)}>
							Toast warning
						</Button>
						<Divider />
						<Button size='sm' onPress={onOpen}>
							dialog
						</Button>
					</CardBody>
				</Card>
				<Toast
					isOpen={isOpenToastSuccess}
					onClose={() => setIsOpenToastSuccess(false)}
					message='This operation completed successfully. This toast will close in 5 seconds.'
					startContent={
						<div className='rounded-full bg-success p-1 flex'>
							<Check size={20} />
						</div>
					}
				/>
				<Toast
					isOpen={isOpenToastError}
					onClose={() => setIsOpenToastError(false)}
					message='This operation failed. This toast will close in 5 seconds.'
					startContent={
						<div className='rounded-full bg-danger p-1 flex'>
							<Close size={20} />
						</div>
					}
				/>
				<Toast
					isOpen={isOpenToastWarning}
					onClose={() => setIsOpenToastWarning(false)}
					message='This operation completes successfully, but there are some warnings. This toast will close in 5 seconds.'
					startContent={
						<div className='rounded-full bg-warning p-1 flex'>
							<Exclamation size={20} />
						</div>
					}
				/>
				<Confirm title='Confirmation' message='Do you want to exit?' isOpen={isOpen} onClose={onClose} />
			</MobileMain>
		</div>
	);
};
export default Page;
