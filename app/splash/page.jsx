'use client';

import { Grommet, Text, Box, Heading } from 'grommet';
import { Webcam } from 'grommet-icons';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <Grommet full>
      <Box fill>
        <Box flex={{ grow: 1, shrink: 1 }} align='center' justify='center' gap='medium' background={{
            image: 'url(https://jujiu-prod.oss-cn-shanghai.aliyuncs.com/11242797_49169.svg)',
            opacity: 'medium',
          }}>
          <Box direction='row' align='center' gap='medium'>
            <Webcam color='brand' size='xlarge' />
            <Heading level={1} size='medium'>云探</Heading>
          </Box>
          <Box align='center'>
            <Text size='large'>全球领先的Web视觉系统</Text>
            <Text size='small'>Powered by 雎鸠云<sup>&reg;</sup></Text>
          </Box>
        </Box>
        <Box flex={false} align='center' margin='large'>
          <Text size='large'>云探智能视觉系统<sup>&reg;</sup></Text>
          <Text size='small'>&copy;2021-2023 上海光方迅视科技有线公司 版权所有</Text>
        </Box>
      </Box>
    </Grommet>
  );
}