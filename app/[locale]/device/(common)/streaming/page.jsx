'use client';

import { Text, Box, Video as VideoCanvas, Tabs, Tab, Tag, Stack, Spinner, Button, Heading } from 'grommet';
import { RadialSelected, ShareRounded, StatusCritical, Moon } from 'grommet-icons';
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
	MoreControl,
} from '@/jujiu-ui-components/ipc/video/control';
import { ButtonLink, JuJiuMain, JuJiuLayer } from '@/jujiu-ui-components/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { JujiuNav } from '@/app/components';

function HelpPanel() {
	const t = useJuJiuT();
	return (
		<>
			<Heading level={3} alignSelf='center' margin='none'>
				{t('帮助')}
			</Heading>
			<Text>1. 请分别检查手机和摄像机是否联网正常，若修改过WiFi名称或密码，请重新连接。</Text>
			<Text>2. 若手机和摄像机均联网正常，请等待数分钟后再访问。</Text>
			<Text>3. 请尝试重启路由器。</Text>
			<Text>
				4. 如以上均无法解决，请
				<Link href='/my/feedback' passHref legacyBehavior>
					反馈问题
				</Link>
				。
			</Text>
		</>
	);
}

function StreamPlayerSleep() {
	const t = useJuJiuT();
	const [openHelp, setOpenHelp] = useState(false);

	return (
		<Stack interactiveChild='last'>
			<Box flex={false} background='background-contrast'>
				<VideoCanvas controls={false} style={{ zIndex: '0' }}></VideoCanvas>
			</Box>
			<Box fill justify='between'>
				<Stack>
					<Box direction='row' justify='end'>
						<ButtonLink href='/device/streaming/record' icon={<VideoRecording size='24' />} />
						<ButtonLink href='/device/sharing' icon={<ShareRounded />} />
						<ButtonLink href='/device/settings' icon={<Settings3 size='24' />} />
					</Box>
				</Stack>
				<Box align='center' gap='small' pad='small'>
					<Moon size='large' />
					<Text>{t('设备已休眠')}</Text>
					<Button size='small' primary label={t('唤醒')} />
				</Box>
				<Box align='end'>
					<ButtonLink href='/device/streaming/fullscreen' icon={<PhoneLandscape size='24' />} />
				</Box>
			</Box>
		</Stack>
	);
}

function StreamPlayerError() {
	const t = useJuJiuT();
	const [openHelp, setOpenHelp] = useState(false);

	return (
		<Stack interactiveChild='last'>
			<Box flex={false} background='background-contrast'>
				<VideoCanvas controls={false} style={{ zIndex: '0' }}></VideoCanvas>
			</Box>
			<Box fill justify='between'>
				<Stack>
					<Box direction='row' justify='center'>
						<Tag
							margin='small'
							pad='xsmall'
							size='xsmall'
							border={false}
							background='status-critical'
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
						<ButtonLink href='/device/sharing' icon={<ShareRounded />} />
						<ButtonLink href='/device/settings' icon={<Settings3 size='24' />} />
					</Box>
				</Stack>
				<Box align='center' gap='small' pad='small'>
					<StatusCritical size='large' />
					<Text>{t('无法加载视频流')}</Text>
					<Text>{t('设备已离线，离线时间：2023年9月14日 14:52:30。')}</Text>
					<Button primary label={t('查看帮助')} size='small' onClick={() => setOpenHelp(true)} />
					{openHelp && (
						<JuJiuLayer onClickOutside={() => setOpenHelp(false)}>
							<HelpPanel />
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

function StreamPlayer() {
	return (
		<Stack interactiveChild='last'>
			<Box flex={false} background='background-contrast'>
				<VideoCanvas controls={false} style={{ zIndex: '0' }} muted autoPlay loop>
					<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
				</VideoCanvas>
			</Box>
			<Box fill justify='between'>
				<Stack>
					<Box direction='row' justify='center'>
						<Tag
							margin='small'
							pad='xsmall'
							size='xsmall'
							border={false}
							background='status-critical'
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
				</Box>
				<Box align='end'>
					<ButtonLink href='/device/streaming/fullscreen' icon={<PhoneLandscape size='24' />} />
				</Box>
			</Box>
		</Stack>
	);
}

export default function Page() {
	const t = useJuJiuT();
	const [more, setMore] = useState(false);

	return (
		<Box fill>
			<JujiuNav label={t('实时视频') + ' - 办3'} />
			<JuJiuMain pad='none'>
				<Box fill>
					<Tabs>
						<Tab title='拉流成功'>
							<StreamPlayer />
						</Tab>
						<Tab title='拉流失败'>
							<StreamPlayerError />
						</Tab>
						<Tab title='休眠'>
							<StreamPlayerSleep />
						</Tab>
					</Tabs>
					<Box flex={{ grow: 1, shrink: 1 }} justify='center' align='center'>
						<PanControl />
					</Box>
					<Box direction='row' justify='evenly' background='background-contrast' flex={false}>
						<ScreenCopyControl />
						<RecordControl />
						<ChatControl />
						<MuteControl />
						<MoreControl onClick={() => setMore(true)} />
						{more && (
							<JuJiuLayer onClickOutside={() => setMore(false)}>
								<Box direction='row' gap='medium'>
									<ResolutionControl />
									<ZoomControl />
								</Box>
							</JuJiuLayer>
						)}
					</Box>
				</Box>
			</JuJiuMain>
		</Box>
	);
}
