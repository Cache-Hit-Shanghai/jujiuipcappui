'use client';

import { Text, Box, Nav } from 'grommet';
import { Qr } from 'grommet-icons';
import { ButtonBackToMain } from '@/jujiuuicomponents/Components';
import { JuJiuInformation, IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';

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
        <JuJiuInformation size='large' label='请在听到网络摄像机“绑定设备”的提示音后，将该二维码放置在摄像机镜头前约30厘米左右，等待设备“配置成功”的提示音。' />
        <Box>
          <ButtonBackToMain />
        </Box>
      </JuJiuMain>
    </Box>
  );
}