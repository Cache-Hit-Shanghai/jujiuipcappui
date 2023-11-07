'use client';

import { Box } from 'grommet';
import { ButtonBackToMain } from '@/app/components';
import { JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { DeviceBinding } from '@/jujiu-ui-components/ipc/device/binding';

export default function Page() {
	return (
		<>
			<JuJiuMain align='center'>
				<DeviceBinding />
				<Box>
					<ButtonBackToMain />
				</Box>
			</JuJiuMain>
		</>
	);
}
