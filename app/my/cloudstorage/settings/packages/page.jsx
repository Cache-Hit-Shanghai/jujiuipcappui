'use client';

import { Text, Box, Nav, List, Card, CardHeader, CardBody, CheckBox, Button, Stack, Tag } from 'grommet';
import { Alipay } from '@styled-icons/remix-fill/Alipay';
import { WechatPay } from '@styled-icons/remix-line/WechatPay';
import Link from 'next/link';
import { IconBack, JuJiuMain } from '../../../../../components/Components';
import { JuJiuItem, JuJiuItemButton, JuJiuItemLink } from '../../..//../../components/JuJiuItem';


const packages = [
  { title: '7天月套餐', start: '2023/08/10', end: '2023/09/10', current: true },
  { title: '30天月套餐', start: '2023/09/10', end: '2023/10/10' },
  { title: '30天半年套餐', start: '2023/10/10', end: '2024/04/10' },
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>已购套餐列表</Text>
      </Nav>
      <JuJiuMain gap='medium'>
        <List data={packages} margin={{ vertical: 'small' }}>
          {(datum) => (
            <Box direction='row' gap='small' align='center' justify='between'>
              <Box direction='row' align='center' gap='small'>
                <Text>{datum.title}</Text>
                {datum.current && <Tag size='small' background='status-ok' border={false} value='当前套餐' />}
              </Box>
              <Box>
                <Text size='small' color='text-xweak'>{datum.start}</Text>
                <Text size='small' color='text-xweak'>{datum.end}</Text>
              </Box>
            </Box>
          )}
        </List>
      </JuJiuMain>
    </Box>
  );
}