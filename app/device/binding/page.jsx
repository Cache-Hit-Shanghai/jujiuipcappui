'use client';

import { Grommet, Text, Box, Heading, Nav, Form, FormField, TextInput } from 'grommet';
import { CircleInformation } from 'grommet-icons';
import { IconBack } from '../../../components/Components';

export default function Page() {
  return (
    <Grommet full>
      <Box fill>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>绑定设备</Text>
        </Nav>
        <Box align='center' gap='medium'>
          <Box width='medium' height='medium' background='background-contrast' align='center' justify='center'>
            <Text>二维码</Text>
          </Box>
          <Box width='medium'>
            <Heading level={3}>WiFi设置</Heading>
            <Form>
              <FormField label='WiFi名称' />
              <FormField label='WiFi密码' name='password' htmlFor='password'>
                <TextInput name='password' id='password' type='password' />
              </FormField>
            </Form>
          </Box>
          <Box direction='row' width='medium' gap='small'>
            <CircleInformation size='large' color='brand' />
            <Text>请输入WiFi名称和密码，并且在听到网络摄像机“绑定设备”的提示音后，将二维码放置在摄像机镜头前约5厘米左右，等待“绑定成功”的提示音。</Text>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}