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
        <Box flex={{ grow: 1, shrink: 1 }} style={{ position: 'relative' }} background={{
          image: 'linear-gradient(to bottom, transparent 19px, rgba(255, 255, 255, 0.1) 20px), linear-gradient(to right, transparent 19px, rgba(255, 255, 255, 0.1) 20px)',
          size: '20px 20px',
          repeat: 'repeat',
        }}>
          <Box width='70%' height='70%' margin='auto'
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <Box width='40px' height='40px' border={{ color: 'green', size: 'medium', side: 'topright' }} style={{ position: 'absolute', top: 0 }} />
            <Box width='40px' height='40px' border style={{ position: 'absolute', right: 0 }} />
            <Box width='40px' height='40px' border style={{ position: 'absolute', bottom: 0 }} />
            <Box width='40px' height='40px' border style={{ position: 'absolute', right: 0, bottom: 0 }} />
          </Box>
        </Box>
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
