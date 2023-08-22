'use client';

import { Text, Box, Card , Nav, CardHeader, CardBody, Markdown, Heading, Button, TextArea, Tag, Menu } from 'grommet';
import { Checkmark } from 'grommet-icons';
import { Settings3 } from '@styled-icons/remix-fill/Settings3';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/new/core_ui';

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
        <Box direction='row' gap='small'>
          <Heading margin='none' level={2}>一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题</Heading>
          <Box flex={false}><Button label='编辑' /></Box>
        </Box>
        <Box direction='row' justify='between'>
          <Box direction='row' gap='small' align='center'>
            <Tag border={false} background='graph-4' size='xsmall' value='bug' />
            <Tag border={false} background='graph-3' size='xsmall' value='建议' />
            <Tag border={false} background='graph-2' size='xsmall' value='功能' />
            <Tag border={false} background='graph-1' size='xsmall' value='文档' />
            <Tag border={false} background='graph-0' size='xsmall' value='帮助' />
          </Box>
          <Box>
            <Menu
              dropProps={{ align: { top: 'bottom', right: 'right' } }}
              icon={<Settings3 size='24' />}
              items={[
                {
                  label: <Text>bug</Text>,
                  icon: <Box margin={{ right: 'small' }}><Checkmark /></Box>,
                },
                {
                  label: <Text>建议</Text>,
                  icon: <Box margin={{ right: 'small' }}><Checkmark size='24' /></Box>,
                },
                {
                  label: <Text>功能</Text>,
                  icon: <Box margin={{ right: 'small' }}><Checkmark /></Box>,
                },
                {
                  label: <Text>文档</Text>,
                  icon: <Box margin={{ right: 'small' }}><Checkmark /></Box>,
                },
                {
                  label: <Text>帮助</Text>,
                  icon: <Box margin={{ right: 'small' }}><Checkmark /></Box>,
                },
              ]}
            />
          </Box>
        </Box>
        <Card>
          <CardHeader pad='small' background='background-front'>
            <Text size='small' color='text-xweak'>由Jim于2023/07/08创建</Text>
          </CardHeader>
          <CardBody pad='small' background='background-contrast'>
            <Markdown>如何使用“设备转移”功能？</Markdown>
          </CardBody>
        </Card>
        <Card>
          <CardHeader pad='small' background='background-front'>
            <Text size='small' color='text-xweak'>由Admin于2023/07/09创建</Text>
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