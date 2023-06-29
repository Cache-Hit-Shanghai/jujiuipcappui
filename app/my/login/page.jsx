'use client';

import { Grommet, Text, Box, Avatar, Nav, Main } from 'grommet';
import { LogInCircle } from '@styled-icons/boxicons-regular/LogInCircle';
import { LogoWechat } from '@styled-icons/ionicons-solid/LogoWechat';
import { Alipay } from '@styled-icons/remix-fill/Alipay';
import { IconBack } from '../../../components/Components';

const links = [
  { label: '检查更新', url: '#'},
  { label: '服务条款', url: '#'},
  { label: '隐私政策', url: '#'},
  { label: '官网', url: '#'},
  { label: '使用帮助', url: '#'},
];

export default function Page() {
  return (
    <Grommet full>
      <Box fill>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>用户登录</Text>
        </Nav>
        <Main flex={{ grow: 1, shrink: 1 }} overflow='auto'>
          <Box fill align='center' justify='center' gap='medium'>
            <Avatar background='active' size='large' pad='small'>
              <LogInCircle />
            </Avatar>
            <Avatar background='active' size='large' pad='small'>
              <LogoWechat />
            </Avatar>
            <Avatar background='active' size='large' pad='small'>
              <Alipay />
            </Avatar>
          </Box>
        </Main>
      </Box>
    </Grommet>
  );
}