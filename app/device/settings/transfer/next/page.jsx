'use client';

import { Text, Box, Nav } from 'grommet';
import { Qr } from 'grommet-icons';
import { IconBack, JuJiuMain, ButtonBackToMain } from '../../../../../components/Components';
import { JuJiuInformation } from '../../../../../components/JuJiuInformation';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>设备转移 - 办3</Text>
      </Nav>
      <JuJiuMain align='center'>
        <Box fill='horizontal' height='medium' background='light-6' align='center' justify='center' flex={false}>
          <Qr color='plain' size='xlarge' />
        </Box>
        <JuJiuInformation label='使用云探App扫一扫上面的二维码图案，接受转移的设备。' />
        <ButtonBackToMain />
      </JuJiuMain>
    </Box>
  );
}