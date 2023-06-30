'use client';

import { Text, Box, Avatar, Nav, Button, CardBody, Layer, Heading, TextArea } from 'grommet';
import { User, CircleAlert } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, JuJiuMain, JuJiuCard } from '../../../components/Components';

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
        <JuJiuCard onClick={() => setOpenAvata(!openAvata)}>
          <CardBody>
            <Box direction='row' align='center' justify='between'>
              <Text>头像</Text>
              <Avatar background='background-contrast'>
                <User />
              </Avatar>
            </Box>
          </CardBody>
        </JuJiuCard>
        <JuJiuCard onClick={() => setOpenName(!openName)}>
          <CardBody>
            <Box direction='row' align='center' justify='between'>
              <Text>昵称</Text>
              <Text>用户12345</Text>
            </Box>
          </CardBody>
        </JuJiuCard>
        <Button label='退出登录' color='status-warning' />
        <Button label='注销账号' color='status-critical' />
        {openAvata && (
          <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenAvata(false)} responsive={false}>
            <Box border fill pad='medium' gap='medium'>
              <Heading level={3} alignSelf='center' margin='none'>更换头像</Heading>
              <Button label='拍照' />
              <Button label='本地相册' />
              <Button label='取消' onClick={() => setOpenAvata(false)} />
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
              <Box direction='row' justify='evenly'>
                <Button label='取消' onClick={() => setOpenName(false)} />
                <Button label='保存' primary />
              </Box>
            </Box>
          </Layer>
        )}
      </JuJiuMain>
    </Box>
  );
}