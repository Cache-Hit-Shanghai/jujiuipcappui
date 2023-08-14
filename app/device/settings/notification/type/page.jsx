'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '../../../../../components/Components';
import { JuJiuItem } from '../../../../../components/JuJiuItem';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>报警事件类型设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='画面有人移动'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='画面人脸识别结果'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='看护区域有人移动'>
					<CheckBox toggle />
				</JuJiuItem>
      </JuJiuMain>
    </Box>
  );
}