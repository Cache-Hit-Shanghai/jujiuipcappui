'use client';

import { Text, Box, Nav, Tabs, Tab, List, Card, CardHeader, CardBody } from 'grommet';
import { Inbox, Notification } from 'grommet-icons';
import { IconBack, JuJiuMain } from '../../components/Components';


const notifications = [
  { title: '服务过期提醒', date: '2023/7/24', time: '10:24', content: '办3（GF12345678）的云存储服务已过期。录像已无法访问。' },
  { title: '服务即将到期', date: '2023/7/23', time: '04:24', content: '办3（GF12345678）的云存储服务将于1天后到期。到期后已保存的录像将无法访问。请及时续费。' },
  { title: '服务即将到期', date: '2023/7/22', time: '21:24', content: '办3（GF12345678）的云存储服务将于7天后到期。到期后已保存的录像将无法访问。请及时续费。' },
  { title: '设备异常提醒', date: '2023/7/21', time: '00:24', content: '办3（GF12345678）已离线。' },
];

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
            <List data={notifications} pad={{ vertical: 'small' }} border={false} gap='medium'>
              {(datum) => (
                <Card>
                  <CardHeader pad='small' background='background-front'>
                    <Text>{datum.date}</Text>
                    <Text size='small' color='text-xweak'>{datum.time}</Text>
                  </CardHeader>
                  <CardBody pad='small' background='background-contrast'>
                    <Text>{datum.content}</Text>
                  </CardBody>
                </Card>
              )}
            </List>
            <Box align='center' justify='center' gap='small'>
              <Notification size='large' />
              <Text>还没有通知哦</Text>
            </Box>
          </Tab>
        </Tabs>
      </JuJiuMain>
    </Box>
  );
}