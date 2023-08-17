'use client';

import { Text, Box, Heading, Tabs, Tab } from 'grommet';
import { Alert } from 'grommet-icons';
import { ButtonBackToMain, AppMark } from '@/components/Components';


export default function Page() {
  return (
    <Box fill>
      <Tabs flex>
        <Tab title='4xx'>
          <Box fill>
            <Box flex={{ grow: 1, shrink: 1 }} align='center' justify='center' gap='medium' pad='medium'>
              <Box direction='row' align='center' gap='medium'>
                <Alert color='status-error' size='large' />
                <Heading level={1} size='medium'>出错啦！</Heading>
              </Box>
              <Box align='center'>
                <Text size='large'>404 - 页面不存在</Text>
                <Text size='small' color='text-xweak'>您访问的页面有可能被移到了其它位置，页面名称发生了改变，或者暂时不可访问。</Text>
              </Box>
              <Box>
                <ButtonBackToMain />
              </Box>
            </Box>
            <AppMark />
          </Box>
        </Tab>
        <Tab title='5xx'>
          <Box fill>
            <Box flex={{ grow: 1, shrink: 1 }} align='center' justify='center' gap='medium' pad='medium'>
              <Box direction='row' align='center' gap='medium'>
                <Alert color='status-error' size='large' />
                <Heading level={1} size='medium'>出错啦！</Heading>
              </Box>
              <Box align='center'>
                <Text size='large'>500 - 服务器错误</Text>
                <Text size='small' color='text-xweak'>您访问的服务器目前出了一点问题，请联系客服或者稍候再试。</Text>
              </Box>
              <Box>
                <ButtonBackToMain />
              </Box>
            </Box>
            <AppMark />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  );
}