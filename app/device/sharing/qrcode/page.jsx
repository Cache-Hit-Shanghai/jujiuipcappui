'use client';

import { Grommet, Text, Box, Nav } from 'grommet';
import { Qr } from 'grommet-icons';
import { IconBack } from '../../../../components/Components';


export default function Page() {
  return (
    <Grommet full>
      <Box fill>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>二维码分享</Text>
        </Nav>
        <Box gap='medium' flex={{ grow: 1 }} margin='small' overflow='auto' align='center'>
          <Box width='medium' height='medium' background='active' align='center' justify='center'>
            <Qr color='plain' size='xlarge' />
          </Box>
          <Text size='small'>扫一扫上面的二维码图案，接受分享的设备。</Text>
        </Box>
      </Box>
    </Grommet>
  );
}