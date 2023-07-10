'use client';

import { Text, Box, Nav, Menu, Button, Accordion, AccordionPanel, Tag, Heading } from 'grommet';
import { AddCircle, Mail } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppFooter, IpcCard, JuJiuMain } from '../components/Components';

export default function Page() {
  const router = useRouter();

  return (
    <Box fill>
      <Nav direction='row' justify='between' align='center' background='background-contrast'>
        <Box margin='small'>
          <Heading level={2} margin='none'>云探智能视觉系统</Heading>
        </Box>
        <Box direction='row' gap='small' align='center'>
          <Link href='/message' passHref legacyBehavior>
            <Button icon={<Mail />} as='a' />
          </Link>
          <Menu
            dropProps={{ align: { top: 'bottom', right: 'right' } }}
            icon={<AddCircle />} items={[
              { label: '绑定设备', onClick: () => router.push('/device/binding') },
              { label: '设备分组', onClick: () => router.push('/device/group') },
              { label: '扫一扫', onClick: () => router.push('/device/scan') },
            ]}
          />
        </Box>
      </Nav>
      <JuJiuMain margin='none'>
        <Accordion>
          <AccordionPanel label={<Text margin='small'>默认分组</Text>}>
            <Box gap='small' margin='small'>
              <IpcCard key={0} label={<Box direction='row' align='center' gap='large'><Text>客厅</Text><Tag value='来自分享' size='xsmall' background='control' /></Box>} imgurl='https://v2.grommet.io/assets/IMG_4245.jpg' />
            </Box>
          </AccordionPanel>
          <AccordionPanel label={<Text margin='small'>办公室</Text>}>
            <Box gap='small' margin='small'>
              <IpcCard key={1} label='办3' imgurl='https://v2.grommet.io/assets/IMG_4245.jpg' />
              <IpcCard key={2} label='办5' imgurl='https://i.insider.com/5c796ca426289858f7205ede?width=1136&format=jpeg' />
              <IpcCard key={3} label='办7' imgurl='https://v2.grommet.io/assets/IMG_4245.jpg' />
              <IpcCard key={4} label='办9' imgurl='https://i.insider.com/5c796ca426289858f7205ede?width=1136&format=jpeg' />
            </Box>
          </AccordionPanel>
        </Accordion>
      </JuJiuMain>
      <AppFooter />
    </Box>
  );
}