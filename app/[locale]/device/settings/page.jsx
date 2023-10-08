'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { DeviceSettings } from '@/jujiu-ui-components/ipc/device/settings';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>{t('设备设置')} - 办3</Text>
			</Nav>
			<JuJiuMain>
				<DeviceSettings />
			</JuJiuMain>
		</Box>
	);
}
