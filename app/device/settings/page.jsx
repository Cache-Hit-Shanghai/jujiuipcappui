'use client';

import {
	Text,
	Box,
	RadioButtonGroup,
	Nav,
	Button,
	Layer,
	Heading,
	TextArea,
	CheckBox,
	RangeInput,
} from 'grommet';
import { useState } from 'react';
import { IconBack, JuJiuMain } from '../../../components/Components';
import { JuJiuItem, JuJiuItemButton, JuJiuItemLink } from '../../../components/JuJiuItem';

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
				<JuJiuItemButton label='设备名称' value='办3' onClick={() => setOpenAvata(!openAvata)} />
				<JuJiuItemButton label='分组' value='办公室' onClick={() => setOpenName(!openName)} />
				<JuJiuItem label='固件自动升级'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItem label='视频水印(OSD)'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItem label='镜头畸变修正'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItem label='视频宽动态(WDR)'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItem label='设备语音提示'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItem label='设备状态灯'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItem label='画面翻转'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItem label='设备音量'>
					<Box><RangeInput /></Box>
				</JuJiuItem>
				<JuJiuItem label='休眠'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItemLink label='休眠计划' href='/device/settings/dormantPlan' />
				<JuJiuItem label='云台位置校准'>
					<Button primary size='small' label='校准' />
				</JuJiuItem>
				<JuJiuItem label='重启设备'>
					<Button primary size='small' label='重启' />
				</JuJiuItem>
				<JuJiuItemLink label='设备转移' href='/device/settings/transfer' />
				<Button color='status-critical' label='删除设备' />
				{openAvata && (
					<Layer
						position='bottom'
						full='horizontal'
						onClickOutside={() => setOpenAvata(false)}
						responsive={false}
					>
						<Box fill border pad='medium' gap='medium'>
							<Heading
								level={3}
								alignSelf='center'
								margin='none'
							>
								修改设备名称
							</Heading>
							<TextArea value='客3' />
							<Box direction='row' justify='evenly'>
								<Button
									label='取消'
									onClick={() => setOpenAvata(false)}
								/>
								<Button
									label='保存'
									primary
									onClick={() => setOpenAvata(false)}
								/>
							</Box>
						</Box>
					</Layer>
				)}
				{openName && (
					<Layer
						position='bottom'
						full='horizontal'
						onClickOutside={() => setOpenName(false)}
						responsive={false}
					>
						<Box fill border pad='medium' gap='medium'>
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
							<Box direction='row' justify='evenly'>
								<Button
									label='取消'
									onClick={() => setOpenName(false)}
								/>
								<Button label='保存' primary />
							</Box>
						</Box>
					</Layer>
				)}
			</JuJiuMain>
		</Box>
	);
}
