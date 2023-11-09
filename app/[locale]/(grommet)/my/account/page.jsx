'use client';

import { Text, Box, Avatar, Nav, Button } from 'grommet';
import { User } from 'grommet-icons';
import { useState } from 'react';
import { JuJiuItemRawButton, JuJiuItemButton, JuJiuItemLink } from '@/jujiu-ui-components/core/core-item';
import { JuJiuLayer, IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { ChangeAvatar, ChangeNickname } from '@/jujiu-ui-components/ipc/settings/account';

export default function Page() {
	const [openAvata, setOpenAvata] = useState(false);
	const [openName, setOpenName] = useState(false);
	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>账号设置</Text>
			</Nav>
			<JuJiuMain>
				<JuJiuItemRawButton label='头像' onClick={() => setOpenAvata(!openAvata)}>
					<Avatar background='background'>
						<User color='text-xweak' />
					</Avatar>
				</JuJiuItemRawButton>
				<JuJiuItemButton label='昵称' value='用户12345' onClick={() => setOpenName(!openName)} />
				<JuJiuItemLink label='修改密码' href='/my/account/changePassword' />
				<Button label='退出登录' color='status-warning' />
				<Button label='注销账号' color='status-critical' />
				{openAvata && (
					<JuJiuLayer onClickOutside={() => setOpenAvata(false)}>
						<ChangeAvatar />
					</JuJiuLayer>
				)}
				{openName && (
					<JuJiuLayer onClickOutside={() => setOpenName(false)}>
						<ChangeNickname />
					</JuJiuLayer>
				)}
			</JuJiuMain>
		</Box>
	);
}