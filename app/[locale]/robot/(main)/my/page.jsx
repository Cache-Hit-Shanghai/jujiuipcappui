'use client';

import { Button, Badge, Avatar } from '@nextui-org/react';
import {
	LinkGroup,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { MailOutline } from '@styled-icons/material/MailOutline';
import { Settings } from '@styled-icons/material/Settings';
import { PermIdentity } from '@styled-icons/material/PermIdentity';
import { Share } from '@styled-icons/material/Share';
import { SupportAgent } from '@styled-icons/material/SupportAgent';
import { HelpOutline } from '@styled-icons/material/HelpOutline';
import { Update } from '@styled-icons/material/Update';
import { Favorite } from '@styled-icons/material/Favorite';
import { Star } from '@styled-icons/material/Star';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Page() {
	const t = useJuJiuT();

	const linkData0 = [
		{ label: '我的点赞', icon: <Favorite size={24} />, href: '' },
		{ label: '我的收藏', icon: <Star size={24} />, href: '' },
		{ label: '我的分享', icon: <Share size={24} />, href: '/my/sharing' },
		{ label: '固件升级', icon: <Update size={24} />, href: '/my/ota' },
		{ label: '我的客服', icon: <SupportAgent size={24} />, href: '' },
		{
			label: '帮助与反馈',
			icon: <HelpOutline size={24} />,
			href: '/my/feedback',
		},
	];

	return (
		<>
			<MobileHeader className='justify-end'>
				<Button isIconOnly variant='light' as={Link} href=''>
					<PermIdentity size={24} />
				</Button>
				<Button
					isIconOnly
					variant='light'
					as={Link}
					href='../../device/message'
				>
					<Badge content='5' color='primary'>
						<MailOutline size={24} />
					</Badge>
				</Button>
				<Button isIconOnly variant='light' as={Link} href='./settings'>
					<Settings size={24} />
				</Button>
			</MobileHeader>
			<div className='flex flex-col items-center pb-4 gap-2'>
				<Avatar
					src='https://i.pravatar.cc/150?u=a04258114e29026708c'
					className='w-20 h-20 text-large'
				/>
				<div className='flex flex-col items-center'>
					<p>暴走的鸡腿</p>
					<p className='text-xs text-default-500'>
						{t('Following')}: 1 {t('粉丝')}: 0 {t('好友')}: 4
					</p>
				</div>
			</div>
			<MobileMain>
				<LinkGroup data={linkData0} />
				{/* <Carousel
					autoPlay
					infiniteLoop
					dynamicHeight
					showArrows={false}
					showStatus={false}
					showThumbs={false}
				>
					<Image src='https://pixelbot.oss-accelerate.aliyuncs.com/my2.jpg' />
					<Image src='https://pixelbot.oss-accelerate.aliyuncs.com/my3.jpg' />
				</Carousel> */}
			</MobileMain>
		</>
	);
}
