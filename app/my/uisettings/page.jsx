'use client';

import { Grommet, Text, Box, RadioButtonGroup, Nav, Card, CardHeader, CardBody, CheckBox, Main } from 'grommet';
import { IconBack } from '../../../components/Components';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>界面设置</Text>
      </Nav>
      <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small'>
        <Card pad='small' gap='small' background='background-contrast' margin={{ horizontal: 'small' }} flex={false}>
          <CardHeader>
            <Text weight='bold'>语言</Text>
          </CardHeader>
          <CardBody>
            <RadioButtonGroup name='language' options={['简体中文', '繁体中文', 'English']} value='简体中文' />
          </CardBody>
        </Card>
        <Card pad='small' gap='small' background='background-contrast' margin={{ horizontal: 'small' }} flex={false}>
          <CardHeader>
            <Text weight='bold'>字体大小</Text>
          </CardHeader>
          <CardBody>
            <RadioButtonGroup name='fontsize' options={['普通', '大字体']} value='普通' />
          </CardBody>
        </Card>
        <Card pad='small' gap='small' background='background-contrast' margin={{ horizontal: 'small' }} flex={false}>
          <CardHeader>
            <Text weight='bold'>深色模式</Text>
          </CardHeader>
          <CardBody>
            <Box direction='row' justify='between'>
              <Text>深色模式</Text>
              <CheckBox toggle />
            </Box>
          </CardBody>
        </Card>
      </Main>
    </Box>
  );
}