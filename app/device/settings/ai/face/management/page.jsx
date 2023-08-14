'use client';

import { Text, Box, Nav, CheckBox, Heading } from 'grommet';
import { IconBack, JuJiuMain } from '../../../../../../components/Components';
import { JuJiuItem, JuJiuItemLink } from '../../../../../../components/JuJiuItem';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>人脸管理 - 办3</Text>
      </Nav>
      <JuJiuMain>
      </JuJiuMain>
    </Box>
  );
}