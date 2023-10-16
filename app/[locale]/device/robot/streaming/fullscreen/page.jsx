'use client';

import { Video as VideoCanvas, Box, Stack, Text, Tag, Layer } from 'grommet';
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
import { JujiuNav } from '@/app/components';

export default function Page() {
	return (
		<Box fill>
			<Stack fill>
				<Box fill background='background-contrast'>
					<VideoCanvas controls={false} fit='contain' style={{ zIndex: '0' }}>
						<source src='http://techslides.com/demos/sample-videos/small.webm' type='video/webm' />
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
					<JujiuNav label='PixelBot' />
					<Box direction='row' justify='end' gap='large' pad='small'>
						<ScreenCopyControl showTitle={false} />
						<RecordControl showTitle={false} />
						<ChatControl showTitle={false} />
						<MuteControl showTitle={false} />
						<ResolutionControl showTitle={false} />
						<ZoomControl showTitle={false} />
					</Box>
				</Box>
			</Stack>
			<Layer plain modal={false} animation='fadeIn' position='bottom-left' responsive={false} margin='small'>
				<PanControl />
			</Layer>
		</Box>
	);
}
