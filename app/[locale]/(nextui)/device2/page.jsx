'use client';

import {
	Button,
	Badge,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Divider,
} from '@nextui-org/react';
import { NavTabs, ThemeButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { AppLogo } from '@/jujiu-ui-components/nextui/ipc/about/brand';
import Link, { useJuJiuT } from '@/state/translate';
import {
	EnvelopeIcon,
	PlusCircleIcon,
	SquaresPlusIcon,
	RectangleGroupIcon,
	QrCodeIcon,
} from '@heroicons/react/24/solid';
import { DeviceList, DeviceMenu } from '../components';

export default function Page() {
	return (
		<div className='h-screen flex flex-col'>
			<div className='flex items-center justify-between p-2'>
				<div className='px-2'>
					<AppLogo />
				</div>
				<div className='flex items-centerpx-2'>
					<ThemeButton />
					<Button isIconOnly variant='light' as={Link} href='/message'>
						<Badge content='5' color='primary'>
							<EnvelopeIcon className='h-6 w-6' />
						</Badge>
					</Button>
					<DeviceMenu />
				</div>
			</div>
			<div className='flex flex-1'>
				<DeviceList />
			</div>
			<Divider />
			<NavTabs />
		</div>
	);
}
