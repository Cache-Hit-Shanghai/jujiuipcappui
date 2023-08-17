'use client';

import {
	Text,
	Box,
	Video as VideoCanvas,
	Nav,
	Tabs,
	Tab,
	Tag,
	DateInput,
	RadioButtonGroup,
	Grid,
	Stack,
	Spinner,
} from 'grommet';
import { Camera, Cloud, Sd, Download, RadialSelected, ShareRounded, StatusCritical } from 'grommet-icons';
import { Settings3 } from '@styled-icons/remix-fill/Settings3';
import { PhoneLandscape } from '@styled-icons/bootstrap/PhoneLandscape';
import { useState } from 'react';
import {
	ButtonLink,
	IconBack,
	IconButton,
	PanControl,
	JuJiuMain,
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	RecordControl,
	ResolutionControl,
	ZoomControl,
} from '@/components/Components';

export default function Page() {
	const [value, setValue] = useState(Date.now());

	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>实时视频 - 办3</Text>
			</Nav>
			<JuJiuMain margin='none'>
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
								<ButtonLink href='/device/sharing' icon={<ShareRounded />} />
								<ButtonLink href='/device/settings' icon={<Settings3 size='24' />} />
							</Box>
						</Stack>
						<Box align='center'>
							<Spinner size='large' />
							<StatusCritical size='large' />
							<Text>无法加载视频流。</Text>
						</Box>
						<Box align='end'>
							<ButtonLink href='/device/streaming/fullscreen' icon={<PhoneLandscape size='24' />} />
						</Box>
					</Box>
				</Stack>
				<Tabs flex>
					<Tab title='实时视频'>
						<Box fill>
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
					</Tab>
					<Tab title='录像'>
						<Box fill gap='small'>
							<Box
								direction='row'
								align='center'
								justify='between'
								flex={false}
							>
								<Box
									direction='row'
									align='center'
									background='background-contrast'
									round='xsmall'
								>
									<Text
										margin={{ left: 'small' }}
										weight='bold'
									>
										{value &&
											new Date(
												value
											).toLocaleDateString()}
									</Text>
									<DateInput
										value={
											value &&
											new Date(value).toLocaleDateString()
										}
										onChange={(e) => setValue(e.value)}
									/>
								</Box>
								<Box
									round='xlarge'
									background='background-contrast'
								>
									<RadioButtonGroup
										name='storagetype'
										direction='row'
										options={['Cloud', 'SDCard']}
										value='Cloud'
									>
										{(
											option,
											{ checked, focus, hover }
										) => {
											const Icon =
												option === 'Cloud' ? Cloud : Sd;
											let background;
											if (checked) background = 'brand';
											else if (hover)
												background = 'light-4';
											else if (focus)
												background = 'light-4';
											return (
												<Box
													background={background}
													round='full'
													pad='small'
												>
													<Icon />
												</Box>
											);
										}}
									</RadioButtonGroup>
								</Box>
							</Box>
							<Box flex={{ grow: 1, shrink: 1 }} overflow='auto'>
								<Grid
									fill
									columns='xsmall'
									gap='small'
									align='center'
									justify='center'
									style={{
										gridAutoFlow: 'row dense',
										gridAutoRows: '70px',
									}}
								>
									{Array.from(
										{ length: 37 },
										(_, index) => index
									).map((item) => (
										<Box
											key={item}
											fill
											background='background-contrast'
											round='xsmall'
										/>
									))}
								</Grid>
							</Box>
							<Box
								direction='row'
								justify='evenly'
								background='background-contrast'
								flex={false}
							>
								<IconButton
									icon={<Camera />}
									label='截图'
									onClick={() => {}}
								/>
								<IconButton
									icon={<Download />}
									label='下载'
									onClick={() => {}}
								/>
							</Box>
						</Box>
					</Tab>
				</Tabs>
			</JuJiuMain>
		</Box>
	);
}
