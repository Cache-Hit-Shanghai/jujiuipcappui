'use client';

import { Video, Box, Stack, Text, Tag, Layer, Button, Menu, Nav } from 'grommet';
import { More, RadialSelected, Volume, ClosedCaption } from 'grommet-icons';
import { Call } from '@styled-icons/fluentui-system-regular/Call';
import { ScreenCopyControl, RecordControl, PanControl } from '@/jujiu-ui-components/ipc/video/control';
import { Magic } from '@styled-icons/bootstrap/Magic';
import { FastAcceleration } from '@styled-icons/fluentui-system-filled/FastAcceleration';
import { Pets } from '@styled-icons/material-outlined/Pets';
import { BatteryCharging } from '@styled-icons/ionicons-outline/BatteryCharging';
import { Cameraswitch } from '@styled-icons/material/Cameraswitch';
import { ChargingStation } from '@styled-icons/fa-solid/ChargingStation';
import { EyeTracking } from '@styled-icons/fluentui-system-filled/EyeTracking';
import { VideoRecording } from '@styled-icons/fluentui-system-filled/VideoRecording';
import { IconBack } from '@/jujiu-ui-components/core/core-ui';

export function JujiuNavRobot({ label }) {
	return (
		<Nav direction='row' align='center' justify='between'>
			<Box direction='row' align='center' gap='small'>
				<IconBack />
				<Text>{label}</Text>
				<BatteryCharging size='24' />
			</Box>
			<Box direction='row' align='center' gap='small'>
				<Button icon={<EyeTracking size='24' />} />
				<Button icon={<Pets size='24' />} />
				<Button icon={<ChargingStation size='24' />} />
				<Button icon={<Cameraswitch size='24' />} />
			</Box>
		</Nav>
	);
}

export default function Page() {
	return (
		<Box fill>
			<Stack fill>
				<Box fill background='background-contrast'>
					<Video controls={false} fit='contain' autoPlay mute loop style={{ zIndex: '0' }}>
						<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
					</Video>
				</Box>
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
				<Box fill justify='between'>
					<JujiuNavRobot label='PixelBot' />
					<Box align='end' justify='end'>
						<Button icon={<FastAcceleration size='48' />} />
						<Button icon={<Magic size='48' />} />
					</Box>
					<Box direction='row' justify='center' gap='large' pad='small'>
						<ScreenCopyControl showTitle={false} />
						<RecordControl showTitle={false} />
						<Menu
							dropProps={{ align: { top: 'bottom' } }}
							icon={<More />}
							items={[
								{ icon: <Call size='24' /> },
								{ icon: <Volume /> },
								{ icon: <ClosedCaption /> },
								{ icon: <VideoRecording size='24' /> },
							]}
						/>
					</Box>
				</Box>
			</Stack>
			<Layer plain modal={false} animation='fadeIn' position='left' responsive={false} margin='small'>
				<PanControl />
			</Layer>
		</Box>
	);
}
