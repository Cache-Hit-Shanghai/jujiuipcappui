'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { JuJiuItem } from '@/jujiuuicomponents/core/core_item';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>人形追踪 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='启用人形追踪'>
					<CheckBox toggle />
				</JuJiuItem>
      </JuJiuMain>
    </Box>
  );
}