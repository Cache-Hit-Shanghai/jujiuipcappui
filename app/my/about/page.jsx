'use client';

import { Text, Box, Footer, Nav, CardBody, CardFooter } from 'grommet';
import { Webcam } from 'grommet-icons';
import { IconBack, LinkGroup, JuJiuMain, JuJiuCard } from '../../../components/Components';

const links = [
  { label: '检查更新', url: '#'},
  { label: '服务条款', url: '#'},
  { label: '隐私政策', url: '#'},
  { label: '官网', url: '#'},
  { label: '使用帮助', url: '#'},
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>关于</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuCard>
          <CardBody margin='medium' justify='center' align='center'>
            <Webcam size='xlarge' color='brand' />
          </CardBody>
          <CardFooter justify='center' align='center' direction='column' gap='none'>
            <Text>V1.0.0.0</Text>
            <Text size='large'>云探智能视觉系统</Text>
            <Text>Powered by 雎鸠云</Text>
          </CardFooter>
        </JuJiuCard>
        <LinkGroup data={links} />
      </JuJiuMain>
      <Footer margin='small' justify='center'>
        <Text size='small'>&copy;2021-2023 上海光方迅视科技有线公司 版权所有</Text>
      </Footer>
    </Box>
  );
}