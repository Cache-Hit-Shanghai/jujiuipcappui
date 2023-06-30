'use client';

import { Text, Box, Video as VideoCanvas, Nav, Tabs, Tab, DateInput, RadioButtonGroup, Grid, Stack, Button, Menu } from 'grommet';
import { Camera, Video, Microphone, ClosedCaption, Cloud, Sd, VolumeMute, Expand, Checkmark } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IconBack, IconButton, PanControl, JuJiuMain } from '../../../components/Components';

export default function Page() {
  const [value, setValue] = useState(Date.now());
  const router = useRouter();

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>实时视频</Text>
      </Nav>
      <JuJiuMain margin='none'>
        <Stack anchor='bottom-right' interactiveChild='last'>
          <Box flex={false} background='background-contrast'>
            <VideoCanvas controls={false} style={{ 'z-index': '0' }}>
              <source
                src='http://techslides.com/demos/sample-videos/small.webm'
                type='video/webm'
              />
            </VideoCanvas>
          </Box>
          <Box>
            <Button plain margin='small' icon={<Expand />} onClick={() => router.push('/device/streaming/fullscreen')} />
          </Box>
        </Stack>
        <Tabs flex>
          <Tab title='实时视频'>
            <Box fill>
              <Box flex={{ grow: 1 }} justify='center'>
                <PanControl />
              </Box>
              <Box direction='row' justify='evenly' background='background-contrast' flex={false}>
                <IconButton icon={<Camera />} label='截图' onClick={() => {}} />
                <IconButton icon={<Video />} label='录制' onClick={() => {}} />
                <IconButton icon={<Microphone />} label='对讲' onClick={() => {}} />
                <IconButton icon={<VolumeMute />} label='静音' onClick={() => {}} />
                <Menu
                  plain
                  dropAlign={{ top: 'bottom' }}
                  items={[
                    { label: '极清', onClick: () => {}, justify: 'end' },
                    { label: '超清', onClick: () => {}, icon: <Box><Checkmark /></Box>, justify: 'end' },
                    { label: '标清', onClick: () => {}, justify: 'end' },
                  ]}
                >
                  <Box pad='small' align='center'>
                    <ClosedCaption />
                    <Text size='small'>清晰度</Text>
                  </Box>
                </Menu>
              </Box>
            </Box>
          </Tab>
          <Tab title='录像'>
            <Box fill pad='small' gap='small'>
              <Box direction='row' align='center' justify='between' flex={false}>
                <Box direction='row' align='center' background='background-contrast' round='xsmall'>
                  <Text margin={{ left: 'small' }} weight='bold'>{value && new Date(value).toLocaleDateString()}</Text>
                  <DateInput value={value} onChange={(e) => setValue(e.value)} />
                </Box>
                <Box round='xlarge' background='background-contrast'>
                  <RadioButtonGroup name='storagetype' direction='row' options={['Cloud', 'SDCard']} value='Cloud'>
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
                  {Array.from({ length: 37 }, (_, index) => index).map(item => <Box key={item} fill background='background-contrast' round='xsmall' />)}
                </Grid>
              </Box>
            </Box>
          </Tab>
        </Tabs>
      </JuJiuMain>
    </Box>
  );
}