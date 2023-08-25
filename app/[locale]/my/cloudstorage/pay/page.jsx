'use client';

import { Text, Box, Nav, Anchor, Card, CardHeader, CardBody, CheckBox, Button, Stack, Tag } from 'grommet';
import { Alipay } from '@styled-icons/remix-fill/Alipay';
import { WechatPay } from '@styled-icons/remix-line/WechatPay';
import Link from '@/state/translate';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/new/core_ui';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>套餐选择</Text>
      </Nav>
      <JuJiuMain gap='medium'>
        <Stack anchor='top-right'>
          <Card pad='large' gap='medium' flex={false} background='background-contrast'>
            <CardBody direction='row' justify='between' align='center'>
              <Box direction='row' gap='small'>
                <CheckBox />
                <Text>7天</Text>
              </Box>
              <Text>年套餐</Text>
              <Box align='end'>
                <Text>￥69</Text>
                <Text size='small' color='text-xweak'><strike>￥139</strike></Text>
              </Box>
            </CardBody>
          </Card>
          <Tag value='惠' size='small' background='status-critical' />
        </Stack>
        <Card pad='large' gap='medium' flex={false} background='background-contrast'>
          <CardBody direction='row' justify='between' align='center'>
            <Box direction='row' gap='small'>
              <CheckBox />
              <Text>7天</Text>
            </Box>
            <Text>半年套餐</Text>
            <Box align='end'>
              <Text>￥39</Text>
              <Text size='small' color='text-xweak'><strike>￥78</strike></Text>
            </Box>
          </CardBody>
        </Card>
        <Stack anchor='top-right'>
          <Card pad='large' gap='medium' flex={false} background='background-contrast'>
            <CardBody direction='row' justify='between' align='center'>
              <Box direction='row' gap='small'>
                <CheckBox />
                <Text>30天</Text>
              </Box>
              <Text>年套餐</Text>
              <Box align='end'>
                <Text>￥149</Text>
                <Text size='small' color='text-xweak'><strike>￥300</strike></Text>
              </Box>
            </CardBody>
          </Card>
          <Tag value='惠' size='small' background='status-critical' />
        </Stack>
        <Card pad='large' gap='medium' flex={false} background='background-contrast'>
          <CardBody direction='row' justify='between' align='center'>
            <Box direction='row' gap='small'>
              <CheckBox />
              <Text>30天</Text>
            </Box>
            <Text>半年套餐</Text>
            <Box align='end'>
              <Text>￥80</Text>
              <Text size='small' color='text-xweak'><strike>￥160</strike></Text>
            </Box>
          </CardBody>
        </Card>
      </JuJiuMain>
      <Box pad='medium' gap='small' background='background-contrast' flex={false}>
        <Box direction='row' align='end' justify='between'>
          <Text size='small'>已优惠:￥101</Text>
          <Text size='small'>需支付:<Text color='neutral-3'>￥199</Text></Text>
        </Box>
        <Box direction='row' justify='evenly'>
          <Button>
            <Box round direction='row' align='center' pad='small' gap='small' background='#1aad19'>
              <WechatPay size='24' />
              <Text size='small'>确认协议并支付</Text>
            </Box>
          </Button>
          <Button>
            <Box round direction='row' align='center' pad='small' gap='small' background='#1678ff'>
              <Alipay size='24' />
              <Text size='small'>确认协议并支付</Text>
            </Box>
          </Button>
        </Box>
        <Box align='center'>
          <Text size='small'>请阅读<Link href='/doc/cloud-storage-service' passHref legacyBehavior><Anchor label='《云存储服务条款》' /></Link></Text>
        </Box>
      </Box>
    </Box>
  );
}