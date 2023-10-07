'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack } from '@/jujiu-ui-components/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Layout({ children }) {
	const t = useJuJiuT();
	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>{t('添加设备')}</Text>
			</Nav>
			{children}
		</Box>
	);
}
