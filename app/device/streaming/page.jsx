'use client';

import { Grommet, Text, Box, Video as VideoCanvas, Nav, Tabs, Tab, CardBody, CheckBox, Main } from 'grommet';
import { Camera, Video, Microphone, ClosedCaption } from 'grommet-icons';
import { IconBack, PanControl } from '../../../components/Components';

export default function Page() {
  return (
    <Grommet full>
      <Box fill gap='medium'>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>实时视频</Text>
        </Nav>
        <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small'>
          <Box flex={false}>
            <VideoCanvas>
              <source
                src='http://techslides.com/demos/sample-videos/small.webm'
                type='video/webm'
              />
            </VideoCanvas>
          </Box>
          <Tabs flex>
            <Tab title='实时视频'>
              <Box fill>
                <PanControl />
                <Box direction='row' justify='evenly' background='active' flex={false} pad={{ vertical: 'small'}}>
                  <Box align='center'>
                    <Camera />
                    <Text size='small'>截图</Text>
                  </Box>
                  <Box align='center'>
                    <Video />
                    <Text size='small'>录制</Text>
                  </Box>
                  <Box align='center'>
                    <Microphone />
                    <Text size='small'>对讲</Text>
                  </Box>
                  <Box align='center'>
                    <ClosedCaption />
                    <Text size='small'>清晰度</Text>
                  </Box>
                </Box>
              </Box>
            </Tab>
            <Tab title='录像'></Tab>
            <Tab title='消息'></Tab>
          </Tabs>
        </Main>
      </Box>
    </Grommet>
  );
}