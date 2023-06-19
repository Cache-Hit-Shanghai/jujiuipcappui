'use client';

import { Grommet, Text, Box, Nav, Menu, Button, Accordion, AccordionPanel, Card, Main } from 'grommet';
import { AddCircle, Chat } from 'grommet-icons';
import { AppFooter, IpcCard } from '../components/Components';

export default function Page() {
  return (<Grommet full>
    <Box fill>
      <Nav direction='row' justify='between' align='center'>
        <Box margin='small'>
          <Text>云探智能摄像机系统</Text>
        </Box>
        <Box direction='row' gap='medium' align='center'>
          <Button icon={<Chat />} href='#' />
          <Menu
            dropProps={{ align: { top: 'bottom', right: 'right' } }}
            icon={<AddCircle />} items={[
              { label: '添加设备' },
              { label: '设备分组' },
            ]}
          />
        </Box>
      </Nav>
      <Main flex={{ grow: 1, shrink: 1 }} overflow='auto'>
        <Accordion>
          <AccordionPanel label={<Text margin='small'>办公室</Text>}>
            <Box gap='small' margin='small'>
              <IpcCard label='办公室摄像机' imgurl='https://v2.grommet.io/assets/IMG_4245.jpg' />
              <IpcCard label='客厅摄像机' imgurl='https://i.insider.com/5c796ca426289858f7205ede?width=1136&format=jpeg' />
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