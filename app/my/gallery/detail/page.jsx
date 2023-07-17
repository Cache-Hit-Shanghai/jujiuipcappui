'use client';

import { Box, Nav, Stack, Text } from 'grommet';
import { Trash, ShareRounded, CircleInformation, CirclePlay } from 'grommet-icons';
import { useSearchParams } from 'next/navigation';
import { IconBack, JuJiuMain, IconButton } from '../../../../components/Components';


export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams?.get('type');

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
      </Nav>
      <JuJiuMain margin='none'>
        <Box flex={{ grow: 1, shrink: 1 }} overflow='auto'>
          <Stack fill anchor='center'>
            <Box fill background={{ image: 'url(https://tse2-mm.cn.bing.net/th/id/OIP-C.ke-oC-HNGvr6A7xWstYjsgHaFS?pid=ImgDet&rs=1)', size: 'contain' }} />
            {type === 'video' && <Box><CirclePlay size='large' /></Box>}
          </Stack>
        </Box>
        <Box direction='row' align='center' gap='small' margin='medium' alignSelf='center'>
          <CircleInformation color='brand' />
          <Text size='small' color='active'>长按后选择“下载”可以下载图片或者视频。</Text>
        </Box>
        <Box direction='row' justify='evenly' background='background-contrast' flex={false}>
          <IconButton icon={<ShareRounded />} label='分享' onClick={() => {}} />
          <IconButton icon={<Trash />} label='删除' onClick={() => {}} />
        </Box>
      </JuJiuMain>
    </Box>
  );
}