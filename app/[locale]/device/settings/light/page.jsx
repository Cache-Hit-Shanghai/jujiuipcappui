'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { JuJiuItem } from '@/jujiuuicomponents/core/core_item';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>灯光设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='设备状态灯'>
					<CheckBox toggle />
				</JuJiuItem>
      </JuJiuMain>
    </Box>
  );
}