'use client';

import { Text, Box, Nav } from 'grommet';
import { ButtonBackToMain } from '@/app/components';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { DeviceBinding } from '@/jujiu-ui-components/ipc/device/binding';

export default function Page() {
	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>添加设备</Text>
			</Nav>
			<JuJiuMain align='center'>
				<DeviceBinding />
				<Box>
					<ButtonBackToMain />
				</Box>
			</JuJiuMain>
		</Box>
	);
}
