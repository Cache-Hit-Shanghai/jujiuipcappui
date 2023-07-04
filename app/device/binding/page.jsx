'use client';

import { Text, Box, Heading, Nav, Form, FormField, TextInput } from 'grommet';
import { CircleInformation, Wifi, Qr } from 'grommet-icons';
import { IconBack, JuJiuMain } from '../../../components/Components';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>绑定设备</Text>
      </Nav>
      <JuJiuMain align='center'>
        <Box width='medium' height='medium' background='background-contrast' align='center' justify='center' flex={false}>
          <Qr color='plain' size='xlarge' />
        </Box>
        <Box width='medium' flex={false}>
          <Box direction='row' align='center' gap='small'>
            <Wifi size='large' />
            <Heading level={2} margin='none'>WiFi设置</Heading>
          </Box>
          <Form>
            <FormField label='WiFi名称' />
            <FormField label='WiFi密码' name='password' htmlFor='password'>
              <TextInput name='password' id='password' type='password' />
            </FormField>
          </Form>
        </Box>
        <Box direction='row' width='medium' gap='small' align='center' flex={false}>
          <CircleInformation size='large' color='brand' />
          <Text size='small'>请输入需要网络摄像机设备连接的WiFi名称和密码，并且在听到网络摄像机“绑定设备”的提示音后，将二维码放置在摄像机镜头前约5厘米左右，等待“绑定成功”的提示音。</Text>
        </Box>
      </JuJiuMain>
    </Box>
  );
}