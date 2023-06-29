'use client';

import { Text, Box, Heading } from 'grommet';
import { Webcam } from 'grommet-icons';
import { useRouter } from 'next/navigation';

// 中心渐变效果，留着以后用。
// return (
//   <Grommet full>
//     <Box fill>
//       <Box  flex={{ grow: 1, shrink: 1 }}>
//         <Stack fill>
//           <Box fill background='url(https://jujiu-prod.oss-cn-shanghai.aliyuncs.com/11242797_49169.svg)'
//             style={{
//               'mask': 'radial-gradient(transparent , #fff 100%)',
//               '-webkit-mask': 'radial-gradient(transparent , #fff 100%)',
//             }} />
//           <Box fill align='center' justify='center' gap='medium'>
//             <Box direction='row' align='center' gap='medium'>
//               <Webcam color='brand' size='xlarge' />
//               <Heading level={1} size='medium'>云探</Heading>
//             </Box>
//             <Box align='center'>
//               <Text size='large'>全球领先的Web视觉系统</Text>
//               <Text size='small'>Powered by 雎鸠云<sup>&reg;</sup></Text>
//             </Box>
//           </Box>
//         </Stack>
//       </Box>
//       <Box flex={false} align='center' margin='large'>
//         <Text size='large'>云探智能视觉系统<sup>&reg;</sup></Text>
//         <Text size='small'>&copy;2021-2023 上海光方迅视科技有线公司 版权所有</Text>
//       </Box>
//     </Box>
//   </Grommet>
// );

export default function Page() {
  const router = useRouter();

  return (
    <Box fill>
      <Box flex={{ grow: 1, shrink: 1 }} align='center' justify='center' gap='medium' style={{
        'background-image': 'radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))'
      }} background={{
          image: 'url(https://jujiu-prod.oss-cn-shanghai.aliyuncs.com/11242797_49169.svg)',
          opacity: 'weak',
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
  );
}