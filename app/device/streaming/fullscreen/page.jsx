'use client';

import { Video as VideoCanvas, Box, Stack, Button } from 'grommet';
import { Camera, Video, Microphone, ClosedCaption, VolumeMute } from 'grommet-icons';
import { IconBack } from '../../../../components/Components';

export default function Page() {
  return (
    <Box fill>
      <Stack fill>
        <Box fill background='background-contrast'>
          <VideoCanvas controls={false} fit='contain' style={{ 'z-index': '0' }}>
            <source
              src='http://techslides.com/demos/sample-videos/small.webm'
              type='video/webm'
            />
          </VideoCanvas>
        </Box>
        <Box fill justify='between'>
          <IconBack />
          <Box direction='row' margin={{ vertical: 'large', horizontal: 'xlarge' }} gap='xlarge'>
            <Button plain icon={<Camera />} />
            <Button plain icon={<Video />} />
            <Button plain icon={<Microphone />} />
            <Button plain icon={<VolumeMute />} />
            <Button plain icon={<ClosedCaption />} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}