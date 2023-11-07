'use client';

import { Box } from 'grommet';
import { ButtonLink, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { WiFiBinding } from '@/jujiu-ui-components/ipc/device/binding';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	return (
		<>
			<JuJiuMain align='center'>
				<WiFiBinding />
			</JuJiuMain>
			<Box direction='row' margin='small' justify='end' flex={false}>
				<ButtonLink href='/device/binding/next' label={t('下一步')} />
			</Box>
		</>
	);
}
