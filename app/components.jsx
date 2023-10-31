'use client';

import { Box, Nav, Text, Menu, RadioButtonGroup } from 'grommet';
import { useEffect } from 'react';
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
} from 'grommet-icons';
import { SettingsOutline } from '@styled-icons/evaicons-outline/SettingsOutline';
import { VideoRecording } from '@styled-icons/fluentui-system-filled/VideoRecording';
import { IconLink, IconBack, ButtonLink } from '@/jujiu-ui-components/core/core-ui';
import { IpcCardRaw, IpcCardRawRobot } from '@/jujiu-ui-components/ipc/device/avatar';
import { ImageSearch } from '@styled-icons/material-rounded/ImageSearch';
import Link, { usePathname, useJuJiuT } from '@/state/translate';

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

export function JujiuNav({ label }) {
	return (
		<Nav direction='row' align='center'>
			<IconBack />
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
