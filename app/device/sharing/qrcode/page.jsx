'use client';

import { Text, Box, Nav } from 'grommet';
import { Qr, CircleInformation } from 'grommet-icons';
import { IconBack, JuJiuMain } from '../../../../components/Components';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>二维码分享</Text>
      </Nav>
      <JuJiuMain align='center'>
        <Box width='medium' height='medium' background='light-6' align='center' justify='center'>
          <Qr color='plain' size='xlarge' />
        </Box>
        <Box direction='row' gap='small' align='center'>
          <CircleInformation color='brand' />
          <Text size='small'>扫一扫上面的二维码图案，接受分享的设备。</Text>
        </Box>
      </JuJiuMain>
    </Box>
  );
}