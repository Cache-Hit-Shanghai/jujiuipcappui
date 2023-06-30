'use client';

import { Text, Box, Nav, CardHeader, CardBody, Avatar, Button } from 'grommet';
import { Gallery, VirtualStorage, Edit, ShareRounded, User, HostMaintenance } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import { AppFooter, IconLInk, LinkGroup, JuJiuMain, JuJiuCard } from '../../components/Components';

const links = [
  { label: '账号设置', url: '/my/account' },
  { label: '界面设置', url: '/my/uisettings' },
  { label: '系统信息', url: '/my/sysinfo' },
  { label: '客服', url: '#' },
  { label: '关于', url: '/my/about' },
];

export default function Page() {
  const router = useRouter();

  return (
    <Box fill>
      <Nav direction='row' margin='small' justify='between'>
        <Button onClick={() => router.push('/my/login')}>
          <Box direction='row' gap='small' align='center'>
            <Avatar background='background-contrast'>
              <User />
            </Avatar>
            <Box>
              <Text>用户34881</Text>
              <Text size='xsmall'>黄金会员</Text>
            </Box>
          </Box>
        </Button>
      </Nav>
      <JuJiuMain>
        <JuJiuCard>
          <CardBody>
            <Box direction='row' justify='evenly'>
              <IconLInk icon={<Gallery />} label='相册' url='#' />
              <IconLInk icon={<VirtualStorage />} label='云存储' url='#' />
            </Box>
          </CardBody>
        </JuJiuCard>
        <JuJiuCard>
          <CardHeader>
            <Text>常用工具</Text>
          </CardHeader>
          <CardBody>
            <Box direction='row' justify='evenly'>
              <IconLInk icon={<HostMaintenance />} label='设备管理' url='#' />
              <IconLInk icon={<ShareRounded />} label='我的分享' url='#' />
              <IconLInk icon={<Edit />} label='帮助与反馈' url='#' />
            </Box>
          </CardBody>
        </JuJiuCard>
        <LinkGroup data={links} />
      </JuJiuMain>
      <AppFooter />
    </Box>
  );
}
