'use client';

import { Button, Badge, Divider } from '@nextui-org/react';
import { NavTabs, ThemeButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { AppLogo } from '@/jujiu-ui-components/nextui/ipc/about/brand';
import Link from '@/state/translate';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { ScanDash } from '@styled-icons/fluentui-system-filled/ScanDash';
import { DeviceList, DeviceMenu } from '../components';

export default function Page() {
	return (
		<div className='h-screen flex flex-col'>
			<div className='p-2 flex items-center justify-between'>
				<AppLogo />
				<div className='flex items-center'>
					<ThemeButton />
					<Button isIconOnly variant='light' as={Link} href='/message'>
						<Badge content='5' color='primary'>
							<EnvelopeIcon className='h-6 w-6' />
						</Badge>
					</Button>
					<Button isIconOnly variant='light' as={Link} href='/device/scan'>
						<ScanDash size={24} />
					</Button>
					<DeviceMenu />
				</div>
			</div>
			<div className='px-4 flex flex-1 overflow-auto'>
				<DeviceList />
			</div>
			<NavTabs />
		</div>
	);
}
