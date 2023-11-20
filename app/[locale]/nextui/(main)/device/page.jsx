'use client';

import { Button, Badge } from '@nextui-org/react';
import { AppLogo } from '@/jujiu-ui-components/nextui/ipc/about/brand';
import Link from '@/state/translate';
import { ArrowPath } from '@styled-icons/heroicons-outline/ArrowPath';
import { Envelope } from '@styled-icons/heroicons-outline/Envelope';
import { ScanDash } from '@styled-icons/fluentui-system-filled/ScanDash';
import { DeviceList, DeviceMenu } from '../../components';

export default function Page() {
	return (
		<>
			<div className='flex items-center justify-between p-2 bg-transparent'>
				<AppLogo />
				<div className='flex items-center'>
					<Button isIconOnly variant='light' as={Link} href='/nextui/robot/device'>
						<ArrowPath size={24} />
					</Button>
					<Button isIconOnly variant='light' as={Link} href='/message'>
						<Badge content='5' color='primary'>
							<Envelope size={24} />
						</Badge>
					</Button>
					<Button isIconOnly variant='light' as={Link} href='/device/scan'>
						<ScanDash size={24} />
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
