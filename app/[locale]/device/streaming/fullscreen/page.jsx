'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { NavbarBack, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
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
		<div className='h-screen flex flex-col dark text-foreground bg-background'>
			<MobileMain className='p-0'>
				<video muted autoPlay loop className='h-full w-full object-contain'>
					<source
						src='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h265/1080/Big_Buck_Bunny_1080_10s_1MB.mp4'
						type='video/mp4'
					/>
				</video>
			</MobileMain>
			<ChipRecording label='00:02:34' className='fixed top-1 inset-x-0 mx-auto' />
			<AnimatePresence>
				{show && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'linear', duration: 0.5 }}
					>
						<NavbarBack
							className='fixed'
							label={t('实时视频') + ' - 办3'}
							onPress={() => {
								screen.orientation.unlock();
								document.exitFullscreen();
							}}
						/>
						<div className='fixed left-0 inset-y-0 m-auto p-2 h-fit'>
							<PanControl />
						</div>
						<div className='fixed right-0 top-0 p-2 h-fit'>
							<StreamingControlBar2 />
						</div>
						<div className='fixed bottom-0 inset-x-0 m-auto p-2 w-fit flex flex-row gap-4'>
							<StreamingControlBar />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
