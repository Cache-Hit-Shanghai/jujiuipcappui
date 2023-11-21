'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChipRecording } from '@/jujiu-ui-components/nextui/core/core-chips';
import { PanControl } from '@/jujiu-ui-components/nextui/ipc/video/panControl';
import {
	StreamingControlBar,
	StreamingControlBar2,
} from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
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
						<div className='absolute right-0 top-0 p-2 h-fit'>
							<StreamingControlBar2 />
						</div>
						<div className='absolute bottom-0 inset-x-0 m-auto p-2 w-fit flex flex-row gap-4'>
							<StreamingControlBar />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
