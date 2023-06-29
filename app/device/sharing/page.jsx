'use client';

import { Text, Box, Nav, Layer, Button } from 'grommet';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconBack, ButtonGroup } from '../../../components/Components';


export default function Page() {
  const router = useRouter();
  const [ openWechatSharing, setOpenWechatSharing ] = useState(false);
  const buttons = [
    { label: '二维码分享', onClick: () => router.push('/device/sharing/qrcode') },
    { label: '微信分享', onClick: () => setOpenWechatSharing(true) },
  ];

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>设备分享</Text>
      </Nav>
      <Box gap='medium' flex={{ grow: 1, shrink: 1 }} margin='small' overflow='auto'>
        <ButtonGroup data={buttons} />
        {openWechatSharing && (
          <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenWechatSharing(false)} responsive={false}>
            <Box fill border pad='medium' gap='medium'>
              <Button label='微信好友' />
              <Button label='朋友圈' />
              <Button label='取消' onClick={() => setOpenWechatSharing(false)} />
            </Box>
          </Layer>
        )}
      </Box>
    </Box>
  );
}