'use client';

import { Video, Box, Text, Button, Menu, Nav } from 'grommet';
import { useState } from 'react';
import { More, Volume } from 'grommet-icons';
import { Call } from '@styled-icons/fluentui-system-regular/Call';
import { Magic } from '@styled-icons/bootstrap/Magic';
import { FastAcceleration } from '@styled-icons/fluentui-system-filled/FastAcceleration';
import { Pets } from '@styled-icons/material-outlined/Pets';
import { BatteryCharging } from '@styled-icons/ionicons-outline/BatteryCharging';
import { Cameraswitch } from '@styled-icons/material/Cameraswitch';
import { ChargingStation } from '@styled-icons/fa-solid/ChargingStation';
import { EyeTracking } from '@styled-icons/fluentui-system-filled/EyeTracking';
import { VideoRecording } from '@styled-icons/fluentui-system-filled/VideoRecording';
import { IconBack } from '@/jujiu-ui-components/core/core-ui';
import { ScreenCopyControl, PanControl, ResolutionControl } from '@/jujiu-ui-components/ipc/video/control';
import { toggleFullScreen } from '@/app/components';
import { RecordControlDemo } from '../../../components';

export function JujiuNavRobot({ label }) {
	return (
		<Nav direction='row' align='center' justify='between'>
			<Box direction='row' align='center' gap='small'>
				<IconBack onClick={() => toggleFullScreen()} />
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

	return (
		<Box fill background='black' style={{ position: 'relative' }}>
			<Video
				controls={false}
				fit='contain'
				autoPlay
				mute
				loop
				style={{ zIndex: '0' }}
				onClick={() => setShow(!show)}
			>
				<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
			</Video>
			<Box
				justify='center'
				style={{ position: 'absolute', left: 0, top: 0, bottom: 0, visibility: show ? 'visible' : 'hidden' }}
			>
				<PanControl />
			</Box>
			<Box
				style={{ position: 'absolute', top: 0, left: 0, right: 0, visibility: show ? 'visible' : 'hidden' }}
			>
				<JujiuNavRobot label='PixelBot' />
			</Box>
			<Box
				justify='center'
				style={{
					position: 'absolute',
					right: 0,
					top: 0,
					bottom: 0,
					visibility: show ? 'visible' : 'hidden',
				}}
			>
				<Button icon={<FastAcceleration size='48' />} />
				<Button icon={<Magic size='48' />} />
			</Box>
			<Box
				direction='row'
				gap='large'
				justify='center'
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					visibility: show ? 'visible' : 'hidden',
				}}
			>
				<ScreenCopyControl showTitle={false} />
				<RecordControlDemo showTitle={false} />
				<ResolutionControl showTitle={false} />
				<Menu
					dropProps={{ align: { top: 'bottom' } }}
					icon={<More />}
					items={[{ icon: <Call size='24' /> }, { icon: <Volume /> }, { icon: <VideoRecording size='24' /> }]}
				/>
			</Box>
		</Box>
	);
}
