'use client';

import { Grommet, Text, Box, Video as VideoCanvas, Nav, Tabs, Tab, CardBody, CheckBox, Main } from 'grommet';
import { Camera, Video, Microphone, ClosedCaption } from 'grommet-icons';
import { IconBack, IconButton, PanControl } from '../../../components/Components';

export default function Page() {
  return (
    <Grommet full>
      <Box fill gap='medium'>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>实时视频</Text>
        </Nav>
        <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small'>
          <Box flex={false} background='black'>
            <VideoCanvas controls={false} background='black'>
              <source
                src='http://techslides.com/demos/sample-videos/small.webm'
                type='video/webm'
              />
            </VideoCanvas>
          </Box>
          <Tabs flex>
            <Tab title='实时视频'>
              <Box fill>
                <Box flex={{ grow: 1, shrink: 1 }} justify='center'>
                  <PanControl />
                </Box>
                <Box direction='row' justify='evenly' background='active' flex={false}>
                  <IconButton icon={<Camera />} label='截图' onClick={() => {}} />
                  <IconButton icon={<Video />} label='录制' onClick={() => {}} />
                  <IconButton icon={<Microphone />} label='对讲' onClick={() => {}} />
                  <IconButton icon={<ClosedCaption />} label='清晰度' onClick={() => {}} />
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