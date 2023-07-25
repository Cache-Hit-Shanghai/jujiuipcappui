'use client';

import { Text, Box, Heading, Nav, Form, FormField, TextInput } from 'grommet';
import { Wifi } from 'grommet-icons';
import { IconBack, JuJiuMain, ButtonLink } from '../../../components/Components';
import { JuJiuInformation } from '../../../components/JuJiuInformation';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>添加设备</Text>
      </Nav>
      <JuJiuMain align='center'>
        <Box flex={false} fill='horizontal'>
          <Box direction='row' align='center' gap='small' justify='center'>
            <Wifi size='large' />
            <Heading level={2}>WiFi设置</Heading>
          </Box>
          <Form>
            <FormField label='WiFi名称(SSID)' />
            <FormField label='WiFi密码' name='password' htmlFor='password'>
              <TextInput name='password' id='password' type='password' />
            </FormField>
          </Form>
        </Box>
        <JuJiuInformation size='large' label='请输入需要网络摄像机连接的WiFi名称和密码，随后点击“下一步”。' />
      </JuJiuMain>
      <Box direction='row' margin='small' justify='end' flex={false}>
        <ButtonLink href='/device/binding/next' label='下一步' />
      </Box>
    </Box>
  );
}