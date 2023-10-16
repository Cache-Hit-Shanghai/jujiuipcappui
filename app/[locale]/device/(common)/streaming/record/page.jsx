'use client';

import { Text, Box, Video as VideoCanvas, DateInput, RadioButtonGroup, Grid } from 'grommet';
import { Camera, Cloud, Sd, Download } from 'grommet-icons';
import { useState } from 'react';
import { IconButton, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { useJuJiuT } from '@/state/translate';
import { JujiuNav } from '@/app/components';

export default function Page() {
	const t = useJuJiuT();
	const [value, setValue] = useState(Date.now());

	return (
		<Box fill>
			<JujiuNav label={t('录像查看') + ' - 办3'} />
			<JuJiuMain pad='none'>
				<Box fill gap='small'>
					<Box flex={false} background='background-contrast'>
						<VideoCanvas controls={false} style={{ zIndex: '0' }}>
							<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/webm' />
						</VideoCanvas>
					</Box>
					<Box direction='row' align='center' justify='between' flex={false}>
						<Box direction='row' align='center' background='background-contrast' round='xsmall'>
							<Text margin={{ left: 'small' }} weight='bold'>
								{value && new Date(value).toLocaleDateString()}
							</Text>
							<DateInput
								value={value && new Date(value).toLocaleDateString()}
								onChange={(e) => setValue(e.value)}
							/>
						</Box>
						<Box round='xlarge' background='background-contrast'>
							<RadioButtonGroup
								name='storagetype'
								direction='row'
								options={['Cloud', 'SDCard']}
								value='Cloud'
							>
								{(option, { checked, focus, hover }) => {
									const Icon = option === 'Cloud' ? Cloud : Sd;
									let background;
									if (checked) background = 'brand';
									else if (hover) background = 'light-4';
									else if (focus) background = 'light-4';
									return (
										<Box background={background} round='full' pad='small'>
											<Icon />
										</Box>
									);
								}}
							</RadioButtonGroup>
						</Box>
					</Box>
					<Box flex={{ grow: 1, shrink: 1 }} overflow='auto'>
						<Grid
							fill
							columns='xsmall'
							gap='small'
							align='center'
							justify='center'
							style={{
								gridAutoFlow: 'row dense',
								gridAutoRows: '70px',
							}}
						>
							{Array.from({ length: 37 }, (_, index) => index).map((item) => (
								<Box key={item} fill background='background-contrast' round='xsmall' />
							))}
						</Grid>
					</Box>
					<Box direction='row' justify='evenly' background='background-contrast' flex={false}>
						<IconButton icon={<Camera />} label={t('截图')} onClick={() => {}} />
						<IconButton icon={<Download />} label={t('下载')} onClick={() => {}} />
					</Box>
				</Box>
			</JuJiuMain>
		</Box>
	);
}
