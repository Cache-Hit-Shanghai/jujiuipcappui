'use client';

import { Box, Tag } from 'grommet';
import { ButtonLink, AppMark, AppLogo } from '@/jujiuuicomponents/Components';

// 中心渐变效果，留着以后用。
// return (
//   <Grommet full>
//     <Box fill>
//       <Box flex={{ grow: 1, shrink: 1 }}>
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
//         <Text size='small'>&copy;2021-2023 上海光方迅视科技有限公司 版权所有</Text>
//       </Box>
//     </Box>
//   </Grommet>
// );

export default function Page() {
  return (
    <Box fill>
      <Box margin='large' direction='row' justify='end' flex={false}>
        <ButtonLink href='/'>
          <Tag border={false} background='background-contrast' size='small' value='关闭' />
        </ButtonLink>
      </Box>
      <Box flex={{ grow: 1, shrink: 1 }} align='center' justify='center' background={{
        image: 'radial-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url(https://jujiu-prod.oss-accelerate.aliyuncs.com/11242797_49169.svg)',
        opacity: 'medium',
        size: 'cover'
      }}>
        <AppLogo />
      </Box>
      <AppMark />
    </Box>
  );
}