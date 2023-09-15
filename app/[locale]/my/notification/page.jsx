'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { JuJiuItemLink } from '@/jujiuuicomponents/core/core_item';
import { ChangeNotification } from '@/jujiuuicomponents/application/settings/notification';


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