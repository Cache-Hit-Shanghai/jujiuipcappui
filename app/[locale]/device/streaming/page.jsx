'use client';

import {
	Text,
	Box,
	Video as VideoCanvas,
	Nav,
	Tag,
	Stack,
	Spinner,
	Button,
	Heading,
} from 'grommet';
import { RadialSelected, ShareRounded, StatusCritical } from 'grommet-icons';
import { Settings3 } from '@styled-icons/remix-fill/Settings3';
import { PhoneLandscape } from '@styled-icons/bootstrap/PhoneLandscape';
import { VideoRecording } from '@styled-icons/fluentui-system-filled/VideoRecording';
import { useState } from 'react';
import {
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	RecordControl,
	ResolutionControl,
	ZoomControl,
	PanControl,
} from '@/jujiuuicomponents/Components';
import { ButtonLink, IconBack, JuJiuMain, JuJiuLayer } from '@/jujiuuicomponents/new/core_ui';
import Link from '@/state/translate';

export function StreamPlayer() {
	const [openHelp, setOpenHelp] = useState(true);

	return (
		<Stack interactiveChild='last'>
			<Box flex={false} background='background-contrast'>
				<VideoCanvas controls={false} style={{ zIndex: '0' }}>
					<source
						src='http://techslides.com/demos/sample-videos/small.webm'
						type='video/webm'
					/>
				</VideoCanvas>
			</Box>
			<Box fill justify='between'>
				<Stack>
					<Box direction='row' justify='center'>
						<Tag margin='small' pad='xsmall' size='xsmall' border={false} background='status-critical'
							value={
								<Box direction='row' gap='small' align='center'>
									<RadialSelected size='small' />
									<Text size='xsmall'>0:41</Text>
								</Box>
							}
						/>
					</Box>
					<Box direction='row' justify='end'>
						<ButtonLink href='/device/streaming/record' icon={<VideoRecording size='24' />} />
						<ButtonLink href='/device/settings/sharing' icon={<ShareRounded />} />
						<ButtonLink href='/device/settings' icon={<Settings3 size='24' />} />
					</Box>
				</Stack>
				<Box align='center'>
					<Spinner size='large' />
					<StatusCritical size='large' />
					<Text>无法加载视频流。</Text>
					<Text>设备已离线，离线时间：2023年9月14日 14:52:30。</Text>
					<Button primary label='查看帮助' onClick={() => setOpenHelp(true)} />
					{openHelp && (
						<JuJiuLayer
							onClickOutside={() => setOpenHelp(false)}
						>
							<Heading
								level={3}
								alignSelf='center'
								margin='none'
							>
								帮助
							</Heading>
							<Text>1. 请分别检查手机和摄像机是否联网正常，若修改过WiFi名称或密码，请重新连接。</Text>
							<Text>2. 若手机和摄像机均联网正常，请等待数分钟后再访问。</Text>
							<Text>3. 请尝试重启路由器。</Text>
							<Text>4. 如以上均无法解决，请<Link href='/my/feedback' passHref legacyBehavior>反馈问题</Link>。</Text>
						</JuJiuLayer>
					)}
				</Box>
				<Box align='end'>
					<ButtonLink href='/device/streaming/fullscreen' icon={<PhoneLandscape size='24' />} />
				</Box>
			</Box>
		</Stack>
	);
}

export default function Page() {
	const [value, setValue] = useState(Date.now());

	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>实时视频 - 办3</Text>
			</Nav>
			<JuJiuMain margin='none'>
				<Box fill>
					<StreamPlayer />
					<Box flex={{ grow: 1 }} justify='center'>
						<PanControl />
					</Box>
					<Box
						direction='row'
						justify='evenly'
						background='background-contrast'
						flex={false}
					>
						<ScreenCopyControl />
						<RecordControl />
						<ChatControl />
						<MuteControl />
						<ResolutionControl />
						<ZoomControl />
					</Box>
				</Box>
			</JuJiuMain>
		</Box>
	);
}
