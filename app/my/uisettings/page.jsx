'use client';

import { Text, Box, RadioButtonGroup, Nav, CardHeader, CardBody } from 'grommet';
import { IconBack, JuJiuMain, JuJiuCard } from '../../../components/Components';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>界面设置</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuCard>
          <CardHeader>
            <Text weight='bold'>语言</Text>
          </CardHeader>
          <CardBody>
            <RadioButtonGroup name='language' options={['简体中文', '繁体中文', 'English']} value='简体中文' />
          </CardBody>
        </JuJiuCard>
        <JuJiuCard>
          <CardHeader>
            <Text weight='bold'>字体大小</Text>
          </CardHeader>
          <CardBody>
            <RadioButtonGroup name='fontsize' options={['普通', '大字体']} value='普通' />
          </CardBody>
        </JuJiuCard>
        <JuJiuCard>
          <CardHeader>
            <Text weight='bold'>深色模式</Text>
          </CardHeader>
          <CardBody>
            <Box direction='row' justify='between'>
              <RadioButtonGroup name='language' options={['浅色模式', '深色模式', '跟随系统']} value='深色模式' />
            </Box>
          </CardBody>
        </JuJiuCard>
      </JuJiuMain>
    </Box>
  );
}