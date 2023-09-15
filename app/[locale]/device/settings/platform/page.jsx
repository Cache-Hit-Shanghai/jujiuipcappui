'use client';

import { Text, Box, Nav, Button } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { JuJiuItem } from '@/jujiuuicomponents/core/core_item';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>云台设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='云台位置校准'>
					<Button primary size='small' label='校准' />
				</JuJiuItem>
      </JuJiuMain>
    </Box>
  );
}