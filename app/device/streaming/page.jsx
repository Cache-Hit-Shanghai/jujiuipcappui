'use client';

import { Grommet, Text, Box, Video as VideoCanvas, Nav, Tabs, Tab, DateInput, RadioButtonGroup, Main, Grid } from 'grommet';
import { Camera, Video, Microphone, ClosedCaption, Cloud, Sd } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, IconButton, PanControl } from '../../../components/Components';

export default function Page() {
  const [value, setValue] = useState(Date.now());
  return (
    <Grommet full>
      <Box fill>
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
            <Tab title='录像'>
              <Box fill pad='small' gap='small'>
                <Box direction='row' align='center' justify='between' flex={false}>
                  <Box direction='row' align='center' background='active' round='xsmall'>
                    <Text margin={{ left: 'small' }} weight='bold'>{value && new Date(value).toLocaleDateString()}</Text>
                    <DateInput value={value} onChange={(e) => setValue(e.value)} />
                  </Box>
                  <Box round='xlarge' background='active'>
                    <RadioButtonGroup name='storagetype' direction='row' options={['Cloud', 'SDCard']}>
                      {(option, { checked, focus, hover }) => {
                        const Icon = option === 'Cloud' ? Cloud : Sd;
                        let background;
                        if (checked) background = 'brand';
                        else if (hover) background = 'light-4';
                        else if (focus) background = 'light-4';
                        return (
                          <Box background={background} round='full' pad='small'>
                            <Icon />
                          </Box>
                        );
                      }}
                    </RadioButtonGroup>
                  </Box>
                </Box>
                <Box flex={{ grow: 1, shrink: 1 }} overflow='auto'>
                  <Grid fill columns='xsmall' gap='small' align='center' justify='center' style={{ gridAutoFlow: 'row dense', gridAutoRows: '70px' }}>
                    {Array.from({ length: 37 }, (_, index) => index).map(item => <Box key={item} fill background='black' round='xsmall' />)}
                  </Grid>
                </Box>
              </Box>
            </Tab>
          </Tabs>
        </Main>
      </Box>
    </Grommet>
  );
}