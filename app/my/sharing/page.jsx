'use client';

import { Text, Box, Nav, Tabs, Tab, List } from 'grommet';
import { Webcam } from 'grommet-icons';
import { IconBack, JuJiuMain } from '../../../components/Components';

const data0 = [
  { device: '客厅', to: '137319346' },
  { device: '办3', to: '137319346' },
  { device: '办5', to: '137319346' },
];

const data1 = [
  { device: '客厅', from: '137319346' },
  { device: '办3', from: '137319346' },
  { device: '办5', from: '137319346' },
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>我的分享</Text>
      </Nav>
      <JuJiuMain>
        <Tabs flex>
          <Tab title='我的分享'>
            <List data={data0}>
            { (datum) => (
              <Box direction='row' gap='small' align='center' justify='between'>
                <Box direction='row' gap='small' align='center'>
                  <Webcam size='large' />
                  <Box>
                    <Text>{datum.device}</Text>
                    <Text size='small' color='text-xweak'>分享给{datum.to}</Text>
                  </Box>
                </Box>
                <Box>
                </Box>
              </Box>
            ) }
          </List>
          </Tab>
          <Tab title='来自好友'>
            <List data={data1}>
            { (datum) => (
              <Box direction='row' gap='small' align='center' justify='between'>
                <Box direction='row' gap='small' align='center'>
                  <Webcam size='large' />
                  <Box>
                    <Text>{datum.device}</Text>
                    <Text size='small' color='text-xweak'>来自{datum.from}</Text>
                  </Box>
                </Box>
                <Box>
                </Box>
              </Box>
            ) }
          </List>
          </Tab>
        </Tabs>
      </JuJiuMain>
    </Box>
  );
}