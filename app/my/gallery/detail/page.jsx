'use client';

import { Box, Nav, Stack } from 'grommet';
import { Trash, ShareRounded, Download, CirclePlay } from 'grommet-icons';
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
        <Box direction='row' justify='evenly' background='background-contrast' flex={false}>
          <IconButton icon={<Download />} label='下载' onClick={() => {}} />
          <IconButton icon={<ShareRounded />} label='分享' onClick={() => {}} />
          <IconButton icon={<Trash />} label='删除' onClick={() => {}} />
        </Box>
      </JuJiuMain>
    </Box>
  );
}