'use client';

import { Text, Box, Avatar, Nav, Button, Layer, Heading, TextArea } from 'grommet';
import { User, CircleAlert } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, JuJiuMain } from '../../../components/Components';
import { JuJiuItemRawButton, JuJiuItemButton } from '../../../components/JuJiuItem';

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
          <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenAvata(false)} responsive={false}>
            <Box border fill pad='medium' gap='medium'>
              <Heading level={3} alignSelf='center' margin='none'>更换头像</Heading>
              <Button label='拍照' />
              <Button label='本地相册' />
            </Box>
          </Layer>
        )}
        {openName && (
          <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenName(false)} responsive={false}>
            <Box fill border pad='medium' gap='medium'>
              <Heading level={3} alignSelf='center' margin='none'>修改昵称</Heading>
              <TextArea />
              <Box direction='row' gap='small' align='center'>
                <CircleAlert color='status-warning' />
                <Text size='small' color='status-warning'>请设置2-20个字符，不能使用@《等字符。</Text>
              </Box>
              <Button label='保存' primary />
            </Box>
          </Layer>
        )}
      </JuJiuMain>
    </Box>
  );
}