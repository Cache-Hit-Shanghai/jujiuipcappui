'use client';

import { Text, Box, Heading, Nav, Form, FormField, TextInput, Button } from 'grommet';
import { CircleInformation, Wifi } from 'grommet-icons';
import Link from 'next/link';
import { IconBack, JuJiuMain } from '../../../components/Components';

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
            <Heading level={2} margin='none'>WiFi设置</Heading>
          </Box>
          <Form>
            <FormField label='WiFi名称(SSID)' />
            <FormField label='WiFi密码' name='password' htmlFor='password'>
              <TextInput name='password' id='password' type='password' />
            </FormField>
          </Form>
          <Box direction='row' justify='end'>
            <Link href='/device/binding/next' passHref legacyBehavior>
              <Button as='a' label='下一步' />
            </Link>
          </Box>
        </Box>
        <Box direction='row' gap='small' align='center' flex={false} margin={{ horizontal: 'small' }}>
          <CircleInformation size='large' color='brand' />
          <Text size='small' textAlign='justify'>请输入需要网络摄像机连接的WiFi名称和密码，随后点击“下一步”。</Text>
        </Box>
      </JuJiuMain>
    </Box>
  );
}