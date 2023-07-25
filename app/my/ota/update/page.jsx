'use client';

import { Text, Box, Nav, Meter, Heading } from 'grommet';
import { CircleInformation } from 'grommet-icons';
import { IconBack, JuJiuMain, ButtonBackToMain } from '../../../../components/Components';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>固件升级</Text>
      </Nav>
      <JuJiuMain>
        <Heading margin='none' level={2}>固件升级中……</Heading>
        <Box direction='row' gap='small' align='center'>
          <CircleInformation color='status-warning' />
          <Text size='small' color='status-warning'>
            摄像机办3正在固件升级中。请保持摄像机的电源开启。摄像机突然断电有可能导致设备无法启动。
          </Text>
        </Box>
        <Meter round values={[{ value: 50 }]} />
        <Box align='center' gap='medium'>
          <Text>固件升级成功！设备正在重启中，请耐心等待。设备重启后即可正常使用。</Text>
          <Box direction='row'>
            <ButtonBackToMain />
          </Box>
        </Box>
      </JuJiuMain>
    </Box>
  );
}