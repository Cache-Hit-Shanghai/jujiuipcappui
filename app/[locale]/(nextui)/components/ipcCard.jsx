'use client';

import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Accordion,
	AccordionItem,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
} from '@nextui-org/react';
import Link, { useJuJiuT } from '@/state/translate';
import {
	EllipsisHorizontalIcon,
	Cog6ToothIcon,
	RectangleGroupIcon,
	QrCodeIcon,
	VideoCameraIcon,
} from '@heroicons/react/24/solid';
import { Webcam } from '@styled-icons/boxicons-regular/Webcam';

export function IpcCard({ label, src, href, bodyChips, footerChips }) {
	const t = useJuJiuT();

	return (
		<Card>
			<CardBody className='relative p-0' as={Link} href={href}>
				<Image src={src} className='z-0' />
				<div className='absolute left-1 top-1'>{...bodyChips}</div>
			</CardBody>
			<CardFooter className='flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<Webcam size={24} />
					{label}
				</div>
				<Dropdown backdrop='blur'>
					<DropdownTrigger>
						<Button isIconOnly variant='light'>
							<EllipsisHorizontalIcon className='h-6 w-6' />
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label='Static Actions'>
						<DropdownItem
							key='records'
							as={Link}
							href='/device/streaming/record/'
							startContent={<VideoCameraIcon className='h-6 w-6' />}
						>
							{t('录像查看')}
						</DropdownItem>
						<DropdownItem
							key='deviceSettings'
							as={Link}
							href='/device/settings'
							startContent={<Cog6ToothIcon className='h-6 w-6' />}
						>
							{t('设备设置')}
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</CardFooter>
		</Card>
	);
}
