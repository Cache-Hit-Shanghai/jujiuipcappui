'use client';

import { Text, Box, Nav, Layer, Button, CardBody } from 'grommet';
import { FormNext } from 'grommet-icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconBack, ButtonGroup, JuJiuMain, JuJiuCard } from '../../../components/Components';


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
        <Text>设备分享 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuCard>
          <CardBody>
            <Text>分享好友(0)</Text>
          </CardBody>
        </JuJiuCard>
        <JuJiuCard>
          <CardBody>
            <Box direction='row' align='center' justify='between'>
              <Box>
                <Text>扩容服务</Text>
                <Text size='small' color='text-xweak'>未开通：可免费分享5人</Text>
              </Box>
              <Box direction='row'>
                <Text>去扩容</Text>
								<FormNext color='control' />
              </Box>
            </Box>
          </CardBody>
        </JuJiuCard>
        <ButtonGroup data={buttons} />
        <Button label='取消所有分享' />
        {openWechatSharing && (
          <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenWechatSharing(false)} responsive={false}>
            <Box fill border pad='medium' gap='medium'>
              <Button label='微信好友' />
              <Button label='朋友圈' />
              <Button label='取消' onClick={() => setOpenWechatSharing(false)} />
            </Box>
          </Layer>
        )}
      </JuJiuMain>
    </Box>
  );
}