'use client';

import { Video as VideoCanvas, Box, Stack, Nav, Text, Tag } from 'grommet';
import { RadialSelected } from 'grommet-icons';
import {
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	RecordControl,
	PanLayer,
	ResolutionControl,
	ZoomControl,
} from '@/jujiuuicomponents/Components';
import { IconBack } from '@/jujiuuicomponents/new/core_ui';

export default function Page() {
	return (
		<Box fill>
			<Stack fill>
				<Box fill background='background-contrast'>
					<VideoCanvas
						controls={false}
						fit='contain'
						style={{ zIndex: '0' }}
					>
						<source
							src='http://techslides.com/demos/sample-videos/small.webm'
							type='video/webm'
						/>
					</VideoCanvas>
				</Box>
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
				<Box fill justify='between'>
					<Nav direction='row' align='center'>
						<IconBack />
						<Text>办3</Text>
					</Nav>
					<Box
						direction='row'
						justify='evenly'
						margin={{ vertical: 'medium' }}
					>
						<ScreenCopyControl showTitle={false} />
						<RecordControl showTitle={false} />
						<ChatControl showTitle={false} />
						<MuteControl showTitle={false} />
						<PanLayer />
						<ResolutionControl showTitle={false} />
						<ZoomControl showTitle={false} />
					</Box>
				</Box>
			</Stack>
		</Box>
	);
}