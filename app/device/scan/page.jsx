'use client';

import { Text, Box, Nav, Avatar, Button } from 'grommet';
import { PhotoAlbum } from '@styled-icons/material-rounded/PhotoAlbum';
import { IconBack, JuJiuMain, FlashLight } from '@/components/Components';

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
				<IconBack />
				<Text>扫一扫</Text>
			</Nav>
      <JuJiuMain>
        <Box flex={{ grow: 1, shrink: 1 }} style={{ position: 'relative' }}>
          <Box width='70%' height='70%' margin='auto' border={{ color: 'rgba(0, 255, 51, 0.2)' }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            background={{
              image: 'linear-gradient(to bottom, transparent 19px, rgba(255, 255, 255, 0.1) 20px), linear-gradient(to right, transparent 19px, rgba(255, 255, 255, 0.1) 20px)',
              size: '20px 20px',
              repeat: 'repeat',
            }}
          >
            <Box width='20px' height='20px' border={{ color: '#00ff33', size: 'medium', side: 'top' }} style={{ position: 'absolute', top: 0 }} />
            <Box width='20px' height='20px' border={{ color: '#00ff33', size: 'medium', side: 'left' }} style={{ position: 'absolute', top: 0 }} />
            <Box width='20px' height='20px' border={{ color: '#00ff33', size: 'medium', side: 'top' }} style={{ position: 'absolute', right: 0 }} />
            <Box width='20px' height='20px' border={{ color: '#00ff33', size: 'medium', side: 'right' }} style={{ position: 'absolute', right: 0 }} />
            <Box width='20px' height='20px' border={{ color: '#00ff33', size: 'medium', side: 'bottom' }} style={{ position: 'absolute', bottom: 0 }} />
            <Box width='20px' height='20px' border={{ color: '#00ff33', size: 'medium', side: 'left' }} style={{ position: 'absolute', bottom: 0 }} />
            <Box width='20px' height='20px' border={{ color: '#00ff33', size: 'medium', side: 'bottom' }} style={{ position: 'absolute', right: 0, bottom: 0 }} />
            <Box width='20px' height='20px' border={{ color: '#00ff33', size: 'medium', side: 'right' }} style={{ position: 'absolute', right: 0, bottom: 0 }} />
            <Box height='100%' width='100%' background='linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #00ff33 211%)' border={{ color: '#00ff33', size: '3px', side: 'bottom' }} style={{
                transform: 'translateY(-100%)',
                animation: 'radar-beam 2s infinite',
                animationTimingFunction: 'cubic-bezier(0.53, 0, 0.43, 0.99)',
                animationDelay: '1.4s',
              }} />
            <style>
              {
                `@keyframes radar-beam {
                  0% {
                      transform: translateY(-100%);
                  }
  
                  100% {
                      transform: translateY(0);
                  }
                }`
              }
            </style>
          </Box>
        </Box>
        <Box direction='row' justify='evenly' margin={{ vertical: 'large' }}>
          <FlashLight />
          <Button primary>
            <Avatar border>
              <PhotoAlbum size='24' />
            </Avatar>
          </Button>
        </Box>
      </JuJiuMain>
    </Box>
  );
}
