'use client';

import { Grommet, Text, Box, Nav, Card, CardHeader, CardBody, Main, Avatar, Button } from 'grommet';
import { Gallery, VirtualStorage, Edit, ShareRounded, User, HostMaintenance } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import { AppFooter, IconLInk, LinkGroup } from '../../components/Components';

const links = [
  { label: '账号设置', url: '/my/account' },
  { label: '界面设置', url: '/my/uisettings' },
  { label: '系统信息', url: '/my/sysinfo' },
  { label: '客服', url: '#' },
  { label: '关于', url: '/my/about' },
];

export default function Page() {
  const router = useRouter();

  return (<Grommet full>
    <Box fill>
      <Nav direction='row' margin='small' justify='between'>
        <Button onClick={() => router.push('/my/login')}>
          <Box direction='row' gap='small' align='center'>
            <Avatar background='active'>
              <User />
            </Avatar>
            <Box>
              <Text>用户34881</Text>
              <Text size='xsmall'>黄金会员</Text>
            </Box>
          </Box>
        </Button>
      </Nav>
      <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small'>
        <Card pad='small' background='active' margin={{ horizontal: 'small' }} flex={false}>
          <CardBody>
            <Box direction='row' justify='evenly'>
              <IconLInk icon={<Gallery />} label='相册' url='#' />
              <IconLInk icon={<VirtualStorage />} label='云存储' url='#' />
            </Box>
          </CardBody>
        </Card>
        <Card pad='small' gap='small' background='active' margin={{ horizontal: 'small' }} flex={false}>
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
        </Card>
        <LinkGroup data={links} />
      </Main>
      <AppFooter />
    </Box>
  </Grommet>);
}
