'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '../../../../../components/Components';
import { JuJiuItem } from '../../../../../components/JuJiuItem';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>人形检测 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='启用人形检测'>
					<CheckBox toggle />
				</JuJiuItem>
      </JuJiuMain>
    </Box>
  );
}