'use client';

import { Text, Box, Nav, Button, CheckBox } from 'grommet';
import { User } from 'grommet-icons';
import { IconBack, JuJiuMain } from '@/components/Components';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>取消分享</Text>
      </Nav>
      <JuJiuMain>
        <CheckBox label={<Box direction='row' gap='small'><User /><Text>administrator</Text></Box>} />
      </JuJiuMain>
      <Box margin='small' flex={false}>
        <Button label='完成' />
      </Box>
    </Box>
  );
}