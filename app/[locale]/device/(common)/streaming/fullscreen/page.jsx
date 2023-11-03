'use client';

import { Video, Box } from 'grommet';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { ShareRounded } from 'grommet-icons';
import { Settings3 } from '@styled-icons/remix-fill/Settings3';
import { ButtonLink } from '@/jujiu-ui-components/core/core-ui';
import {
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	PanControl,
	ResolutionControl,
	ZoomControl,
} from '@/jujiu-ui-components/ipc/video/control';
import { JujiuNav, exitFullscreen } from '@/app/components';
import { RecordControlDemo } from '../../../components';

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
		<Box fill background='black' style={{ position: 'relative', transform: 'scale(1)' }}>
			<Video controls={false} fit='contain' autoPlay mute loop style={{ zIndex: '0' }}>
				<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
			</Video>
			<Box style={{ position: 'absolute', top: 0, left: 0, visibility }}>
				<JujiuNav label='办3' onClick={() => exitFullscreen()} />
			</Box>
			<Box direction='row' style={{ position: 'absolute', top: 0, right: 0, visibility }}>
				<ButtonLink href='/device/sharing' icon={<ShareRounded />} />
				<ButtonLink href='/device/settings' icon={<Settings3 size='24' />} />
			</Box>
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
				<ZoomControl showTitle={false} />
			</Box>
		</Box>
	);
}
