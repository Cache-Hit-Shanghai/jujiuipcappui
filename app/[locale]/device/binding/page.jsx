'use client';

import { Text, Box, Heading, Nav, Form, FormField, TextInput } from 'grommet';
import { Wifi } from 'grommet-icons';
import { ButtonLink, IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { JuJiuInformation } from '@/jujiuuicomponents/core/core_ui';
import { WiFiBinding } from '@/jujiuuicomponents/application/device/binding';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>添加设备</Text>
      </Nav>
      <JuJiuMain align='center'>
        <WiFiBinding />
      </JuJiuMain>
      <Box direction='row' margin='small' justify='end' flex={false}>
        <ButtonLink href='/device/binding/next' label='下一步' />
      </Box>
    </Box>
  );
}