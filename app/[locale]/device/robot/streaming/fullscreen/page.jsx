'use client';

import { Video as VideoCanvas, Box, Stack, Text, Tag, Layer, Button } from 'grommet';
import { RadialSelected } from 'grommet-icons';
import {
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	RecordControl,
	PanControl,
	ResolutionControl,
	ZoomControl,
} from '@/jujiu-ui-components/ipc/video/control';
import { Magic } from '@styled-icons/bootstrap/Magic';
import { FastAcceleration } from '@styled-icons/fluentui-system-filled/FastAcceleration';
import { JujiuNavRobot } from '@/app/components';

export default function Page() {
	return (
		<Box fill>
			<Stack fill>
				<Box fill background='background-contrast'>
					<VideoCanvas controls={false} fit='contain' autoPlay mute loop style={{ zIndex: '0' }}>
						<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/webm' />
					</VideoCanvas>
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
						<ChatControl showTitle={false} />
						<MuteControl showTitle={false} />
						<ResolutionControl showTitle={false} />
					</Box>
				</Box>
			</Stack>
			<Layer plain modal={false} animation='fadeIn' position='left' responsive={false} margin='small'>
				<PanControl />
			</Layer>
		</Box>
	);
}
