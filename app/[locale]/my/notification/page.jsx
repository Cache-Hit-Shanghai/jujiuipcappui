'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuItem, JuJiuItemLink } from '@/jujiuuicomponents/new/core_item';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>消息通知设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='设备访问'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='设备状态'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='设备异常'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='设备分享'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='服务提醒'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='公告'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItemLink label='AI报警事件类型' href='/my/notification/type' />
      </JuJiuMain>
    </Box>
  );
}