'use client';

import {
	Card,
	CardBody,
	CardFooter,
	Image,
	Tabs,
	Tab,
} from '@nextui-org/react';
import { useState } from 'react';
import { LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import {
	ChipOnline,
	ChipOffline,
	ChipShared,
	ChipFromFriends,
	ChipCloudStorageExpired,
	ChipCloudStorageExpiring,
} from '@/jujiu-ui-components/nextui/core/core-chips';
import { ChatControl } from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import {
	IpcCard,
	BotCard,
} from '@/jujiu-ui-components/nextui/ipc/ipccard/ipccard';
import Link, { useJuJiuT } from '@/state/translate';
import { BatteryChargingFull } from '@styled-icons/material/BatteryChargingFull';
import { DirectionsWalk } from '@styled-icons/material/DirectionsWalk';
import { AutoFixHigh } from '@styled-icons/material/AutoFixHigh';
import { Settings } from '@styled-icons/material/Settings';
import { Search } from '@styled-icons/material/Search';

export function RobotCard() {
	const t = useJuJiuT();
	const [speaking, setSpeaking] = useState(false);

	return (
		<div>
			<Card>
				<CardBody
					className='p-0'
					as={Link}
					href='./streaming'
					onClick={async () => {
						await document.documentElement.requestFullscreen();
						screen.orientation.lock('landscape');
					}}
				>
					<Image
						src='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
						className='z-0'
					/>
					<div className='absolute left-1 top-1 flex flex-row gap-4'>
						<ChipOnline />
					</div>
					<div className='absolute right-1 top-1 flex flex-row gap-4'>
						<ChipFromFriends />
					</div>
				</CardBody>
				<CardFooter>
					<div className=' w-full grid grid-cols-3 gap-y-4 justify-items-center'>
						<LinkButton icon={<Search size={24} />} label={t('寻宠')} href='' />
						<LinkButton
							icon={<AutoFixHigh size={24} />}
							label={t('逗宠')}
							href=''
						/>
						<LinkButton
							icon={<DirectionsWalk size={24} />}
							label={t('跟随')}
							href=''
						/>
						<ChatControl
							showLabel
							speaking={speaking}
							onPress={() => setSpeaking(!speaking)}
						/>
						<LinkButton
							icon={<BatteryChargingFull size={24} />}
							label={t('回充')}
							href=''
						/>
						<LinkButton
							icon={<Settings size={24} />}
							label={t('设置')}
							href='/device/settings'
						/>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}

function IpcCardOffice0() {
	return (
		<IpcCard
			label='办公室0'
			sources={[
				'https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0',
			]}
			href='../../device/streaming'
			bodyChips={[<ChipOnline key={0} />, <ChipCloudStorageExpiring key={1} />]}
			footerChips={[<ChipFromFriends />]}
		/>
	);
}

export function DeviceList() {
	const t = useJuJiuT();

	return (
		<Tabs variant='underlined'>
			<Tab key={t('默认分组')} title={t('默认分组')}>
				<div className='flex flex-col gap-2'>
					<RobotCard />
					<IpcCard
						label='客厅 - 双目'
						sources={[
							'https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0',
							'https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0',
						]}
						href='../../device/streaming?lens=2'
						bodyChips={[
							<ChipOnline key={0} />,
							<ChipCloudStorageExpiring key={1} />,
						]}
						footerChips={[<ChipFromFriends />]}
					/>
					{Array.from({ length: 10 }, (_, i) => (
						<IpcCardOffice0 key={i} />
					))}
				</div>
			</Tab>
			<Tab key='办公室' title='办公室'>
				<div className='flex flex-col gap-2'>
					<IpcCard
						label='办公室1'
						sources={[
							'https://ts1.cn.mm.bing.net/th/id/R-C.4894a961ab87e3459babae4ef8a2f4fa?rik=1P7ZI7Evnz4Pqg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0830%2fxiaguang2.jpg&ehk=Ok%2fjrv35R0L218oT%2flliRL8DJc52pARVnWU%2bXOpUwq4%3d&risl=&pid=ImgRaw&r=0',
						]}
						href='./streaming'
						bodyChips={[
							<ChipOnline key={4} />,
							<ChipCloudStorageExpiring key={5} />,
						]}
						footerChips={[<ChipFromFriends />]}
					/>
					<IpcCard
						label='办公室2'
						sources={[
							'https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0',
						]}
						href='./streaming'
						bodyChips={[
							<ChipOnline key={6} />,
							<ChipCloudStorageExpiring key={7} />,
						]}
						footerChips={[<ChipFromFriends />]}
					/>
					<IpcCard
						label='办公室3'
						sources={[
							'https://ts1.cn.mm.bing.net/th/id/R-C.3edbd350d03c25ed988236c50d0733e6?rik=txi3%2f%2b%2fVYUJofg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0802%2fwmdqfj4.jpg&ehk=TY9%2f90VQn6m3NYCoiPX2UyRYQIT7dkGJtTJli1W7pfo%3d&risl=&pid=ImgRaw&r=0',
						]}
						href='./streaming'
						bodyChips={[
							<ChipOnline key={8} />,
							<ChipCloudStorageExpiring key={9} />,
						]}
						footerChips={[<ChipFromFriends />]}
					/>
					<IpcCard
						label='办公室4'
						sources={[
							'https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0',
						]}
						href='./streaming'
						bodyChips={[
							<ChipOnline key={10} />,
							<ChipCloudStorageExpiring key={11} />,
						]}
						footerChips={[<ChipFromFriends />]}
					/>
				</div>
			</Tab>
			<Tab key='家' title='家' />
			<Tab key='废弃' title='废弃' />
			<Tab key='废弃1' title='废弃1' />
			<Tab key='废弃2' title='废弃2' />
			<Tab key='废弃3' title='废弃3' />
			<Tab key='废弃4' title='废弃4' />
			<Tab key='废弃5' title='废弃5' />
		</Tabs>
	);
}
