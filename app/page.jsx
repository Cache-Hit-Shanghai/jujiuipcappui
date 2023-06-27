'use client';

import { Grommet, Text, Box, Nav, Menu, Button, Accordion, AccordionPanel, Card, Main } from 'grommet';
import { AddCircle, Chat } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import { AppFooter, IpcCard } from '../components/Components';

export default function Page() {
  const router = useRouter();

  return (<Grommet full>
    <Box fill>
      <Nav direction='row' justify='between' align='center'>
        <Box margin='small'>
          <Text size='large'>云探智能视觉系统</Text>
        </Box>
        <Box direction='row' gap='medium' align='center'>
          <Button icon={<Chat />} onClick={() => router.push('/message')} />
          <Menu
            dropProps={{ align: { top: 'bottom', right: 'right' } }}
            icon={<AddCircle />} items={[
              { label: '绑定设备', onClick: () => router.push('/device/binding') },
              { label: '设备分组', onClick: () => router.push('/device/group') },
            ]}
          />
        </Box>
      </Nav>
      <Main flex={{ grow: 1, shrink: 1 }} overflow='auto'>
        <Accordion>
          <AccordionPanel label={<Text margin='small'>办公室</Text>}>
            <Box gap='small' margin='small'>
              <IpcCard label='办3' imgurl='https://v2.grommet.io/assets/IMG_4245.jpg' />
              <IpcCard label='办5' imgurl='https://i.insider.com/5c796ca426289858f7205ede?width=1136&format=jpeg' />
            </Box>
          </AccordionPanel>
          <AccordionPanel label={<Text margin='small'>默认分组</Text>}>
            <Card></Card>
          </AccordionPanel>
        </Accordion>
      </Main>
      <AppFooter />
    </Box>
  </Grommet>);
}