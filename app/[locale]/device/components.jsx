'use client';

import { useState } from 'react';
import { Text, Tag, Box, Layer } from 'grommet';
import { RadialSelected } from 'grommet-icons';
import { RecordControl } from '@/jujiu-ui-components/ipc/video/control';

export function RecordControlDemo({ showTitle, target }) {
	const [recording, setRecording] = useState(false);

	return (
		<>
			<RecordControl showTitle={showTitle} onClick={() => setRecording(!recording)} />
			<Layer
				plain
				modal={false}
				animation='fadeIn'
				position='top'
				responsive={false}
				target={target?.current}
				style={{ minHeight: 0, visibility: recording ? 'visible' : 'hidden' }}
			>
				<Box background={{ color: 'black', opacity: 'medium' }}>
					<Tag
						margin='small'
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
			</Layer>
		</>
	);
}
