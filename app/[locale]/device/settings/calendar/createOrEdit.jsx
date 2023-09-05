'use client';

import { Text, Box, Nav, Heading, Button, TextInput, Tabs, Tab, List, CheckBox } from 'grommet';
import { IconBack, JuJiuMain, JuJiuLayer, TimeInput } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuItemButton } from '@/jujiuuicomponents/new/core_item';
import { useState } from 'react';


const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六', ];

export const makePage = (title) => function() {
  const [time, setTime] = useState();
  const [openTime, setOpenTime] = useState();
  const [openRepeat, setOpenRepeat] = useState();
  const [openLabel, setOpenLabel] = useState();

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>{title} - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItemButton label='提醒时间' value='07:30' onClick={() => setOpenTime(true)} />
        <JuJiuItemButton label='重复执行' value='2023-09-01 不重复' onClick={() => setOpenRepeat(true)} />
        <JuJiuItemButton label='标签' value='起床' onClick={() => setOpenLabel(true)} />
        <Button primary label={title} />
      </JuJiuMain>
      {openTime && (
					<JuJiuLayer
						onClickOutside={() => setOpenTime(false)}
            position='center'
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							提醒时间设置
						</Heading>
            <TimeInput value={time} onChange={timeValue => {console.log(timeValue); setTime(timeValue)}} />
						<Button primary label='确定' onClick={() => setOpenTime(false)} />
					</JuJiuLayer>
				)}
        {openRepeat && (
					<JuJiuLayer
						onClickOutside={() => setOpenRepeat(false)}
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							重复执行设置
						</Heading>
            <Tabs>
              <Tab title='不重复'>
                <Box>
                  <Box pad={{ vertical: 'medium' }}>
                    <input type='date' value={(new Date()).toISOString().split('T')[0]} />
                  </Box>
                  <Button primary label='确定' onClick={() => setOpenRepeat(false)} />
                </Box>
              </Tab>
              <Tab title='重复'>
    						<Box>
                  <Box pad={{ vertical: 'medium' }}>
                    <List data={days}>
                      {(datum) => (
                        <Box direction='row' align='center' justify='between'>
                          <Text>{datum}</Text>
                          <CheckBox />
                        </Box>
                      )}
                    </List>
                  </Box>
                  <Button primary label='确定' onClick={() => setOpenRepeat(false)} />
                </Box>
              </Tab>
            </Tabs>
					</JuJiuLayer>
				)}
        {openLabel && (
					<JuJiuLayer
						onClickOutside={() => setOpenLabel(false)}
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							标签设置
						</Heading>
            <Box gap='small'>
              <Text>事件：</Text>
              <TextInput placeholder='自定义事件' />
            </Box>
						<Button primary label='确定' onClick={() => setOpenLabel(false)} />
					</JuJiuLayer>
				)}
    </Box>
  );
}