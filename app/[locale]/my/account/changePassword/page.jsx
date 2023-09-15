'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { ChangePassword } from '@/jujiuuicomponents/application/settings/account';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>修改密码</Text>
      </Nav>
      <JuJiuMain>
        <ChangePassword />
      </JuJiuMain>
    </Box>
  );
}