'use client';

import { Grommet, Text, Box, Nav, List, Button, Accordion, AccordionPanel, Card, CardHeader, CardBody, CardFooter, Image, Footer, Main, Avatar } from 'grommet';
import { Gallery, VirtualStorage, FormNext, Edit, ShareRounded, User, SettingsOption, Group, HostMaintenance } from 'grommet-icons';
import { AppFooter, IconLInk } from '../../components/Components';

export default function Page() {
  return (<Grommet full>
    <Box fill>
      <Nav direction='row' margin='small' justify='between'>
        <Box direction='row' gap='small' align='center'>
          <Avatar background='active'>
            <User />
          </Avatar>
          <Box>
            <Text>用户34881</Text>
            <Text size='xsmall'>黄金会员</Text>
          </Box>
        </Box>
        <Box>
          <Button icon={<SettingsOption />} />
        </Box>
      </Nav>
      <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small'>
        <Card pad='small' background='active' margin={{ horizontal: 'small' }}>
          <CardBody>
            <Box direction='row' justify='evenly'>
              <IconLInk icon={<Gallery />} label='相册' url='/album' />
              <IconLInk icon={<VirtualStorage />} label='云盘' url='/cloudstorage' />
            </Box>
          </CardBody>
        </Card>
        <Card pad='small' gap='small' background='active' margin={{ horizontal: 'small' }}>
          <CardHeader>
            <Text>常用工具</Text>
          </CardHeader>
          <CardBody>
            <Box direction='row' justify='evenly'>
              <IconLInk icon={<Group />} label='我的好友' url='/friends' />
              <IconLInk icon={<HostMaintenance />} label='设备管理' url='/devicemanagement' />
              <IconLInk icon={<ShareRounded />} label='我的分享' url='/share' />
              <IconLInk icon={<Edit />} label='帮助与反馈' url='/help' />
            </Box>
          </CardBody>
        </Card>
        <Card pad='small' background='active' margin={{ horizontal: 'small' }}>
          <CardBody>
            <List data={[ '客服', '关于' ]} border={false}>
              {
                (datum) => (
                <Box direction='row' justify='between'>
                  <Text>{datum}</Text>
                  <FormNext />
                </Box>)
              }
            </List>
          </CardBody>
        </Card>
      </Main>
      <AppFooter />
    </Box>
  </Grommet>);
}
