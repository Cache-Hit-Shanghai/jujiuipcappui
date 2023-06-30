'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, InfoGroup, JuJiuMain } from '../../../components/Components';

const infos = [
  { key: '应用版本', value: '1.0.0.0'},
  { key: '操作系统', value: 'Android 10'},
  { key: 'WebView', value: '114.0.5735.61'},
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>系统信息</Text>
      </Nav>
      <JuJiuMain>
        <InfoGroup data={infos} />
      </JuJiuMain>
    </Box>
  );
}