'use client';

import { Text, Box, Nav, Menu, Button, Accordion, AccordionPanel } from 'grommet';
import { AddCircle, Mail } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import { AppFooter, IpcCard, JuJiuMain } from '../components/Components';

export default function Page() {
  const router = useRouter();

  return (
    <Box fill>
      <Nav direction='row' justify='between' align='center'>
        <Box margin='small'>
          <Text size='large'>云探智能视觉系统</Text>
        </Box>
        <Box direction='row' gap='small' align='center'>
          <Button icon={<Mail />} onClick={() => router.push('/message')} />
          <Menu
            dropProps={{ align: { top: 'bottom', right: 'right' } }}
            icon={<AddCircle />} items={[
              { label: '绑定设备', onClick: () => router.push('/device/binding') },
              { label: '设备分组', onClick: () => router.push('/device/group') },
              { label: '扫一扫', onClick: () => router.push('#') },
            ]}
          />
        </Box>
      </Nav>
      <JuJiuMain>
        <Accordion>
          <AccordionPanel label={<Text margin='small'>默认分组</Text>}>
            <Box gap='small' margin='small'>
              <IpcCard key={0} label='客厅' imgurl='https://v2.grommet.io/assets/IMG_4245.jpg' />
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