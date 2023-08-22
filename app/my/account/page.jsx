'use client';

import { Text, Box, Avatar, Nav, Button, Heading, TextInput } from 'grommet';
import { User } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/Components';
import { JuJiuItemRawButton, JuJiuItemButton } from '@/jujiuuicomponents/new/core_item';
import { JuJiuLayer } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuInformation } from '@/jujiuuicomponents/new/core_ui';

export default function Page() {
  const [ openAvata, setOpenAvata ] = useState(false);
  const [ openName, setOpenName ] = useState(false);
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>账号设置</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItemRawButton label='头像' onClick={() => setOpenAvata(!openAvata)}>
          <Avatar background='background'>
            <User color='text-xweak' />
          </Avatar>
        </JuJiuItemRawButton>
				<JuJiuItemButton label='昵称' value='用户12345' onClick={() => setOpenName(!openName)} />
        <Button label='退出登录' color='status-warning' />
        <Button label='注销账号' color='status-critical' />
        {openAvata && (
          <JuJiuLayer onClickOutside={() => setOpenAvata(false)}>
            <Heading level={3} alignSelf='center' margin='none'>更换头像</Heading>
            <Button label='拍照' />
            <Button label='本地相册' />
          </JuJiuLayer>
        )}
        {openName && (
          <JuJiuLayer onClickOutside={() => setOpenName(false)}>
            <Heading level={3} alignSelf='center' margin='none'>修改昵称</Heading>
            <TextInput placeholder='请填写昵称……' />
            <JuJiuInformation label='请设置2-20个字符，不能使用@《等字符。' />
            <Button label='保存' primary />
          </JuJiuLayer>
        )}
      </JuJiuMain>
    </Box>
  );
}