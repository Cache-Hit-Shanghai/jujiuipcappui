'use client';

import { Button, Card, Tabs, Tab, Spinner } from '@nextui-org/react';
import { useState } from 'react';
import { Moon } from '@styled-icons/heroicons-outline/Moon';
import { ArrowTopRightOnSquare } from '@styled-icons/heroicons-outline/ArrowTopRightOnSquare';
import { Cog6Tooth } from '@styled-icons/heroicons-outline/Cog6Tooth';
import { ExclamationTriangle } from '@styled-icons/heroicons-outline/ExclamationTriangle';
import { NavbarBack, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChipRecording } from '@/jujiu-ui-components/nextui/core/core-chips';
import { PanControl } from '@/jujiu-ui-components/nextui/ipc/video/panControl';
import { ScreenCopyControl, ChatControl } from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import { Orientation } from '@styled-icons/fluentui-system-filled/Orientation';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const [speaking, setSpeaking] = useState(false);

	return (
		<div className='relative h-screen flex flex-col'>
			<div className='flex items-center justify-between'>
				<NavbarBack
					label={t('实时视频') + ' - 办3'}
					onPress={() => {
						screen.orientation.unlock();
						document.exitFullscreen();
					}}
				/>
			</div>
			<div className='flex flex-1 flex-col px-4 gap-4'></div>
			<div className='py-2 flex flex-row justify-evenly'></div>
		</div>
	);
}
