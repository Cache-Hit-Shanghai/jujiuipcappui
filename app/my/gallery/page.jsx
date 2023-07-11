'use client';

import { Text, Box, Nav, Grid, Card, CardHeader, CardBody } from 'grommet';
import Link from 'next/link';
import { IconBack, JuJiuMain } from '../../../components/Components';


function LinkBox({ key }) {
  return (
    <Link href='/my/gallery/detail' passHref legacyBehavior>
      <Box key={key} as='a' fill background='url(https://v2.grommet.io/assets/IMG_4245.jpg)' round='xsmall' />
    </Link>
  );
}

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>相册（剩余容量100GB）</Text>
      </Nav>
      <JuJiuMain>
        <Box flex={false} gap='large'>
          <Card>
            <CardHeader>
              <Text>2023/7/4</Text>
            </CardHeader>
            <CardBody pad='small'>
              <Grid fill columns='xsmall' gap='small' align='center' justify='center' style={{ gridAutoFlow: 'row dense', gridAutoRows: '70px' }}>
                {Array.from({ length: 1 }, (_, index) => index).map(item => <LinkBox key={item} />)}
              </Grid>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Text>2023/7/3</Text>
            </CardHeader>
            <CardBody pad='small'>
              <Grid fill columns='xsmall' gap='small' align='center' justify='center' style={{ gridAutoFlow: 'row dense', gridAutoRows: '70px' }}>
                {Array.from({ length: 8 }, (_, index) => index).map(item => <LinkBox key={item} />)}
              </Grid>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Text>2023/7/1</Text>
            </CardHeader>
            <CardBody pad='small'>
              <Grid fill columns='xsmall' gap='small' align='center' justify='center' style={{ gridAutoFlow: 'row dense', gridAutoRows: '70px' }}>
                {Array.from({ length: 4 }, (_, index) => index).map(item => <LinkBox key={item} />)}
              </Grid>
            </CardBody>
          </Card>
        </Box>
      </JuJiuMain>
    </Box>
  );
}