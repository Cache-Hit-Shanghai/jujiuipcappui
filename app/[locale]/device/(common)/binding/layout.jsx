'use client';

import { Box } from 'grommet';
import { useJuJiuT } from '@/state/translate';
import { JujiuNav } from '@/app/components';

export default function Layout({ children }) {
	const t = useJuJiuT();
	return (
		<Box fill>
			<JujiuNav label={t('添加设备')} />
			{children}
		</Box>
	);
}
