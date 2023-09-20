'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { DeviceInformation } from '@/jujiu-ui-components/application/device/information';

export default function Page() {
	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>设备信息 - 办3</Text>
			</Nav>
			<JuJiuMain>
				<DeviceInformation />
			</JuJiuMain>
		</Box>
	);
}
