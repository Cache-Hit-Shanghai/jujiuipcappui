'use client';

import { Text, Box, Heading, Button } from 'grommet';
import { Alert } from 'grommet-icons';
import Link from 'next/link';


export default function Page() {
  return (
    <Box fill>
      <Box flex={{ grow: 1, shrink: 1 }} align='center' justify='center' gap='medium' pad='medium'>
        <Box direction='row' align='center' gap='medium'>
          <Alert color='status-error' size='large' />
          <Heading level={1} size='medium'>出错啦！</Heading>
        </Box>
        <Box align='center'>
          <Text size='large'>404 - 页面不存在</Text>
          <Text size='small' color='placeholder'>您访问的页面有可能被移到了其它位置，页面名称发生了改变，或者暂时不可访问。</Text>
        </Box>
        <Box>
          <Link href='/' passHref legacyBehavior>
            <Button primary as='a' label='回到主页' />
          </Link>
        </Box>
      </Box>
      <Box flex={false} align='center' margin='large'>
        <Text size='large'>云探智能视觉系统<sup>&reg;</sup></Text>
        <Text size='xsmall'>&copy;2021-2023 上海光方迅视科技有限公司 版权所有</Text>
      </Box>
    </Box>
  );
}