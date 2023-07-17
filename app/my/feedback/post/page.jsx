'use client';

import { Text, Box, Card , Nav, CardHeader, CardBody, Markdown, Heading, Button, TextArea } from 'grommet';
import { Search } from 'grommet-icons';
import { Article } from '@styled-icons/remix-fill/Article';
import { IconBack, LinkGroup, JuJiuMain, JuJiuCard } from '../../../../components/Components';

const content=`
## 主要步骤如下
1. 单击“云探”app。
1. 单击摄像机设置小图标。
1. 选择“设置”。
1. 滚动到最下方，选择“转移设备”。
`;

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>帮助与反馈</Text>
      </Nav>
      <JuJiuMain gap='medium'>
        <Box direction='row' align='center' gap='small'>
          <Heading margin='none' level={2}>一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题</Heading>
          <Box flex={false}><Button label='编辑' /></Box>
        </Box>
        <Card>
          <CardHeader pad='small' background='background-front'>
            <Text size='small' color='text-weak'>由Jim于2023/07/08创建</Text>
          </CardHeader>
          <CardBody pad='small' background='background-contrast'>
            <Markdown>如何使用“设备转移”功能？</Markdown>
          </CardBody>
        </Card>
        <Card>
          <CardHeader pad='small' background='background-front'>
            <Text size='small' color='text-weak'>由Admin于2023/07/09创建</Text>
          </CardHeader>
          <CardBody pad='small' background='background-contrast'>
            <Markdown>{content}</Markdown>
          </CardBody>
        </Card>
        <Card>
          <CardBody background='background-contrast'>
            <Box pad='small'><TextArea /></Box>
            <Box direction='row' justify='end' pad='small'>
              <Button primary label='发布' />
            </Box>
          </CardBody>
        </Card>
      </JuJiuMain>
    </Box>
  );
}