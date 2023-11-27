'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { Check } from '@styled-icons/material/Check';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Toast } from '@/jujiu-ui-components/nextui/extension/toast';

const Page = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label='其它(生产环境无此页)' />
			</MobileHeader>
			<MobileMain>
				<Button onPress={() => setIsOpen(true)}>Toast</Button>
				<Toast
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					message='This operation completes successfully. This toast will close in 5 seconds.'
					startContent={
						<div className='rounded-full bg-success p-1'>
							<Check size={20} />
						</div>
					}
				/>
			</MobileMain>
		</div>
	);
};
export default Page;
