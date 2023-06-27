'use client';

import { Grommet, Text, Box, Nav, Tabs, Tab } from 'grommet';
import { Inbox, Notification } from 'grommet-icons';
import { useState } from 'react';
import { IconBack } from '../../components/Components';


export default function Page() {
  const [ openGroupAdd, setOpenGroupAdd ] = useState(false);
  const [ openGroupEdit, setOpenGroupEdit ] = useState(false);

  const editgoups = [
    { label: '办公室', onClick: () => setOpenGroupEdit(true) },
    { label: '默认分组', onClick: () => setOpenGroupEdit(true) },
  ];
  const addgroups = [
    { label: '添加分组', onClick: () => setOpenGroupAdd(true) },
  ];

  return (
    <Grommet full>
      <Box fill>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>消息通知</Text>
        </Nav>
        <Box gap='medium' flex={{ grow: 1, shrink: 1 }} margin='small' overflow='auto'>
          <Tabs flex>
            <Tab title='消息'>
              <Box fill align='center' justify='center' gap='small'>
                <Inbox size='large' />
                <Text>还没有消息哦</Text>
              </Box>
            </Tab>
            <Tab title='通知'>
            <Box fill align='center' justify='center' gap='small'>
                <Notification size='large' />
                <Text>还没有通知哦</Text>
              </Box>
            </Tab>
          </Tabs>
        </Box>
      </Box>
    </Grommet>
  );
}