'use client';

import { Text, Box, Nav, Button, TextInput } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>修改密码</Text>
      </Nav>
      <JuJiuMain>
        <Text>输入旧密码：</Text>
        <TextInput type='password' />
        <Text>输入新密码：</Text>
        <TextInput type='password' />
        <Text>再次输入新密码：</Text>
        <TextInput type='password' />
        <Button primary label='确定' />
      </JuJiuMain>
    </Box>
  );
}