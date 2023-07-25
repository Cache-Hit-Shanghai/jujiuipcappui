'use client';

import { Text, Box, Nav } from 'grommet';
import { Qr } from 'grommet-icons';
import { IconBack, JuJiuMain, ButtonBackToMain } from '../../../../components/Components';
import { JuJiuInformation } from '../../../../components/JuJiuInformation';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>添加设备</Text>
      </Nav>
      <JuJiuMain align='center'>
        <Box fill='horizontal' height='medium' background='light-6' align='center' justify='center' flex={false}>
          <Qr color='plain' size='xlarge' />
        </Box>
        <JuJiuInformation size='large' label='请在听到网络摄像机“绑定设备”的提示音后，将该二维码放置在摄像机镜头前约5厘米左右，等待“绑定成功”的提示音。' />
        <Box>
          <ButtonBackToMain />
        </Box>
      </JuJiuMain>
    </Box>
  );
}