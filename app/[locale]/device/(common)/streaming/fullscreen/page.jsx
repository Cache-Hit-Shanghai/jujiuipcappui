'use client';

import { Video as VideoCanvas, Box, Stack, Text, Tag, Button } from 'grommet';
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
					<Box direction='row' justify='between'>
						<JujiuNav label='办3' />
						<Box direction='row'>
							<Button icon={<ShareRounded />} />
							<Button icon={<SettingsOutline size='24' />} />
						</Box>
					</Box>
					<Box direction='row' justify='end' gap='medium' pad='small'>
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
