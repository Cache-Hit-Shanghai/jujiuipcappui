'use client';

import { Button, Card, CardBody, Divider, useDisclosure } from '@nextui-org/react';
import { Check } from '@styled-icons/material/Check';
import { Close } from '@styled-icons/material/Close';
import { Warning } from '@styled-icons/material/Warning';
import { InfoI } from '@/jujiu-ui-components/icons/infoi';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ToastProvider } from '@/jujiu-ui-components/nextui/extension/toast2';
import { Confirm } from '@/jujiu-ui-components/nextui/extension/confirm';

const Page = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label='其它(生产环境无此页)' />
			</MobileHeader>
			<MobileMain>
				<ToastProvider>
					{(state) => (
						<Card>
							<CardBody className='gap-2'>
								<Button
									onPress={() =>
										state.add(
											<div className='flex flex-row items-center gap-2'>
												<div className='rounded-full bg-success p-1 flex'>
													<Check size={20} />
												</div>
												<p>This operation completed successfully. This toast will close in 5 seconds.</p>
											</div>,
											{
												timeout: 5000,
											}
										)
									}
								>
									Toast success
								</Button>
								<Divider />
								<Button
									onPress={() =>
										state.add(
											<div className='flex flex-row items-center gap-2'>
												<div className='rounded-full bg-danger p-1 flex'>
													<Close size={20} />
												</div>
												<p>This operation failed. This toast will close in 5 seconds.</p>
											</div>,
											{
												timeout: 5000,
											}
										)
									}
								>
									Toast error
								</Button>
								<Divider />
								<Button
									onPress={() =>
										state.add(
											<div className='flex flex-row items-center gap-2'>
												<div className='rounded-full bg-warning p-1 flex'>
													<Warning size={20} />
												</div>
												<p>
													This operation completes successfully, but there are some warnings. This toast will
													close in 5 seconds.
												</p>
											</div>,
											{
												timeout: 5000,
											}
										)
									}
								>
									Toast warning
								</Button>
								<Divider />
								<Button
									onPress={() =>
										state.add(
											<div className='flex flex-row items-center gap-2'>
												<div className='rounded-full bg-primary p-1 flex'>
													<InfoI size={20} />
												</div>
												<p>This is a new toast component. This toast will close in 5 seconds.</p>
											</div>,
											{
												timeout: 5000,
											}
										)
									}
								>
									Toast info
								</Button>
							</CardBody>
						</Card>
					)}
				</ToastProvider>
				<Card>
					<CardBody>
						<Button size='sm' onPress={onOpen}>
							dialog
						</Button>
					</CardBody>
				</Card>
				<Confirm title='Confirmation' message='Do you want to exit?' isOpen={isOpen} onClose={onClose} />
			</MobileMain>
		</div>
	);
};
export default Page;
