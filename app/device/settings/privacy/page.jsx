'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '../../../../components/Components';
import { JuJiuItem, JuJiuItemLink } from '../../../../components/JuJiuItem';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>隐私设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='休眠'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItemLink label='休眠计划' href='/device/settings/privacy/dormantPlan' />
      </JuJiuMain>
    </Box>
  );
}