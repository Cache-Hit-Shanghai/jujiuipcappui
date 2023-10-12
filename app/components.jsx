'use client';

import { Box, Nav, Text, Menu } from 'grommet';
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
import { IpcCardRaw } from '@/jujiu-ui-components/ipc/device/avatar';
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
				{
					label: (
						<Link href='/device/contacts' passHref legacyBehavior>
							<Text>{t('通讯录')}</Text>
						</Link>
					),
					icon: (
						<Box margin={{ right: 'small' }}>
							<ContactInfo />
						</Box>
					),
				},
				{
					label: (
						<Link href='/device/calendar' passHref legacyBehavior>
							<Text>{t('日程提醒')}</Text>
						</Link>
					),
					icon: (
						<Box margin={{ right: 'small' }}>
							<Calendar />
						</Box>
					),
				},
			]}
		/>
	);
}

const IpcCardMenuMap = new Map([
	['ipc', <IpcCardMenuFixedCamera />],
	['robot', <IpcCardMenuRobot />],
]);

export function IpcCard({ type, ...props }) {
	return (
		<IpcCardRaw nextPageUrl='/device/streaming' {...props}>
			{IpcCardMenuMap.get(type)}
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
	const FooterData = uiDesign
		? [
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
				{
					icon: <Home />,
					label: t('主页'),
					href: '/splash/',
				},
				{
					icon: <Scan />,
					label: t('扫一扫'),
					href: '/scan/',
				},
				{
					icon: <StatusCritical />,
					label: t('错误'),
					href: '/errorpage/',
				},
				{
					icon: <Cycle />,
					label: t('其它'),
					href: '/other/',
				},
		  ]
		: [
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
		</Box>
	);
}
