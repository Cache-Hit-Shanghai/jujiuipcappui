'use client';

import { Text, Box, Nav } from 'grommet';
import { ButtonBackToMain } from '@/jujiuuicomponents/Components';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { DeviceBinding } from '@/jujiuuicomponents/application/device/binding';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>添加设备</Text>
      </Nav>
      <JuJiuMain align='center'>
        <DeviceBinding />
        <Box>
          <ButtonBackToMain />
        </Box>
      </JuJiuMain>
    </Box>
  );
}