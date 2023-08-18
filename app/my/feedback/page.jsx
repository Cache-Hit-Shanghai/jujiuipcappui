'use client';

import { Text, Box, TextInput , Nav, Button, List, Tag, Pagination, Menu } from 'grommet';
import { Search, Add, MoreVertical, Chat } from 'grommet-icons';
import { Article } from '@styled-icons/remix-fill/Article';
import Link from "next/link";
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/Components';

const data = [
  { title: '如何使用“设备转移”？', createdBy: 'Jim', date: '2023/7/1' },
  { title: '云端费用如何计算？', createdBy: 'Jim', date: '2023/7/1' },
  { title: '摄像机硬件如何保养？', createdBy: 'Tony', date: '2023/7/1' },
  { title: '是否可以把摄像机共享给家人？', createdBy: 'Jack', date: '2023/7/1' },
  { title: '一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题', createdBy: 'Lisa', date: '2023/7/1' },
  { title: '如何使用“设备转移”？', createdBy: 'Jim', date: '2023/7/1' },
  { title: '云端费用如何计算？', createdBy: 'Jim', date: '2023/7/1' },
  { title: '摄像机硬件如何保养？', createdBy: 'Tony', date: '2023/7/1' },
  { title: '是否可以把摄像机共享给家人？', createdBy: 'Jack', date: '2023/7/1' },
  { title: '一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题', createdBy: 'Lisa', date: '2023/7/1' },
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center' justify='between'>
        <Box direction='row' align='center'>
          <IconBack />
          <Text>帮助与反馈</Text>
        </Box>
        <Menu
          icon={<MoreVertical />}
          dropAlign={{ top: 'bottom', right: 'right' }}
          items={[
            { label: <Link href='/my/feedback/new' passHref legacyBehavior><Text>新建问题</Text></Link>, icon: <Box margin={{ right: 'small' }}><Add /></Box> },
            { label: <Link href='#' passHref legacyBehavior><Text>我的问题</Text></Link>, icon: <Box margin={{ right: 'small' }}><Article size='24' /></Box> },
            { label: <Link href='#' passHref legacyBehavior><Text>我的回复</Text></Link>, icon: <Box margin={{ right: 'small' }}><Chat /></Box> },
          ]}
        />
      </Nav>
      <Box border flex={false} direction='row' align='center' margin={{ horizontal: 'small' }}>
        <TextInput plain icon={<Search />} placeholder='搜索问题……' />
        <Box flex={false} margin='small'><Button primary size='small' label='搜索' /></Box>
      </Box>
      <JuJiuMain>
        <List data={data} margin={{ vertical: 'small' }}>
          {(datum) => (
            <Box direction='row' gap='small'>
              <Box flex={false}><Article size='24' /></Box>
              <Box gap='small'>
                <Link href='/my/feedback/post' passHref legacyBehavior>
                  <Text truncate color='control'>{datum.title}</Text>
                </Link>
                <Box direction='row' gap='small'>
                  <Tag border={false} background='graph-4' size='xsmall' value='bug' />
                  <Tag border={false} background='graph-3' size='xsmall' value='建议' />
                  <Tag border={false} background='graph-2' size='xsmall' value='功能' />
                  <Tag border={false} background='graph-1' size='xsmall' value='文档' />
                  <Tag border={false} background='graph-0' size='xsmall' value='帮助' />
                </Box>
                <Text size='small' color='text-xweak'>由{datum.createdBy}于{datum.date}创建</Text>
              </Box>
            </Box>
          )}
        </List>
      </JuJiuMain>
      <Box align='center' pad='small'>
        <Pagination numberItems={237} />
      </Box>
    </Box>
  );
}