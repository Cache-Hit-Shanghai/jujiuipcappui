'use client';

import { Text, Box, Nav, Button } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/new/core_ui';
import { AddOrEditContact } from '../AddOrEditContact';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>通讯录编辑家人 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <AddOrEditContact />
      </JuJiuMain>
      <Box pad='medium'>
        <Button primary label='保存' />
      </Box>
    </Box>
  );
}