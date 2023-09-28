'use client';

import { Box } from 'grommet';
import { Home, Radial, Webcam, Scan, Cycle, StatusCritical } from 'grommet-icons';
import { IconLink } from '@/jujiu-ui-components/core/core-ui';
import { usePathname, useJuJiuT } from '@/state/translate';

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
