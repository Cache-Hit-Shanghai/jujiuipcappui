'use client';

import { Box, Nav, Stack } from 'grommet';
import { Trash, ShareRounded, CirclePlay } from 'grommet-icons';
import { useSearchParams } from 'next/navigation';
import { IconBack, JuJiuMain, IconButton } from '@/components/Components';
import { JuJiuInformation } from '@/components/JuJiuInformation';


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
        <JuJiuInformation alignSelf='center' label='长按后选择“下载”可以下载图片或者视频。' />
        <Box direction='row' justify='evenly' background='background-contrast' flex={false}>
          <IconButton icon={<ShareRounded />} label='分享' onClick={() => {}} />
          <IconButton icon={<Trash />} label='删除' onClick={() => {}} />
        </Box>
      </JuJiuMain>
    </Box>
  );
}