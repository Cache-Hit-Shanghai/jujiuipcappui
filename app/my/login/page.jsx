'use client';

import { Grommet, Text, Box, Avatar, Nav, Main, Button } from 'grommet';
import { LoginCircle } from '@styled-icons/remix-fill/LoginCircle';
import { Wechat } from '@styled-icons/remix-fill/Wechat';
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
          <Box fill align='center' justify='center' gap='large'>
            <Button>
              <Avatar background='active' size='large' pad='small'>
                <LoginCircle />
              </Avatar>
            </Button>
            <Button>
              <Avatar background='active' size='large' pad='small'>
                <Wechat />
              </Avatar>
            </Button>
            <Button>
              <Avatar background='active' size='large' pad='small'>
                <Alipay />
              </Avatar>
            </Button>
          </Box>
        </Main>
      </Box>
    </Grommet>
  );
}