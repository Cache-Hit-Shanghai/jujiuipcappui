'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '../../../../components/Components';
import { JuJiuItemLink } from '../../../../components/JuJiuItem';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>智能检测 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItemLink label='人脸识别' href='/device/settings/ai/face' />
				<JuJiuItemLink label='人形检测' href='/device/settings/ai/body' />
				{/* <JuJiuItemLink label='区域看护' href='/device/settings/ai/zone' />
				<JuJiuItemLink label='时光相册' href='/device/settings/ai/time' /> */}
      </JuJiuMain>
    </Box>
  );
}