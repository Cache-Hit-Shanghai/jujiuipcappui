'use client';

import { Button, Image, Badge, Avatar } from '@nextui-org/react';
import { ThemeButton, LinkGroup } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { Envelope } from '@styled-icons/heroicons-outline/Envelope';
import { Cog6Tooth } from '@styled-icons/heroicons-outline/Cog6Tooth';
import { Identification } from '@styled-icons/heroicons-outline/Identification';
import { Suitcase } from '@styled-icons/remix-line/Suitcase';
import { MapPin } from '@styled-icons/remix-line/MapPin';
import { Medal } from '@styled-icons/remix-line/Medal';
import { Share } from '@styled-icons/remix-line/Share';
import { ShoppingCart2 } from '@styled-icons/remix-line/ShoppingCart2';
import { CustomerService } from '@styled-icons/remix-line/CustomerService';
import { Question } from '@styled-icons/remix-line/Question';
import { ArrowUpCircle } from '@styled-icons/remix-line/ArrowUpCircle';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Page() {
	const t = useJuJiuT();

	const linkData0 = [
		{ label: '我的收藏', icon: <Suitcase size={24} />, href: '' },
		{ label: '我的订单', icon: <ShoppingCart2 size={24} />, href: '' },
		{ label: '退换售后', icon: <Medal size={24} />, href: '' },
		{ label: '收货地址', icon: <MapPin size={24} />, href: '', last: true },
	];

	const linkData1 = [
		{ label: '设备分享', icon: <Share size={24} />, href: '' },
		{ label: '固件升级', icon: <ArrowUpCircle size={24} />, href: '' },
		{ label: '联系客服', icon: <CustomerService size={24} />, href: '' },
		{ label: '帮助与反馈', icon: <Question size={24} />, href: '', last: true },
	];

	return (
		<>
			<div className='flex items-center justify-end p-2'>
				<ThemeButton />
				<Button isIconOnly variant='light' as={Link} href=''>
					<Identification size={24} />
				</Button>
				<Button isIconOnly variant='light' as={Link} href='/message'>
					<Badge content='5' color='primary'>
						<Envelope size={24} />
					</Badge>
				</Button>
				<Button isIconOnly variant='light' as={Link} href='./settings'>
					<Cog6Tooth size={24} />
				</Button>
			</div>
			<div className='flex flex-col items-center pb-4 gap-2'>
				<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' className='w-20 h-20 text-large' />
				<p>暴走的鸡腿</p>
				<p>关注: 1 粉丝: 0 好友: 4</p>
			</div>
			<div className='flex flex-col flex-1 px-4 gap-4 overflow-auto'>
				<LinkGroup data={linkData0} />
				<Carousel
					autoPlay
					infiniteLoop
					dynamicHeight
					showArrows={false}
					showStatus={false}
					showThumbs={false}
				>
					<Image src='https://pixelbot.oss-accelerate.aliyuncs.com/my2.jpg' />
					<Image src='https://pixelbot.oss-accelerate.aliyuncs.com/my3.jpg' />
				</Carousel>
				<LinkGroup data={linkData1} />
			</div>
		</>
	);
}
