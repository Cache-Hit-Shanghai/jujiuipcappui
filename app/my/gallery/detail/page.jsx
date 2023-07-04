'use client';

import { Box, Nav } from 'grommet';
import { Trash, ShareRounded, Download } from 'grommet-icons';
import { IconBack, JuJiuMain, IconButton } from '../../../../components/Components';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
      </Nav>
      <JuJiuMain>
        <Box flex={{ grow: 1, shrink: 1 }} overflow='auto'>
          <Box fill background={{ image: 'url(https://v2.grommet.io/assets/IMG_4245.jpg)', size: 'contain' }} />
          <Box direction='row' justify='evenly' background='background-contrast' flex={false}>
            <IconButton icon={<Download />} label='下载' onClick={() => {}} />
            <IconButton icon={<ShareRounded />} label='分享' onClick={() => {}} />
            <IconButton icon={<Trash />} label='删除' onClick={() => {}} />
          </Box>
        </Box>
      </JuJiuMain>
    </Box>
  );
}