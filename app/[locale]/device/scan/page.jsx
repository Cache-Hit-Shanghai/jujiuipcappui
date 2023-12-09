'use client';

import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { PhotoAlbum } from '@styled-icons/material/PhotoAlbum';
import { useJuJiuT } from '@/state/translate';
import { Flashlight } from '../../components';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='relative h-screen flex flex-col dark text-foreground bg-background'>
			<MobileHeader className='absolute'>
				<NavbarBack label={t('扫一扫')} />
			</MobileHeader>
			<MobileMain
				className='p-0 bg-[length:20px_20px] bg-repeat'
				style={{
					backgroundImage:
						'linear-gradient(to bottom, transparent 19px, rgba(255, 255, 255, 0.1) 20px), linear-gradient(to right, transparent 19px, rgba(255, 255, 255, 0.1) 20px)',
				}}
			>
				<div className='absolute h-3/5 w-3/5 inset-0 m-auto'>
					<div className='border-t-4 border-l-4 border-[#00ff33] absolute h-6 w-6' />
					<div className='border-t-4 border-r-4 border-[#00ff33] absolute h-6 w-6 right-0' />
					<div className='border-b-4 border-l-4 border-[#00ff33] absolute h-6 w-6 bottom-0' />
					<div className='border-b-4 border-r-4 border-[#00ff33] absolute h-6 w-6 bottom-0 right-0' />
					<motion.div
						className='h-full w-full border-b-4 border-[#00ff33] bg-gradient-to-b from-[#00ff3300] from-50% to-[#00ff333f]'
						initial={{ y: '-100%' }}
						animate={{ y: 0 }}
						transition={{ ease: 'linear', repeat: Infinity, duration: 1.5 }}
					/>
				</div>
			</MobileMain>
			<div className='absolute bottom-0 inset-x-0 py-10 flex flex-row justify-evenly'>
				<Flashlight />
				<Button isIconOnly radius='full'>
					<PhotoAlbum size={24} />
				</Button>
			</div>
		</div>
	);
}
