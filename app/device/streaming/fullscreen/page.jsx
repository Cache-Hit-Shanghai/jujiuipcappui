'use client';

import { Video, Box, Stack, Layer, Button } from 'grommet';
import { IconBack, IconButton, PanControl, JuJiuMain } from '../../../../components/Components';

export default function Page() {
  return (
    <Box fill>
      <Stack fill>
        <Box fill background='background-contrast'>
          <Video controls={false} fit='contain' style={{ 'z-index': '0' }}>
            <source
              src='http://techslides.com/demos/sample-videos/small.webm'
              type='video/webm'
            />
          </Video>
        </Box>
        <Box fill>
          <IconBack />
        </Box>
      </Stack>
    </Box>
  );
}