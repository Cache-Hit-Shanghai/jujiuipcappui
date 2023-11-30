'use client';

import { Box } from 'grommet';
import { JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { DeviceInformation } from '@/jujiu-ui-components/ipc/device/information';
import { useJuJiuT } from '@/state/translate';
import { JujiuNav } from '@/app/components';

export default function Page() {
	const t = useJuJiuT();
	return (
		<Box fill>
			<JujiuNav label={t('设备信息') + ' - 办3'} />
			<JuJiuMain>
				<DeviceInformation />
			</JuJiuMain>
		</Box>
	);
}
