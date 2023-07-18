'use client';

import { Text, Box, Nav, Markdown, Button, TextInput } from 'grommet';
import { Qr, CircleInformation } from 'grommet-icons';
import { IconBack, JuJiuMain } from '../../../../../components/Components';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>设备转让 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <Box fill='horizontal' height='medium' background='light-6' align='center' justify='center' flex={false}>
          <Qr color='plain' size='xlarge' />
        </Box>
        <Box direction='row' align='center' gap='small' justify='center'>
          <CircleInformation color='brand' />
          <Text size='small' color='text-xweak'>扫一扫上面的二维码图案，接受转移的设备。</Text>
        </Box>
      </JuJiuMain>
    </Box>
  );
}