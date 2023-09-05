'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain, ButtonLink } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuItem } from '@/jujiuuicomponents/new/core_item';
import { useRouter } from '@/state/translate';


function CalendarTitle({ time, title, repeat }) {
  return (
    <Box>
      <Text>{time} {title}</Text>
      <Text size='xsmall' color='xweak'>{repeat.join(' ')}</Text>
    </Box>
  );
}

export default function Page() {
  const router = useRouter();

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>日程提醒(3) - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem
          label={<CalendarTitle time='20:45' title='闹钟' repeat={['周一', '周二', '周四', '周六', ]} />}
          onClick={() => router.push('/device/settings/calendar/edit')}
        >
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label={<CalendarTitle time='21:45' title='吃药' repeat={['每天', ]} />}>
					<CheckBox toggle />
				</JuJiuItem>
        <JuJiuItem label={<CalendarTitle time='20:45' title='闹钟' repeat={['2023-08-29', ]} />}>
					<CheckBox toggle />
				</JuJiuItem>
      </JuJiuMain>
      <Box pad='medium'>
        <ButtonLink primary label='添加日程' href='/device/settings/calendar/create' />
      </Box>
    </Box>
  );
}