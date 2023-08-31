'use client';

import {
	Text,
	Box,
	RadioButtonGroup,
	Nav,
	Button,
	Heading,
	TextArea,
} from 'grommet';
import { useState } from 'react';
import { JuJiuItemButton, JuJiuItemLink } from '@/jujiuuicomponents/new/core_item';
import { IconBack, JuJiuMain, JuJiuLayer } from '@/jujiuuicomponents/new/core_ui';

export default function Page() {
	const [openAvata, setOpenAvata] = useState(false);
	const [openName, setOpenName] = useState(false);

	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>设备设置 - 办3</Text>
			</Nav>
			<JuJiuMain>
				<Heading level={2} margin='none'>功能设置</Heading>
				<JuJiuItemLink label='智能检测' href='/device/settings/ai' />
				<JuJiuItemLink label='声音设置' href='/device/settings/sound' />
				<JuJiuItemLink label='画面设置' href='/device/settings/video' />
				<JuJiuItemLink label='灯光设置' href='/device/settings/light' />
				<JuJiuItemLink label='云台设置' href='/device/settings/platform' />
				<JuJiuItemLink label='日程提醒' href='/device/settings/calendar' />
				{/* <JuJiuItemLink label='录像设置' href='/device/settings/record' /> */}
				<Heading level={2} margin='none'>通用设置</Heading>
				<JuJiuItemButton label='设备名称' value='办3' onClick={() => setOpenAvata(!openAvata)} />
				<JuJiuItemButton label='分组' value='办公室' onClick={() => setOpenName(!openName)} />
				<JuJiuItemLink label='隐私设置' href='/device/settings/privacy' />
				<JuJiuItemLink label='固件升级' href='/device/settings/ota' />
				<JuJiuItemLink label='设备分享' href='/device/settings/sharing' />
				<JuJiuItemLink label='设备转移' href='/device/settings/transfer' />
				<Button color='status-warning' label='重启设备' />
				<Button color='status-critical' label='删除设备' />
				{openAvata && (
					<JuJiuLayer
						onClickOutside={() => setOpenAvata(false)}
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							修改设备名称
						</Heading>
						<TextArea value='客3' />
						<Button
							label='保存'
							primary
							onClick={() => setOpenAvata(false)}
						/>
					</JuJiuLayer>
				)}
				{openName && (
					<JuJiuLayer
						onClickOutside={() => setOpenName(false)}
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							更改设备分组
						</Heading>
						<RadioButtonGroup
							name='deficegroup'
							options={['办公室', '默认分组']}
							value='办公室'
						/>
						<Button label='保存' primary />
					</JuJiuLayer>
				)}
			</JuJiuMain>
		</Box>
	);
}
