'use client';

import { Text, Box, Nav, CheckBox } from 'grommet';
import { IconBack, JuJiuMain } from '../../../../components/Components';
import { JuJiuItem, JuJiuItemLink } from '../..//../../components/JuJiuItem';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>云存储设置</Text>
      </Nav>
      <JuJiuMain gap='medium'>
        <JuJiuItem label='云存储服务'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItemLink label='已购套餐列表' href='/my/cloudstorage/settings/packages' />
      </JuJiuMain>
    </Box>
  );
}