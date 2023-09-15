'use client';

import { Text, Box, Nav, Menu, Accordion, AccordionPanel, Heading } from 'grommet';
import { AddCircle, Mail, Add, Scan } from 'grommet-icons';
import { Group } from '@styled-icons/fluentui-system-regular/Group';
import Link from '@/state/translate';
import { AppFooter, IpcCard } from '@/jujiuuicomponents/Components';
import { ButtonLink, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { JuJiuTagFromShared, JuJiuTagSharing } from '@/jujiuuicomponents/JuJiuTags';

export default function Page() {
  return (
    <Box fill>
      <Nav align='center' pad='medium'>
				<Text>家人账号绑定</Text>
			</Nav>
      <JuJiuMain>
        <Box>
          <Text>您的账号将与机器人的联系人进行绑定。绑定之后机器人将能够拨打视频电话给您。</Text>
          <Text>机器人名称：<Text weight='bold'>办3</Text></Text>
          <Text>机器人所属账号：<Text weight='bold'>hi-jujiu12</Text></Text>
          <Text>您的账号将要绑定的联系人名称：<Text weight='bold'>弟弟</Text></Text>
        </Box>
        <Box direction='row' gap='medium' justify='center'>
          <ButtonLink primary href='/' label='确定' />
          <ButtonLink href='/' label='取消' />
        </Box>
      </JuJiuMain>
    </Box>
  );
}