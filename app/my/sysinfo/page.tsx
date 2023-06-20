'use client';

import { Grommet, Text, Box, Footer, Nav, Card, CardBody, CardFooter, Main } from 'grommet';
import { IconBack, InfoGroup } from '../../../components/Components';

const infos = [
  { key: '应用版本', value: '1.0.0.0'},
  { key: '操作系统', value: 'Android 10'},
  { key: 'WebView', value: '114.0.5735.61'},
];

export default function Page() {
  return (
    <Grommet full>
      <Box fill>
        <Nav>
          <IconBack />
        </Nav>
        <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small'>
          <InfoGroup data={infos} />
        </Main>
      </Box>
    </Grommet>
  );
}