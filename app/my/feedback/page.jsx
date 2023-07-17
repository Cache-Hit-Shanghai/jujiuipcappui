'use client';

import { Text, Box, TextInput , Nav, Button, List, Tag } from 'grommet';
import { Search } from 'grommet-icons';
import { Article } from '@styled-icons/remix-fill/Article';
import { IconBack, LinkGroup, JuJiuMain, JuJiuCard } from '../../../components/Components';

const data = [
  { title: '如何使用“设备转移”？', createdBy: 'Jim', date: '2023/7/1' },
  { title: '云端费用如何计算？', createdBy: 'Jim', date: '2023/7/1' },
  { title: '摄像机硬件如何保养？', createdBy: 'Tony', date: '2023/7/1' },
  { title: '是否可以把摄像机共享给家人？', createdBy: 'Jack', date: '2023/7/1' },
  { title: '一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题', createdBy: 'Lisa', date: '2023/7/1' },
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>帮助与反馈</Text>
      </Nav>
      <JuJiuMain>
        <Box direction='row' align='center' gap='small'>
          <TextInput icon={<Search />} placeholder='搜索……' />
          <Box flex={false}><Button primary label='新建问题' /></Box>
        </Box>
        <Box>
          <List data={data}>
            {(datum) => (
              <Box direction='row' gap='small'>
                <Article size='24' />
                <Box>
                  <Text truncate>{datum.title}</Text>
                  <Box direction='row' gap='small'>
                    <Tag background='graph-4' size='xsmall' value='bug' />
                    <Tag background='graph-3' size='xsmall' value='建议' />
                    <Tag background='graph-2' size='xsmall' value='功能' />
                    <Tag background='graph-1' size='xsmall' value='文档' />
                    <Tag background='graph-0' size='xsmall' value='帮助' />
                  </Box>
                  <Text size='small' color='active'>由{datum.createdBy}于{datum.date}创建</Text>
                </Box>
              </Box>
            )}
          </List>
        </Box>
      </JuJiuMain>
    </Box>
  );
}