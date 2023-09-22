'use client';

import { Box } from 'grommet';
import { Home, Radial, Webcam, Scan, Cycle, StatusCritical } from 'grommet-icons';
import { IconLink } from '@/jujiu-ui-components/core/core-ui';
import { usePathname } from '@/state/translate';

export function AppFooter({ uiDesign }) {
	const pathname = usePathname();
	const FooterData = uiDesign
		? [
				{
					icon: <Webcam />,
					label: '设备',
					href: '/',
				},
				{
					icon: <Radial />,
					label: '我的',
					href: '/my/',
				},
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
					label: '错误页',
					href: '/errorpage/',
				},
				{
					icon: <Cycle />,
					label: '其它页',
					href: '/other/',
				},
		  ]
		: [
				{
					icon: <Webcam />,
					label: '设备',
					href: '/',
				},
				{
					icon: <Radial />,
					label: '我的',
					href: '/my/',
				},
		  ];
	return (
		<Box direction='row' background='background-contrast' justify='evenly' flex={false}>
			{FooterData.map((datum) => (
				<Box background={pathname === datum.href ? 'brand' : 'transparent'}>
					<IconLink icon={datum.icon} label={datum.label} href={datum.href} />
				</Box>
			))}
		</Box>
	);
}
