'use client';

import { Video as VideoCanvas, Box, Stack, Button } from 'grommet';
import { Camera } from 'grommet-icons';
import { IconBack, ChatControl, VolumeControl, RecordControl, PanLayer, ResolutionControl } from '../../../../components/Components';

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
            <RecordControl showTitle={false} />
            <ChatControl showTitle={false} />
            <VolumeControl showTitle={false} />
            <PanLayer />
            <ResolutionControl showTitle={false} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}