'use client';

import { Text, Box, Nav, Avatar, Button, Accordion, AccordionPanel, Tag, Heading } from 'grommet';
import { AddCircle, Mail } from 'grommet-icons';
import { Torch } from '@styled-icons/boxicons-solid/Torch';
import { PhotoAlbum } from '@styled-icons/boxicons-solid/PhotoAlbum';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IconBack, IpcCard, JuJiuMain } from '../../../components/Components';

export default function Page() {
  const router = useRouter();

  return (
    <Box fill>
      <Nav direction='row' align='center'>
				<IconBack />
				<Text>扫一扫</Text>
			</Nav>
      <JuJiuMain>
        <Box flex={{ grow: 1, shrink: 1 }} border></Box>
        <Box direction='row' justify='evenly' margin={{ vertical: 'large' }}>
          <Avatar border>
            <Torch size='24' />
          </Avatar>
          <Avatar border>
            <PhotoAlbum size='24' />
          </Avatar>
        </Box>
      </JuJiuMain>
    </Box>
  );
}
