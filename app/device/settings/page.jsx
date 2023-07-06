'use client';

import {
	Text,
	Box,
	RadioButtonGroup,
	Nav,
	Button,
	CardBody,
	Layer,
	Heading,
	TextArea,
	CheckBox,
} from 'grommet';
import { FormNext, Wifi, ChatOption, Run, Pan } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, JuJiuMain, JuJiuCard } from '../../../components/Components';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
	const [openAvata, setOpenAvata] = useState(false);
	const [openName, setOpenName] = useState(false);

	const router = useRouter();

	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>设备设置</Text>
			</Nav>
			<JuJiuMain>
				<JuJiuCard onClick={() => setOpenAvata(!openAvata)}>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备名称</Text>
							<Box direction='row' align='center'>
								<Text size='small'>办3</Text>
								<FormNext color='control' />
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard onClick={() => setOpenName(!openName)}>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>分组</Text>
							<Box direction='row' align='center'>
								<Text size='small'>办公室</Text>
								<FormNext color='control' />
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>型号</Text>
							<Text size='small'>云探1</Text>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>序列号</Text>
							<Text size='small'>GF12345678</Text>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备特性</Text>
							<Box direction='row' gap='small' align='center'>
								<Box align='center'>
									<Wifi />
									<Text size='small'>WiFi</Text>
								</Box>
								<Box align='center'>
									<ChatOption />
									<Text size='small'>双向语音</Text>
								</Box>
								<Box align='center'>
									<Run />
									<Text size='small'>移动侦测</Text>
								</Box>
								<Box align='center'>
									<Pan />
									<Text size='small'>云台</Text>
								</Box>
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备版本</Text>
							<Text size='small'>V1.0.3</Text>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备当前WiFi</Text>
							<Box direction='row' align='center' gap='small'>
								<Wifi />
								<Text size='small'>DX-OFFICE</Text>
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>用户指南</Text>
							<FormNext color='control' />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>固件自动升级</Text>
							<CheckBox toggle />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>视频水印(OSD)</Text>
							<CheckBox toggle />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备语音提示</Text>
							<CheckBox toggle />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备状态灯</Text>
							<CheckBox toggle />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>休眠</Text>
							<CheckBox toggle />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Link href='/device/settings/dormantPlan/' passHref legacyBehavior>
							<Box
								as='a'
								direction='row'
								align='center'
								justify='between'
							>
								<Text>休眠计划</Text>
								<FormNext color='control' />
							</Box>
						</Link>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>画面翻转</Text>
							<FormNext color='control' />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>云台位置校准</Text>
							<FormNext color='control' />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>重启设备</Text>
							<FormNext color='control' />
						</Box>
					</CardBody>
				</JuJiuCard>
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
