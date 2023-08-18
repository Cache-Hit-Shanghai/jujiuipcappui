'use client';

import { Text, Box, RadioButtonGroup, Nav, Card, CardHeader, CardBody } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/Components';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>界面设置</Text>
      </Nav>
      <JuJiuMain gap='medium'>
        <Card>
          <CardHeader pad='small' background='background-front'>
            <Text weight='bold'>语言</Text>
          </CardHeader>
          <CardBody pad='small' background='background-contrast'>
            <RadioButtonGroup name='language' options={['简体中文', '繁体中文', 'English']} value='简体中文' />
          </CardBody>
        </Card>
        <Card>
          <CardHeader pad='small' background='background-front'>
            <Text weight='bold'>字体大小</Text>
          </CardHeader>
          <CardBody pad='small' background='background-contrast'>
            <RadioButtonGroup name='fontsize' options={['普通', '大字体']} value='普通' />
          </CardBody>
        </Card>
        <Card>
          <CardHeader pad='small' background='background-front'>
            <Text weight='bold'>深色模式</Text>
          </CardHeader>
          <CardBody pad='small' background='background-contrast'>
            <Box direction='row' justify='between'>
              <RadioButtonGroup name='language' options={['浅色模式', '深色模式', '跟随系统']} value='深色模式' />
            </Box>
          </CardBody>
        </Card>
      </JuJiuMain>
    </Box>
  );
}