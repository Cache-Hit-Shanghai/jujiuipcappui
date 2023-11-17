'use client';

import { Text, Box, Nav } from 'grommet';
import { AppMark, AppLogo } from '@/jujiu-ui-components/ipc/about/brand';
import { IconBack, LinkGroup, JuJiuMain, JuJiuCard } from '@/jujiu-ui-components/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('检查更新'), href: '#' },
		{ label: t('服务条款'), href: '#' },
		{ label: t('隐私政策'), href: '#' },
		{ label: t('官网'), href: '#' },
		{ label: t('使用帮助'), href: '#' },
	];

	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>关于</Text>
			</Nav>
			<JuJiuMain gap='medium'>
				<JuJiuCard pad={{ vertical: 'large' }}>
					<AppLogo />
				</JuJiuCard>
				<LinkGroup data={links} />
			</JuJiuMain>
			<AppMark />
		</Box>
	);
}
