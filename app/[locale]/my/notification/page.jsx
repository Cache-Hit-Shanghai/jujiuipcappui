'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { JuJiuItemLink } from '@/jujiu-ui-components/core/core-item';
import { ChangeNotification } from '@/jujiu-ui-components/application/settings/notification';

export default function Page() {
	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>消息通知设置 - 办3</Text>
			</Nav>
			<JuJiuMain>
				<ChangeNotification />
				<JuJiuItemLink label='AI报警事件类型' href='/my/notification/type' />
			</JuJiuMain>
		</Box>
	);
}
