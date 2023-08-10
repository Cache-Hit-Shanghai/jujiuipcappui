'use client';

import { Text, Box, Nav, List, Card, CardHeader, CardBody, CheckBox, Button, Stack, Tag } from 'grommet';
import { Alipay } from '@styled-icons/remix-fill/Alipay';
import { WechatPay } from '@styled-icons/remix-line/WechatPay';
import Link from 'next/link';
import { IconBack, JuJiuMain } from '../../../../../components/Components';
import { JuJiuItem, JuJiuItemButton, JuJiuItemLink } from '../../..//../../components/JuJiuItem';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>已购套餐列表</Text>
      </Nav>
      <JuJiuMain gap='medium'>
        
      </JuJiuMain>
    </Box>
  );
}