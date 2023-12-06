'use client';

import { Button } from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { NavbarBack, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChipRecording } from '@/jujiu-ui-components/nextui/core/core-chips';
import { PanControl } from '@/jujiu-ui-components/nextui/ipc/video/panControl';
import {
	StreamingControlBar3,
	StreamingControlBar4,
} from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import { useJuJiuT } from '@/state/translate';
import { AutoFixHigh } from '@styled-icons/material/AutoFixHigh';
import { DirectionsRun } from '@styled-icons/material/DirectionsRun';

export default function Page() {
	const t = useJuJiuT();
	const [show, setShow] = useState(true);
	useIdleTimer({
		onIdle: () => setShow(false),
		onActive: () => setShow(true),
		timeout: 10000,
	});

	return (
		<div className='h-screen flex flex-col'>
			<MobileMain>
				<video muted autoPlay loop className='w-full h-full object-contain'>
					<source
						src='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h265/1080/Big_Buck_Bunny_1080_10s_1MB.mp4'
						type='video/mp4'
					/>
				</video>
			</MobileMain>
			<ChipRecording label='00:02:34' className='absolute top-1 inset-x-0 mx-auto' />
			<AnimatePresence>
				{show && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
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
						<div className='absolute right-0 top-0 p-2 h-fit flex flex-row gap-4'>
							<StreamingControlBar4 />
						</div>
						<div className='absolute right-0 inset-y-0 m-auto p-2 h-fit flex flex-col gap-4'>
							<Button isIconOnly variant='light'>
								<AutoFixHigh size={24} />
							</Button>
							<Button isIconOnly variant='light'>
								<DirectionsRun size={24} />
							</Button>
						</div>
						<div className='absolute bottom-0 inset-x-0 m-auto p-2 w-fit flex flex-row gap-4'>
							<StreamingControlBar3 />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
