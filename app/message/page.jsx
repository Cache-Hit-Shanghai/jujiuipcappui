'use client';

import { Text, Box, Nav, Tabs, Tab, List, Card, CardHeader, CardBody, CardFooter, Button } from 'grommet';
import { Inbox, Notification } from 'grommet-icons';
import { IconBack, JuJiuMain, ButtonLink } from '../../components/Components';


const messages = [
  { title: '服务过期提醒', date: '2023/7/24', time: '10:24', content: '办3（GF12345678）的云存储服务已过期。录像已无法访问。', href: '/my/cloudstorage' },
  { title: '服务即将到期提醒', date: '2023/7/23', time: '04:24', content: '办3（GF12345678）的云存储服务将于1天后到期。到期后已保存的录像将无法访问。请及时续费。', href: '/my/cloudstorage' },
  { title: '服务即将到期提醒', date: '2023/7/22', time: '21:24', content: '办3（GF12345678）的云存储服务将于7天后到期。到期后已保存的录像将无法访问。请及时续费。', href: '/my/cloudstorage' },
];
const notifications = [
  { title: '设备访问提醒', date: '2023/7/24', time: '10:24', content: '用户“AB1234”正在查看办3（GF12345678）的视频流。', href: '#' },
  { title: '设备异常提醒', date: '2023/7/23', time: '04:24', content: '办3（GF12345678）绑定用户失败。', href: '#' },
  { title: '设备状态提醒', date: '2023/7/22', time: '21:24', content: '办3（GF12345678）已上线', href: '#' },
  { title: '设备状态提醒', date: '2023/7/21', time: '00:24', content: '办3（GF12345678）已离线。', href: '#' },
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
          <Tab title={<Box pad={{ top: 'medium' }}><Button plain label='消息' icon={<Inbox />} badge={3} /></Box>}>
            <List data={messages} pad={{ vertical: 'small' }} border={false} gap='medium'>
              {(datum) => (
                <Card>
                  <CardHeader pad='small' background='background-front'>
                    <Text>{datum.title}</Text>
                  </CardHeader>
                  <CardBody pad='small'>
                    <ButtonLink href={datum.href}>
                      <Text size='small'>{datum.content}</Text>
                    </ButtonLink>
                  </CardBody>
                  <CardFooter pad='small' background='background-contrast'>
                    <Text>{datum.date}</Text>
                    <Text size='small' color='text-xweak'>{datum.time}</Text>
                  </CardFooter>
                </Card>
              )}
            </List>
            <Box align='center' justify='center' gap='small'>
              <Inbox size='large' />
              <Text>还没有消息哦</Text>
            </Box>
          </Tab>
          <Tab pad='medium' title={<Box pad={{ top: 'medium' }}><Button plain label='通知' icon={<Notification />} badge={4} /></Box>}>
            <List data={notifications} pad={{ vertical: 'small' }} border={false} gap='medium'>
              {(datum) => (
                <Card>
                  <CardHeader pad='small' background='background-front'>
                    <Text>{datum.title}</Text>
                  </CardHeader>
                  <CardBody pad='small' background='background-contrast'>
                    <ButtonLink href={datum.href}>
                      <Text size='small'>{datum.content}</Text>
                    </ButtonLink>
                  </CardBody>
                  <CardFooter pad='small' background='background-contrast'>
                    <Text>{datum.date}</Text>
                    <Text size='small' color='text-xweak'>{datum.time}</Text>
                  </CardFooter>
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