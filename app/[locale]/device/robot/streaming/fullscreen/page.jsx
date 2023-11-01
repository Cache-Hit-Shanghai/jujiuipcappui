'use client';

import { Video, Box, Text, Layer, Button, Menu, Nav } from 'grommet';
import { useState } from 'react';
import { More, Volume, ClosedCaption } from 'grommet-icons';
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
import { ScreenCopyControl, PanControl } from '@/jujiu-ui-components/ipc/video/control';
import { toggleFullScreen } from '@/app/components';
import { RecordControlDemo } from '../../../components';

export function JujiuNavRobot({ label }) {
	return (
		<Nav direction='row' align='center' justify='between' background={{ color: 'black', opacity: 'medium' }}>
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
		<Box fill background='black'>
			<Box fill onClick={() => setShow(!show)}>
				<Video controls={false} fit='contain' autoPlay mute loop style={{ zIndex: '0' }}>
					<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
				</Video>
			</Box>
			<Layer
				plain
				modal={false}
				animation='fadeIn'
				position='left'
				responsive={false}
				style={{ visibility: show ? 'visible' : 'hidden' }}
			>
				<PanControl />
			</Layer>
			<Layer
				plain
				full='horizontal'
				modal={false}
				animation='fadeIn'
				position='top'
				responsive={false}
				style={{ visibility: show ? 'visible' : 'hidden' }}
			>
				<JujiuNavRobot label='PixelBot' />
			</Layer>
			<Layer
				plain
				modal={false}
				animation='fadeIn'
				position='right'
				responsive={false}
				style={{ visibility: show ? 'visible' : 'hidden' }}
			>
				<Box gap='large' background={{ color: 'black', opacity: 'medium' }}>
					<Button plain icon={<FastAcceleration size='48' />} />
					<Button plain icon={<Magic size='48' />} />
				</Box>
			</Layer>
			<Layer
				plain
				modal={false}
				animation='fadeIn'
				position='bottom'
				responsive={false}
				style={{ minHeight: 0, visibility: show ? 'visible' : 'hidden' }}
			>
				<Box direction='row' gap='large' background={{ color: 'black', opacity: 'medium' }}>
					<ScreenCopyControl showTitle={false} />
					<RecordControlDemo showTitle={false} />
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
			</Layer>
		</Box>
	);
}
