'use client';

import { useState } from 'react';
import { Text, Tag, Box } from 'grommet';
import { RadialSelected } from 'grommet-icons';
import { RecordControl } from '@/jujiu-ui-components/ipc/video/control';

export function RecordControlDemo({ showTitle }) {
	const [recording, setRecording] = useState(false);

	return (
		<>
			<RecordControl showTitle={showTitle} onClick={() => setRecording(!recording)} />
			<Box
				align='center'
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					visibility: recording ? 'visible' : 'hidden',
				}}
			>
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
		</>
	);
}
