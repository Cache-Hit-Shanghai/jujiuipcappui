'use client';

import { Box, Nav, Text, Menu, RadioButtonGroup, Accordion, AccordionPanel } from 'grommet';
import { useState } from 'react';
import {
	Sd,
	Cloud,
	Home,
	Radial,
	Webcam,
	Scan,
	Cycle,
	StatusCritical,
	More,
	CircleInformation,
	ShareRounded,
	Transaction,
	ContactInfo,
	Calendar,
	Robot,
} from 'grommet-icons';
import { SettingsOutline } from '@styled-icons/evaicons-outline/SettingsOutline';
import { VideoRecording } from '@styled-icons/fluentui-system-filled/VideoRecording';
import { IconLink, IconBack, ButtonLink } from '@/jujiu-ui-components/core/core-ui';
import { IpcCardRaw, IpcCardRawRobot } from '@/jujiu-ui-components/ipc/device/avatar';
import { ImageSearch } from '@styled-icons/material-rounded/ImageSearch';
import { JuJiuTagFromShared, JuJiuTagSharing } from '@/jujiu-ui-components/core/core-tag';
import Link, { usePathname, useJuJiuT } from '@/state/translate';

export function toggleFullScreen() {
	if (document.fullscreenElement) {
		screen.orientation.unlock();
		document.exitFullscreen();
	} else {
		document.documentElement.requestFullscreen();
		screen.orientation.lock('landscape');
	}
}

export function DeviceList() {
	const t = useJuJiuT();
	const [activeIndex, setActiveIndex] = useState([0]);

	return (
		<Accordion activeIndex={activeIndex} onActive={(newActiveIndex) => setActiveIndex(newActiveIndex)}>
			<AccordionPanel label={<Text margin='small'>{t('默认分组')}</Text>}>
				<Box gap='medium' margin='small'>
					<IpcCard
						key={0}
						label={
							<Box direction='row' align='center' gap='medium'>
								<Webcam />
								<Text>客厅IPC</Text>
								<JuJiuTagFromShared />
							</Box>
						}
						imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
					/>
					<IpcCardRobot
						key={10}
						online
						cloudStorage='expired'
						onClick={() => toggleFullScreen()}
						label={
							<Box direction='row' align='center' gap='medium'>
								<Robot />
								<Text>PixelBot</Text>
								<JuJiuTagSharing />
							</Box>
						}
						imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
					/>
				</Box>
			</AccordionPanel>
			<AccordionPanel label={<Text margin='small'>办公室</Text>}>
				<Box gap='medium' margin='small'>
					<IpcCard
						key={1}
						label='办3'
						imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.4894a961ab87e3459babae4ef8a2f4fa?rik=1P7ZI7Evnz4Pqg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0830%2fxiaguang2.jpg&ehk=Ok%2fjrv35R0L218oT%2flliRL8DJc52pARVnWU%2bXOpUwq4%3d&risl=&pid=ImgRaw&r=0'
					/>
					<IpcCard
						key={2}
						label='办5'
						imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
					/>
					<IpcCard
						key={3}
						label='办7'
						imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.3edbd350d03c25ed988236c50d0733e6?rik=txi3%2f%2b%2fVYUJofg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0802%2fwmdqfj4.jpg&ehk=TY9%2f90VQn6m3NYCoiPX2UyRYQIT7dkGJtTJli1W7pfo%3d&risl=&pid=ImgRaw&r=0'
					/>
					<IpcCard
						key={4}
						label='办9'
						imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
					/>
				</Box>
			</AccordionPanel>
		</Accordion>
	);
}

export function CloudOrSDCard() {
	return (
		<RadioButtonGroup name='storagetype' direction='row' options={['Cloud', 'SDCard']}>
			{(option, { checked, focus, hover }) => {
				const Icon = option === 'Cloud' ? Cloud : Sd;
				let background;
				if (checked) background = 'brand';
				else if (hover) background = 'light-4';
				else if (focus) background = 'light-4';
				return (
					<Box background={background} round='full' pad='small'>
						<Icon />
					</Box>
				);
			}}
		</RadioButtonGroup>
	);
}

function IpcCardMenuFixedCamera() {
	const t = useJuJiuT();

	return (
		<Menu
			dropProps={{ align: { top: 'bottom', right: 'right' } }}
			icon={<More />}
			items={[
				{
					label: (
						<Link href='/device/streaming/record/' passHref legacyBehavior>
							<Text>{t('录像查看')}</Text>
						</Link>
					),
					icon: <VideoRecording size='24' />,
					gap: 'small',
				},
				{
					label: (
						<Link href='/device/settings' passHref legacyBehavior>
							<Text>{t('设备设置')}</Text>
						</Link>
					),
					icon: (
						<Box margin={{ right: 'small' }}>
							<SettingsOutline size='24' />
						</Box>
					),
				},
				{
					label: (
						<Link href='/device/information' passHref legacyBehavior>
							<Text>{t('设备信息')}</Text>
						</Link>
					),
					icon: (
						<Box margin={{ right: 'small' }}>
							<CircleInformation />
						</Box>
					),
				},
				{
					label: (
						<Link href='/device/sharing' passHref legacyBehavior>
							<Text>{t('设备分享')}</Text>
						</Link>
					),
					icon: (
						<Box margin={{ right: 'small' }}>
							<ShareRounded />
						</Box>
					),
				},
				{
					label: (
						<Link href='/device/transfer' passHref legacyBehavior>
							<Text>{t('设备转移')}</Text>
						</Link>
					),
					icon: (
						<Box margin={{ right: 'small' }}>
							<Transaction />
						</Box>
					),
				},
			]}
		/>
	);
}

function IpcCardMenuRobot() {
	const t = useJuJiuT();
	return (
		<Menu
			dropProps={{ align: { top: 'bottom', right: 'right' } }}
			icon={<More />}
			items={[
				{
					label: (
						<Link href='/device/streaming/record/' passHref legacyBehavior>
							<Text>{t('录像查看')}</Text>
						</Link>
					),
					icon: <VideoRecording size='24' />,
					gap: 'small',
				},
				{
					label: (
						<Link href='/device/settings' passHref legacyBehavior>
							<Text>{t('设备设置')}</Text>
						</Link>
					),
					icon: <SettingsOutline size='24' />,
					gap: 'small',
				},
				{
					label: (
						<Link href='/device/information' passHref legacyBehavior>
							<Text>{t('设备信息')}</Text>
						</Link>
					),
					icon: <CircleInformation />,
					gap: 'small',
				},
				{
					label: (
						<Link href='/device/sharing' passHref legacyBehavior>
							<Text>{t('设备分享')}</Text>
						</Link>
					),
					icon: <ShareRounded />,
					gap: 'small',
				},
				{
					label: (
						<Link href='/device/transfer' passHref legacyBehavior>
							<Text>{t('设备转移')}</Text>
						</Link>
					),
					icon: <Transaction />,
					gap: 'small',
				},
				{
					label: (
						<Link href='/device/contacts' passHref legacyBehavior>
							<Text>{t('通讯录')}</Text>
						</Link>
					),
					icon: <ContactInfo />,
					gap: 'small',
				},
				{
					label: (
						<Link href='/device/calendar' passHref legacyBehavior>
							<Text>{t('日程提醒')}</Text>
						</Link>
					),
					icon: <Calendar />,
					gap: 'small',
				},
			]}
		/>
	);
}

export function IpcCardRobot({ ...props }) {
	return (
		<IpcCardRawRobot nextPageUrl='/device/robot/streaming/fullscreen' {...props}>
			<IpcCardMenuRobot />
		</IpcCardRawRobot>
	);
}

export function IpcCard({ ...props }) {
	return (
		<IpcCardRaw nextPageUrl='/device/streaming' {...props}>
			<IpcCardMenuFixedCamera />
		</IpcCardRaw>
	);
}

export function JujiuNav({ label, onClick }) {
	return (
		<Nav direction='row' align='center'>
			<IconBack onClick={onClick} />
			<Text>{label}</Text>
		</Nav>
	);
}

export function ButtonBackToMain() {
	const t = useJuJiuT();
	return <ButtonLink primary href='/' label={t('回到主页')} />;
}

export function AppFooter({ uiDesign }) {
	const t = useJuJiuT();
	const pathname = usePathname();
	const menuItems = [
		{
			icon: <Home />,
			label: '主页',
			href: '/splash/',
		},
		{
			icon: <Scan />,
			label: '扫一扫',
			href: '/scan/',
		},
		{
			icon: <StatusCritical />,
			label: '错误',
			href: '/errorpage/',
		},
		{
			icon: <Cycle />,
			label: '其它',
			href: '/other/',
		},
	];
	const FooterData = [
		{
			icon: <Webcam />,
			label: t('设备'),
			href: '/',
		},
		{
			icon: <ImageSearch size='24' />,
			label: t('发现'),
			href: '/discovery/',
		},
		{
			icon: <Radial />,
			label: t('我的'),
			href: '/my/',
		},
	];

	return (
		<Box direction='row' background='background-contrast' justify='evenly' flex={false}>
			{FooterData.map((datum) => (
				<Box key={datum.label} background={pathname === datum.href ? 'control' : 'transparent'}>
					<IconLink icon={datum.icon} label={datum.label} href={datum.href} />
				</Box>
			))}
			{uiDesign && (
				<Menu
					label={t('更多')}
					dropProps={{ align: { bottom: 'top', right: 'right' } }}
					items={menuItems.map((i) => ({
						gap: 'small',
						label: (
							<Link href={i.href} passHref legacyBehavior>
								<Text>{t(i.label)}</Text>
							</Link>
						),
						icon: i.icon,
					}))}
				/>
			)}
		</Box>
	);
}
