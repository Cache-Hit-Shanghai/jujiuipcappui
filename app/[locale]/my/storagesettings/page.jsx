'use client';

import { Text, Box, Nav } from 'grommet';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { JuJiuItem } from '@/jujiu-ui-components/core/core-item';
import { CloudOrSDCard } from '@/app/components';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	return (
		<Box>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>{t('录像截图设置')}</Text>
			</Nav>
			<JuJiuMain>
				<JuJiuItem label={t('录像截图存放到')}>
					<CloudOrSDCard />
				</JuJiuItem>
			</JuJiuMain>
		</Box>
	);
}
