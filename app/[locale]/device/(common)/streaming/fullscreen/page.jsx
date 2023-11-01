'use client';

import { Video, Box } from 'grommet';
import { useState } from 'react';
import { ShareRounded } from 'grommet-icons';
import { Settings3 } from '@styled-icons/remix-fill/Settings3';
import { VideoRecording } from '@styled-icons/fluentui-system-filled/VideoRecording';
import { ButtonLink } from '@/jujiu-ui-components/core/core-ui';
import {
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	PanLayer,
	ResolutionControl,
	ZoomControl,
} from '@/jujiu-ui-components/ipc/video/control';
import { JujiuNav, toggleFullScreen } from '@/app/components';
import { RecordControlDemo } from '../../../components';

export default function Page() {
	const [show, setShow] = useState(true);

	return (
		<Box fill background='black' style={{ position: 'relative', transform: 'scale(1)' }}>
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
				style={{ position: 'absolute', top: 0, left: 0, right: 0, visibility: show ? 'visible' : 'hidden' }}
			>
				<Box direction='row' justify='between'>
					<JujiuNav label='办3' onClick={() => toggleFullScreen()} />
					<Box direction='row'>
						<ButtonLink href='/device/streaming/record' icon={<VideoRecording size='24' />} />
						<ButtonLink href='/device/sharing' icon={<ShareRounded />} />
						<ButtonLink href='/device/settings' icon={<Settings3 size='24' />} />
					</Box>
				</Box>
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
				<ChatControl showTitle={false} />
				<MuteControl showTitle={false} />
				<PanLayer />
				<ResolutionControl showTitle={false} />
				<ZoomControl showTitle={false} />
			</Box>
		</Box>
	);
}
