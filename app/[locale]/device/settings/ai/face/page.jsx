'use client';

import { Text, Box, Nav, CheckBox, Heading } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuItem, JuJiuItemLink } from '@/jujiuuicomponents/new/core_item';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>人脸识别 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='启用人脸识别'>
					<CheckBox toggle />
				</JuJiuItem>
        {/* <JuJiuItemLink label='人脸管理' href='/device/settings/ai/face/management' /> */}
        <Heading level={2}>功能介绍</Heading>
        <Text color='text-xweak'>用于家庭中人脸识别，通过与录入的人员面部信息比对，智能识别出画面中人物的身份。如果不在使用此功能，可以再设置中关闭，如果想删除信息，可在人脸管理中对以存储的信息进行管理。</Text>
        <Heading level={2}>使用建议</Heading>
        <Text color='text-xweak'>1. 勿在强光照射的环境下使用。</Text>
        <Text color='text-xweak'>2. 侧脸或低头等人脸角度偏离过多的情况，可能会造成漏识别和误识别。</Text>
      </JuJiuMain>
    </Box>
  );
}