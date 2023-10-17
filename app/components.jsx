'use client';

import { Box, Nav, Text, Menu, Button } from 'grommet';
import {
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
import { IconLink, IconBack, ButtonLink } from '@/jujiu-ui-components/core/core-ui';
import { IpcCardRaw, IpcCardRawRobot } from '@/jujiu-ui-components/ipc/device/avatar';
import { BatteryCharging } from '@styled-icons/ionicons-outline/BatteryCharging';
import { Cameraswitch } from '@styled-icons/material/Cameraswitch';
import { ChargingStation } from '@styled-icons/fa-solid/ChargingStation';
import Link, { usePathname, useJuJiuT } from '@/state/translate';

function IpcCardMenuFixedCamera() {
	const t = useJuJiuT();

	return (
		<Menu
			dropProps={{ align: { top: 'bottom', right: 'right' } }}
			icon={<More />}
			items={[
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

export function JujiuNavRobot({ label }) {
	return (
		<Nav direction='row' align='center' justify='between'>
			<Box direction='row' align='center' gap='small'>
				<IconBack />
				<Text>{label}</Text>
				<BatteryCharging size='24' />
			</Box>
			<Box direction='row' align='center' gap='small'>
				<Button icon={<ChargingStation size='24' />} />
				<Button icon={<Cameraswitch size='24' />} />
			</Box>
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
