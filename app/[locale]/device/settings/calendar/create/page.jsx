'use client';

import { Text, Box, Nav, Heading, Button } from 'grommet';
import { IconBack, JuJiuMain, JuJiuLayer } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuItemButton } from '@/jujiuuicomponents/new/core_item';
import { useState } from 'react';


function CalendarTitle({ time, title, repeat }) {
  return (
    <Box>
      <Text>{time} {title}</Text>
      <Text size='xsmall' color='xweak'>{repeat.join(' ')}</Text>
    </Box>
  );
}

export default function Page() {
  const [time, setTime] = useState();
  const [repeat, setRepeat] = useState();
  const [label, setLabel] = useState();

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>添加日程 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItemButton label='提醒时间' onClick={() => setTime(true)} />
        <JuJiuItemButton label='重复执行' onClick={() => setRepeat(true)} />
        <JuJiuItemButton label='标签' onClick={() => setLabel(true)} />
      </JuJiuMain>
      {time && (
					<JuJiuLayer
						onClickOutside={() => setOpenName(false)}
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							选择时间
						</Heading>
						<Button primary label='确定' />
					</JuJiuLayer>
				)}
    </Box>
  );
}