'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { ChangeUI } from '@/jujiuuicomponents/application/settings/ui';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>界面设置</Text>
      </Nav>
      <JuJiuMain gap='medium'>
        <ChangeUI />
      </JuJiuMain>
    </Box>
  );
}