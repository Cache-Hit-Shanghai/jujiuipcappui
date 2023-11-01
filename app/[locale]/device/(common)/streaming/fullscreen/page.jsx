'use client';

import { Video, Box, Stack, Text, Tag, Button, Layer } from 'grommet';
import { useState } from 'react';
import { RadialSelected, ShareRounded } from 'grommet-icons';
import { SettingsOutline } from '@styled-icons/evaicons-outline/SettingsOutline';
import {
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	RecordControl,
	PanLayer,
	ResolutionControl,
	ZoomControl,
} from '@/jujiu-ui-components/ipc/video/control';
import { JujiuNav, toggleFullScreen } from '@/app/components';

export default function Page() {
	const [show, setShow] = useState(true);

	return (
		<Box fill background='black'>
			<Stack fill onClick={() => setShow(!show)}>
				<Box fill>
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
				<Box fill justify='between' style={{ visibility: show ? 'visible' : 'hidden' }}></Box>
			</Stack>
			<Layer
				plain
				full='horizontal'
				modal={false}
				animation='fadeIn'
				position='top'
				responsive={false}
				style={{ visibility: show ? 'visible' : 'hidden' }}
			>
				<Box direction='row' justify='between' background={{ color: 'black', opacity: 'medium' }}>
					<JujiuNav label='办3' onClick={() => toggleFullScreen()} />
					<Box direction='row'>
						<Button icon={<ShareRounded />} />
						<Button icon={<SettingsOutline size='24' />} />
					</Box>
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
				<Box direction='row' justify='end' gap='medium' background={{ color: 'black', opacity: 'medium' }}>
					<ScreenCopyControl showTitle={false} />
					<RecordControl showTitle={false} />
					<ChatControl showTitle={false} />
					<MuteControl showTitle={false} />
					<PanLayer />
					<ResolutionControl showTitle={false} />
					<ZoomControl showTitle={false} />
				</Box>
			</Layer>
		</Box>
	);
}
