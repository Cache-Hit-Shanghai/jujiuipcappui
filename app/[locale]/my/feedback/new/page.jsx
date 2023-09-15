'use client';

import { Text, Box, TextInput , Nav, TextArea, Button } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';

const content=`
## 主要步骤如下
1. 单击“云探”app。
1. 单击摄像机设置小图标。
1. 选择“设置”。
1. 滚动到最下方，选择“转移设备”。
`;

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>新建问题</Text>
      </Nav>
      <Box margin='small' flex={false}>
        <TextInput placeholder='标题' />
      </Box>
      <JuJiuMain gap='medium'>
        <TextArea fill placeholder='问题描述' />
      </JuJiuMain>
      <Box pad='small' direction='row' flex={false} justify='end'>
        <Button label='提交' />
      </Box>
    </Box>
  );
}