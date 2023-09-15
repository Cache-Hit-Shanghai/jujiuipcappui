'use client';

import { Text, Box, Nav, Button } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { AddOrEditContact } from '../AddOrEditContact';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>通讯录添加家人 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <AddOrEditContact isAdd />
      </JuJiuMain>
      <Box pad='medium'>
        <Button primary label='保存' />
      </Box>
    </Box>
  );
}