'use client';

import { Button, Badge } from '@nextui-org/react';
import { AppLogo } from '@/jujiu-ui-components/nextui/ipc/about/brand';
import Link from '@/state/translate';
import { MailOutline } from '@styled-icons/material/MailOutline';
import { QrCodeScanner } from '@styled-icons/material/QrCodeScanner';
import { Cached } from '@styled-icons/material/Cached';
import { DeviceList, DeviceMenu } from '../../components';

export default function Page() {
	return (
		<>
			<div className='flex items-center justify-between p-2 bg-transparent'>
				<AppLogo />
				<div className='flex items-center'>
					<Button isIconOnly variant='light' as={Link} href='/nextui/robot/device'>
						<Cached size={24} />
					</Button>
					<Button isIconOnly variant='light' as={Link} href='/message'>
						<Badge content='5' color='primary'>
							<MailOutline size={24} />
						</Badge>
					</Button>
					<Button isIconOnly variant='light' as={Link} href='./scan'>
						<QrCodeScanner size={24} />
					</Button>
					<DeviceMenu />
				</div>
			</div>
			<div className='px-4 py-1 flex flex-1 overflow-auto'>
				<DeviceList />
			</div>
		</>
	);
}
