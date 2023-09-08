'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuItem } from '@/jujiuuicomponents/new/core_item';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>画面设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='视频水印(OSD)'>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label='画面翻转'>
					<CheckBox toggle />
				</JuJiuItem>
      </JuJiuMain>
    </Box>
  );
}