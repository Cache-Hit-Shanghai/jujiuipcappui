'use client';

import { Text, Box, Nav, Tabs, Tab } from 'grommet';
import { Inbox, Notification } from 'grommet-icons';
import { IconBack, JuJiuMain } from '../../components/Components';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>消息通知</Text>
      </Nav>
      <JuJiuMain>
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
      </JuJiuMain>
    </Box>
  );
}