'use client';

import { Button, Badge } from '@nextui-org/react';
import { MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link from '@/state/translate';
import { MailOutline } from '@styled-icons/material/MailOutline';
import { QrCodeScanner } from '@styled-icons/material/QrCodeScanner';
import { Cached } from '@styled-icons/material/Cached';
import { DeviceList, DeviceMenu } from '../../components';

export default function Page() {
	return (
		<>
			<MobileHeader className='justify-end'>
				<div className='flex items-center'>
					<Button isIconOnly variant='light' as={Link} href='/nextui/robot/device'>
						<Cached size={24} />
					</Button>
					<Button isIconOnly variant='light' as={Link} href='./message'>
						<Badge content='5' color='primary'>
							<MailOutline size={24} />
						</Badge>
					</Button>
					<Button isIconOnly variant='light' as={Link} href='./scan'>
						<QrCodeScanner size={24} />
					</Button>
					<DeviceMenu />
				</div>
			</MobileHeader>
			<MobileMain className='gap-0'>
				<DeviceList />
			</MobileMain>
		</>
	);
}
