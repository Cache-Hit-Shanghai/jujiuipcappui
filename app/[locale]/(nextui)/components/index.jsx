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
import { ChipOnline } from '@/jujiu-ui-components/nextui/core/core-chips';
import Link, { useJuJiuT } from '@/state/translate';
import { PlusCircleIcon, SquaresPlusIcon, RectangleGroupIcon, QrCodeIcon } from '@heroicons/react/24/solid';
import { IpcCard } from './ipcCard';

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
	const t = useJuJiuT();
	const defaultContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

	return (
		<Accordion>
			<AccordionItem key='1' aria-label='Accordion 1' title={t('默认分组')}>
				<IpcCard
					label='办公室3'
					src='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
					href='/device/streaming'
					bodyChips={[<ChipOnline />]}
				/>
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
