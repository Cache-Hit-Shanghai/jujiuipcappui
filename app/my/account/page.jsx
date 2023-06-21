'use client';

import { Grommet, Text, Box, Avatar, Nav, Card, Button, CardBody, Main, Layer, Heading, TextArea } from 'grommet';
import { User, Alert } from 'grommet-icons';
import { useState } from 'react';
import { IconBack } from '../../../components/Components';

export default function Page() {
  const [ openAvata, setOpenAvata ] = useState(false);
  const [ openName, setOpenName ] = useState(false);
  return (
    <Grommet full>
      <Box fill gap='medium'>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>账号设置</Text>
        </Nav>
        <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small' margin={{ horizontal: 'small' }}>
          <Card pad='small' gap='small' background='active' flex={false} onClick={() => setOpenAvata(!openAvata)}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>头像</Text>
                <Avatar background='active'>
                  <User />
                </Avatar>
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false} onClick={() => setOpenName(!openName)}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>昵称</Text>
                <Text>用户12345</Text>
              </Box>
            </CardBody>
          </Card>
          <Button label='退出登录' color='status-warning' />
          <Button label='注销账号' color='status-critical' />
          {openAvata && (
            <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenAvata(false)} responsive={false}>
              <Box fill pad='medium'>
                <Heading level={3} alignSelf='center'>更换头像</Heading>
                <Box gap='small'>
                  <Button label='拍照' />
                  <Button label='本地相册' />
                  <Button label='取消' onClick={() => setOpenAvata(false)} />
                </Box>
              </Box>
            </Layer>
          )}
          {openName && (
            <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenName(false)} responsive={false}>
              <Box fill pad='medium'>
                <Heading level={3} alignSelf='center'>修改昵称</Heading>
                <Box gap='small'>
                  <TextArea />
                  <Box direction='row' gap='small' align='center'>
                    <Alert size='small' />
                    <Text size='small'>请设置2-20个字符，不能使用@《等字符。</Text>
                  </Box>
                  <Box direction='row' justify='evenly'>
                    <Button label='取消' onClick={() => setOpenName(false)} />
                    <Button label='保存' primary />
                  </Box>
                </Box>
              </Box>
            </Layer>
          )}
        </Main>
      </Box>
    </Grommet>
  );
}