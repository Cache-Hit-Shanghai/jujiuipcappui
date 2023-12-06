'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Button, Link as Anchor, Spacer } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChatBubbleOutline } from '@styled-icons/material/ChatBubbleOutline';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { StarBorder } from '@styled-icons/material/StarBorder';
import { Share } from '@styled-icons/material/Share';
import { CollapseContent } from '@/jujiu-ui-components/icons/collapsecontent';
import { ExpandContent } from '@/jujiu-ui-components/icons/expandcontent';
import Link, { useJuJiuT } from '@/state/translate';

function VideoDescription() {
	const t = useJuJiuT();
	const [expand, setExpand] = useState(false);
	const [hide, setHide] = useState(false);

	return (
		<div className='z-10 flex flex-col gap-2'>
			<motion.div layout className={'flex flex-row items-center gap-2 ' + (hide && 'invisible')}>
				<User
					name='庞大小姐'
					avatarProps={{
						src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
					}}
				/>
				<Button size='sm' radius='full' color='primary'>
					关注
				</Button>
			</motion.div>
			<motion.div className='flex flex-row items-end gap-2'>
				<motion.p
					layout
					className={
						'text-sm text-justify ' + (!expand && 'text-ellipsis line-clamp-2 ') + (hide && 'invisible')
					}
				>
					{!expand && (
						<Anchor
							size='sm'
							onPress={() => setExpand(true)}
							className='float-right mt-5 ml-2'
							style={{
								shapeOutside: 'polygon(100% 70%, 100% 100%, 0% 100%, 100% 70%)',
							}}
						>
							{t('更多')}
						</Anchor>
					)}
					国营常陆海滨公园面临鹿岛滩、座落在从久慈川留出的细沙和北东风形成的沙丘上面。在此附近的海域、来自太平洋冲的暖流和寒流结合、所以在公园里同时可以看到北方系和南方系的动植物。在公园里面、除了一年四季都可以欣赏到各种花卉之外、还有欢快游乐园区、800平方米的“大草原”、“林间体育活动广场”“烧烤广场”等等、距离东京很近、是很有人气的观光地。
				</motion.p>
				{!expand && (
					<Button isIconOnly variant='light' onPress={() => setHide(!hide)}>
						{hide ? <CollapseContent size={24} /> : <ExpandContent size={24} />}
					</Button>
				)}
			</motion.div>
			{expand && (
				<div className='flex flex-row items-center justify-between '>
					<p className='text-xs text-default-500'>12/05 上海</p>
					<Anchor size='sm' onPress={() => setExpand(false)}>
						{t('隐藏')}
					</Anchor>
				</div>
			)}
		</div>
	);
}

export default function Page() {
	return (
		<div className='flex flex-col h-screen'>
			<div className='fixed inset-0'>
				<video autoPlay muted loop className='w-full h-full object-contain'>
					<source
						src='https://assets.mixkit.co/videos/preview/mixkit-avenue-with-trees-buildings-and-fast-cars-at-dusk-34563-large.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
			<MobileHeader>
				<NavbarBack />
				<Button isIconOnly variant='light'>
					<Share size={24} />
				</Button>
			</MobileHeader>
			<MobileMain className='justify-end'>
				<VideoDescription />
			</MobileMain>
			<Spacer y={2} />
			<footer className='p-2 flex flex-row items-center justify-between bg-background opacity-80'>
				<Button size='sm' variant='bordered'>
					发弹幕
				</Button>
				<div className='flex items-center'>
					<Button
						size='sm'
						variant='light'
						startContent={<FavoriteBorder size={24} />}
						as={Link}
						href='#star'
					>
						2166
					</Button>
					<Button size='sm' variant='light' startContent={<StarBorder size={24} />} as={Link} href='#star'>
						4064
					</Button>
					<Button
						size='sm'
						variant='light'
						startContent={<ChatBubbleOutline size={24} />}
						as={Link}
						href='#comments'
					>
						9
					</Button>
				</div>
			</footer>
		</div>
	);
}
