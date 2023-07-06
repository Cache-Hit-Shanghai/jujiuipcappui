'use client';

import { Video as VideoCanvas, Box, Stack, Button, Menu } from 'grommet';
import { Camera, ClosedCaption, Checkmark } from 'grommet-icons';
import { IconBack, ChatControl, MuteControl, RecordControl, PanLayer } from '../../../../components/Components';

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
            <MuteControl showTitle={false} />
            <PanLayer />
            <Menu
              plain
              dropAlign={{ top: 'bottom' }}
              items={[
                { label: '极清', onClick: () => {}, justify: 'end' },
                { label: '超清', onClick: () => {}, icon: <Checkmark />, justify: 'end' },
                { label: '标清', onClick: () => {}, justify: 'end' },
              ]}
            >
              <Box pad='small' align='center'>
                <ClosedCaption />
              </Box>
            </Menu>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}