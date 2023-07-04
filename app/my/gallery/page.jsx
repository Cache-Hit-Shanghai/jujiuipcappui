'use client';

import { Text, Box, Nav, Grid } from 'grommet';
import { IconBack, JuJiuMain } from '../../../components/Components';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>相册（剩余容量100GB）</Text>
      </Nav>
      <JuJiuMain>
        <Box flex={{ grow: 1, shrink: 1 }} overflow='auto'>
          <Grid fill columns='xsmall' gap='small' align='center' justify='center' style={{ gridAutoFlow: 'row dense', gridAutoRows: '70px' }}>
            {Array.from({ length: 37 }, (_, index) => index).map(item => <Box key={item} fill background='url(https://v2.grommet.io/assets/IMG_4245.jpg)' round='xsmall' />)}
          </Grid>
        </Box>
      </JuJiuMain>
    </Box>
  );
}