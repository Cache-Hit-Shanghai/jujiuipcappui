'use client';

import { Text, Box, Nav } from 'grommet';
import { AppMark, AppLogo } from '@/jujiu-ui-components/ipc/about/brand';
import { IconBack, LinkGroup, JuJiuMain, JuJiuCard } from '@/jujiu-ui-components/core/core-ui';
import { useJuJiuT } from '@/state/translate';

const links = [
	{ label: '检查更新', url: '#' },
	{ label: '服务条款', url: '#' },
	{ label: '隐私政策', url: '#' },
	{ label: '官网', url: '#' },
	{ label: '使用帮助', url: '#' },
];

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('检查更新'), url: '#' },
		{ label: t('服务条款'), url: '#' },
		{ label: t('隐私政策'), url: '#' },
		{ label: t('官网'), url: '#' },
		{ label: t('使用帮助'), url: '#' },
	];

	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>关于</Text>
			</Nav>
			<JuJiuMain gap='medium'>
				<JuJiuCard pad='large'>
					<AppLogo />
				</JuJiuCard>
				<LinkGroup data={links} />
			</JuJiuMain>
			<AppMark />
		</Box>
	);
}
