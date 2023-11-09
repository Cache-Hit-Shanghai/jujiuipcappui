'use client';

import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Accordion,
	AccordionItem,
} from '@nextui-org/react';
import Link, { useJuJiuT } from '@/state/translate';
import { PlusCircleIcon, SquaresPlusIcon, RectangleGroupIcon, QrCodeIcon } from '@heroicons/react/24/solid';

export function DeviceMenu() {
	const t = useJuJiuT();

	return (
		<Dropdown backdrop='blur'>
			<DropdownTrigger>
				<Button isIconOnly variant='light'>
					<PlusCircleIcon className='h-6 w-6' />
				</Button>
			</DropdownTrigger>
			<DropdownMenu aria-label='Static Actions'>
				<DropdownItem
					key='addDevice'
					as={Link}
					href='/device/binding'
					startContent={<SquaresPlusIcon className='h-6 w-6' />}
				>
					{t('添加设备')}
				</DropdownItem>
				<DropdownItem
					key='deviceGroup'
					as={Link}
					href='/device/group'
					startContent={<RectangleGroupIcon className='h-6 w-6' />}
				>
					{t('设备分组')}
				</DropdownItem>
				<DropdownItem
					key='scan'
					as={Link}
					href='/device/scan'
					startContent={<QrCodeIcon className='h-6 w-6' />}
				>
					{t('扫一扫')}
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}

export function DeviceList() {
	const defaultContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

	return (
		<Accordion>
			<AccordionItem key='1' aria-label='Accordion 1' title='Accordion 1'>
				{defaultContent}
			</AccordionItem>
			<AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
				{defaultContent}
			</AccordionItem>
			<AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'>
				{defaultContent}
			</AccordionItem>
		</Accordion>
	);
}
