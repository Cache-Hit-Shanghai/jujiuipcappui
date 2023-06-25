'use client';

import { Grommet, Text, Box, Footer, Nav, Card, CardBody, CardFooter, Main } from 'grommet';
import { Webcam } from 'grommet-icons';
import { IconBack, LinkGroup } from '../../../components/Components';

const links = [
  { label: '检查更新', url: '#'},
  { label: '服务条款', url: '#'},
  { label: '隐私政策', url: '#'},
  { label: '官网', url: '#'},
  { label: '使用帮助', url: '#'},
];

export default function Page() {
  return (
    <Grommet full>
      <Box fill>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>关于</Text>
        </Nav>
        <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small'>
          <Card pad='medium' margin={{ horizontal: 'small' }} flex={false}>
            <CardBody margin='medium' justify='center' align='center'>
              <Webcam size='xlarge' />
            </CardBody>
            <CardFooter justify='center' align='center' direction='column' gap='none'>
              <Text>V1.0.0.0</Text>
              <Text size='large'>云探智能视觉系统</Text>
              <Text>Powered by 雎鸠云</Text>
            </CardFooter>
          </Card>
          <LinkGroup data={links} />
        </Main>
        <Footer margin='small' justify='center'>
          <Text size='small'>&copy;2021-2023 上海光方迅视科技有线公司 版权所有</Text>
        </Footer>
      </Box>
    </Grommet>
  );
}