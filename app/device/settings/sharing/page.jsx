'use client';

import { Text, Box, Nav, Button, CardBody, Avatar } from 'grommet';
import { User, FormNext, Subtract } from 'grommet-icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconBack, ButtonGroup, JuJiuMain, JuJiuCard, ButtonLink } from '@/jujiuuicomponents/Components';
import { JuJiuLayer } from '@/jujiuuicomponents/new/core_ui';


export default function Page() {
  const router = useRouter();
  const [ openWechatSharing, setOpenWechatSharing ] = useState(false);
  const buttons = [
    { label: '二维码分享', onClick: () => router.push('/device/settings/sharing/qrcode') },
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
          <CardBody gap='small'>
            <Text>分享好友(1)</Text>
            <Box direction='row' gap='small'>
              <Box align='center'>
                <Avatar round='small' background='black'>
                  <User />
                </Avatar>
                <Text size='small' truncate>administrator</Text>
              </Box>
              <ButtonLink href='/device/settings/sharing/unshare'>
                <Box>
                  <Avatar round='small' border>
                    <Subtract />
                  </Avatar>
                </Box>
              </ButtonLink>
            </Box>
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
          <JuJiuLayer onClickOutside={() => setOpenWechatSharing(false)}>
            <Button label='微信好友' />
            <Button label='朋友圈' />
          </JuJiuLayer>
        )}
      </JuJiuMain>
    </Box>
  );
}