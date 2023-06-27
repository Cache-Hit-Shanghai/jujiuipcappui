'use client';

import { Grommet, Text, Box, Nav, Layer, Heading, Button } from 'grommet';
import { Inbox, Notification } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, ButtonGroup } from '../../../components/Components';


export default function Page() {
  const [ openWechatSharing, setOpenWechatSharing ] = useState(false);
  const buttons = [
    { label: '好友分享', onClick: () => {} },
    { label: '微信分享', onClick: () => setOpenWechatSharing(true) },
  ];

  return (
    <Grommet full>
      <Box fill>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>设备分享</Text>
        </Nav>
        <Box gap='medium' flex={{ grow: 1, shrink: 1 }} margin='small' overflow='auto'>
          <ButtonGroup data={buttons} />
          {openWechatSharing && (
            <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenWechatSharing(false)} responsive={false}>
              <Box fill pad='medium' gap='medium'>
                <Button label='微信好友' />
                <Button label='朋友圈' />
                <Button label='取消' onClick={() => setOpenWechatSharing(false)} />
              </Box>
            </Layer>
          )}
        </Box>
      </Box>
    </Grommet>
  );
}