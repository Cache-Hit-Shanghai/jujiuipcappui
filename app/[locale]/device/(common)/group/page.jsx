'use client';

import { Text, Box, Button, Nav, Heading, TextInput } from 'grommet';
import { useState } from 'react';
import { JuJiuLayer, IconBack, ButtonGroup, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';

export default function Page() {
	const [openGroupAdd, setOpenGroupAdd] = useState(false);
	const [openGroupEdit, setOpenGroupEdit] = useState(false);

	const editgoups = [
		{
			label: '默认分组',
			disabled: true,
			onClick: () => setOpenGroupEdit(true),
		},
		{ label: '办公室', onClick: () => setOpenGroupEdit(true) },
	];
	const addgroups = [{ label: '添加分组', onClick: () => setOpenGroupAdd(true) }];

	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>设备分组</Text>
			</Nav>
			<JuJiuMain>
				<Box flex={false} gap='medium'>
					<ButtonGroup data={editgoups} />
					<ButtonGroup data={addgroups} />
				</Box>
				{openGroupAdd && (
					<JuJiuLayer onClickOutside={() => setOpenGroupAdd(false)}>
						<Heading level={3} alignSelf='center' margin='none'>
							添加分组
						</Heading>
						<TextInput placeholder='请输入分组名……' />
						<Button label='保存' primary onClick={() => setOpenGroupAdd(false)} />
					</JuJiuLayer>
				)}
				{openGroupEdit && (
					<JuJiuLayer onClickOutside={() => setOpenGroupEdit(false)}>
						<Heading level={3} alignSelf='center' margin='none'>
							分组设置
						</Heading>
						<Box gap='medium'>
							<Text>分组名：</Text>
							<Box direction='row' gap='small' align='center'>
								<Box flex={{ grow: 1, shrink: 1 }}>
									<TextInput value='办公室' />
								</Box>
								<Box flex={false}>
									<Button label='重命名' />
								</Box>
							</Box>
						</Box>
						<Button color='status-critical' label='删除分组' />
					</JuJiuLayer>
				)}
			</JuJiuMain>
		</Box>
	);
}
