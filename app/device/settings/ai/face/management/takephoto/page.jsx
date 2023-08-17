'use client';

import { Text, Box, Nav, Button, Grid, Heading, TextInput } from 'grommet';
import { IconBack, JuJiuMain } from '@/components/Components';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>录入人脸 - 办3</Text>
      </Nav>
      <JuJiuMain align='center'>
        <Heading level={2}>请面向屏幕</Heading>
        <Box width='small' height='small' round='full' background='white' />
      </JuJiuMain>
    </Box>
  );
}