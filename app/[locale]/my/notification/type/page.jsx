'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { ChangeAIAlarm } from '@/jujiu-ui-components/application/settings/notification';

export default function Page() {
	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>报警事件类型设置 - 办3</Text>
			</Nav>
			<JuJiuMain>
				<ChangeAIAlarm />
			</JuJiuMain>
		</Box>
	);
}
