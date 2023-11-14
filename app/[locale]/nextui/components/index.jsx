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
import {
	ChipOnline,
	ChipOffline,
	ChipShared,
	ChipFromFriends,
	ChipCloudStorageExpired,
	ChipCloudStorageExpiring,
} from '@/jujiu-ui-components/nextui/core/core-chips';
import Link, { useJuJiuT } from '@/state/translate';
import { PlusCircleIcon, SquaresPlusIcon, RectangleGroupIcon } from '@heroicons/react/24/outline';
import { IpcCard, BotCard } from './ipc-card';

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
			</DropdownMenu>
		</Dropdown>
	);
}

export function DeviceList() {
	const t = useJuJiuT();

	return (
		<Accordion variant='shadow' className='h-fit'>
			<AccordionItem key='1' aria-label={t('默认分组')} title={t('默认分组')}>
				<div className='flex flex-col gap-2'>
					<IpcCard
						label='办公室0'
						src='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
						href='./streaming'
						bodyChips={[<ChipOnline key={0} />, <ChipCloudStorageExpiring key={1} />]}
						footerChips={[<ChipFromFriends />]}
					/>
					<BotCard
						label='PixelBot'
						src='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
						href='/device/robot/streaming/fullscreen'
						bodyChips={[<ChipOffline key={2} />, <ChipCloudStorageExpired key={3} />]}
						footerChips={[<ChipShared />]}
					/>
				</div>
			</AccordionItem>
			<AccordionItem key='2' aria-label='办公室' title='办公室'>
				<div className='flex flex-col gap-2'>
					<IpcCard
						label='办公室1'
						src='https://ts1.cn.mm.bing.net/th/id/R-C.4894a961ab87e3459babae4ef8a2f4fa?rik=1P7ZI7Evnz4Pqg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0830%2fxiaguang2.jpg&ehk=Ok%2fjrv35R0L218oT%2flliRL8DJc52pARVnWU%2bXOpUwq4%3d&risl=&pid=ImgRaw&r=0'
						href='/device/streaming'
						bodyChips={[<ChipOnline key={4} />, <ChipCloudStorageExpiring key={5} />]}
						footerChips={[<ChipFromFriends />]}
					/>
					<IpcCard
						label='办公室2'
						src='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
						href='/device/streaming'
						bodyChips={[<ChipOnline key={6} />, <ChipCloudStorageExpiring key={7} />]}
						footerChips={[<ChipFromFriends />]}
					/>
					<IpcCard
						label='办公室3'
						src='https://ts1.cn.mm.bing.net/th/id/R-C.3edbd350d03c25ed988236c50d0733e6?rik=txi3%2f%2b%2fVYUJofg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0802%2fwmdqfj4.jpg&ehk=TY9%2f90VQn6m3NYCoiPX2UyRYQIT7dkGJtTJli1W7pfo%3d&risl=&pid=ImgRaw&r=0'
						href='/device/streaming'
						bodyChips={[<ChipOnline key={8} />, <ChipCloudStorageExpiring key={9} />]}
						footerChips={[<ChipFromFriends />]}
					/>
					<IpcCard
						label='办公室4'
						src='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
						href='/device/streaming'
						bodyChips={[<ChipOnline key={10} />, <ChipCloudStorageExpiring key={11} />]}
						footerChips={[<ChipFromFriends />]}
					/>
				</div>
			</AccordionItem>
		</Accordion>
	);
}
