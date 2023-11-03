'use client';

import { Video, Box, Text, Button, Nav } from 'grommet';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { Magic } from '@styled-icons/bootstrap/Magic';
import { FastAcceleration } from '@styled-icons/fluentui-system-filled/FastAcceleration';
import { Pets } from '@styled-icons/material-outlined/Pets';
import { BatteryCharging } from '@styled-icons/ionicons-outline/BatteryCharging';
import { Cameraswitch } from '@styled-icons/material/Cameraswitch';
import { ChargingStation } from '@styled-icons/fa-solid/ChargingStation';
import { EyeTracking } from '@styled-icons/fluentui-system-filled/EyeTracking';
import { IconBack } from '@/jujiu-ui-components/core/core-ui';
import {
	ScreenCopyControl,
	PanControl,
	ResolutionControl,
	ChatControl,
	MuteControl,
} from '@/jujiu-ui-components/ipc/video/control';
import { exitFullscreen } from '@/app/components';
import { RecordControlDemo } from '../../../components';

export function JujiuNavRobot({ label }) {
	return (
		<Nav direction='row' align='center' justify='between'>
			<Box direction='row' align='center' gap='small'>
				<IconBack onClick={() => exitFullscreen()} />
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
	const [show, setShow] = useState(true);
	const visibility = show ? 'visible' : 'hidden';
	useIdleTimer({
		onIdle: () => setShow(false),
		onActive: () => setShow(true),
		timeout: 5000,
		throttle: 500,
	});

	return (
		<Box fill background='black' style={{ position: 'relative' }}>
			<Video controls={false} fit='contain' autoPlay mute loop style={{ zIndex: '0' }}>
				<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
			</Video>
			<Box
				justify='center'
				height='fit-content'
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					bottom: 0,
					margin: 'auto',
					visibility,
				}}
			>
				<PanControl />
			</Box>
			<Box
				direction='row'
				align='center'
				gap='small'
				style={{ position: 'absolute', top: 0, left: 0, visibility }}
			>
				<IconBack onClick={() => exitFullscreen()} />
				<Text>PixelBot</Text>
				<BatteryCharging size='24' />
			</Box>
			<Box direction='row' style={{ position: 'absolute', top: 0, right: 0, visibility }}>
				<Button icon={<EyeTracking size='24' />} />
				<Button icon={<Pets size='24' />} />
				<Button icon={<ChargingStation size='24' />} />
				<Button icon={<Cameraswitch size='24' />} />
			</Box>
			<Box
				justify='center'
				height='fit-content'
				style={{
					position: 'absolute',
					right: 0,
					top: 0,
					bottom: 0,
					margin: 'auto',
					visibility,
				}}
			>
				<Button icon={<FastAcceleration size='48' />} />
				<Button icon={<Magic size='48' />} />
			</Box>
			<Box
				direction='row'
				gap='large'
				justify='center'
				width='fit-content'
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					margin: 'auto',
					visibility,
				}}
			>
				<ScreenCopyControl showTitle={false} />
				<RecordControlDemo showTitle={false} />
				<ChatControl showTitle={false} />
				<MuteControl showTitle={false} />
				<ResolutionControl showTitle={false} />
			</Box>
		</Box>
	);
}
