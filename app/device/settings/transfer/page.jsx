'use client';

import { Text, Box, Nav, Markdown } from 'grommet';
import { IconBack, JuJiuMain, ButtonLink } from '../../../../components/Components';

const content = `
# 转移设备说明


您正在将此设备转移给其他人，请确认如下事项：


1. 若设备正在分享中，无法转移。
1. 若设备已开通云存储等可以转移的增值服务，相应的服务也会转移；若开通了订阅服务，将取消订阅服务，次月不再扣费续订。
1. 转移时若设备不在线，设备已开通的增值服务转移过去可能是关闭状态。
1. 设备的消息、云录像、人脸库等记录仍保留在原账号下，按原有机制清理。
1. 设备本地保存的所有人脸数据将被清空。
`;

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>设备转让 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <Markdown>{content}</Markdown>
      </JuJiuMain>
      <Box direction='row' margin='small' justify='end' flex={false}>
        <ButtonLink href='/device/settings/transfer/next' label='下一步' />
      </Box>
    </Box>
  );
}