'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/Components';
import { JuJiuItem, JuJiuItemLink } from '@/jujiuuicomponents/JuJiuItem';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>消息通知设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='设备离线通知'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='报警消息通知'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItemLink label='报警事件类型' href='/device/settings/notification/type' />
      </JuJiuMain>
    </Box>
  );
}