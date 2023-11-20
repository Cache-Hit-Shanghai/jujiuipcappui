'use client';

import { Button, Card, Tabs, Tab, Spinner } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
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
	const [show, setShow] = useState(true);
	useIdleTimer({
		onIdle: () => setShow(false),
		onActive: () => setShow(true),
		timeout: 5000,
	});

	return (
		<div className='h-screen flex flex-col'>
			<div className='flex flex-1 flex-col'>
				<video muted autoPlay loop className='object-contain'>
					<source
						src='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h265/1080/Big_Buck_Bunny_1080_10s_1MB.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
			<motion.div
				className={show ? 'visible' : 'collapse'}
				initial={{ opacity: 0 }}
				animate={show ? { opacity: 1 } : { opacity: 0 }}
				transition={{ ease: 'linear', duration: 0.5 }}
			>
				<NavbarBack
					className='absolute'
					label={t('实时视频') + ' - 办3'}
					onPress={() => {
						screen.orientation.unlock();
						document.exitFullscreen();
					}}
				/>
				<div className='absolute left-0 inset-y-0 m-auto p-2 h-fit'>
					<PanControl />
				</div>
				<div className='absolute bottom-0 inset-x-0 m-auto p-2 w-fit flex flex-row gap-4'>
					<ScreenCopyControl />
					<ChatControl speaking={speaking} onPress={() => setSpeaking(!speaking)} />
				</div>
			</motion.div>
		</div>
	);
}
