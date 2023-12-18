'use client';

import {
	Tabs,
	Tab,
	User,
	Button,
	Image,
	Card,
	CardBody,
	CardFooter,
} from '@nextui-org/react';
import Masonry from '@mui/lab/Masonry';
import {
	MobileHeader,
	MobileMain,
	NavbarBack,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { Search } from '@styled-icons/material/Search';
import { MotionPhotosOn } from '@styled-icons/material/MotionPhotosOn';

const cardData = [
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2021/03/11/8/2_b0280952776ee9daa0c08d0be2b67abe.png',
		href: '/explore/videoitem',
		title: '明星生活的另一面',
	},
	{
		src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e71020c709637de4bd0b96d3c7aa50b9?rik=w5SFarLizaR2Kg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140529%2f1-140529143K7.jpg&ehk=npIHrLX6sA9tu6squdUi0OwUcG0D4PI9aJZUcvnYhGA%3d&risl=&pid=ImgRaw&r=0',
		href: '/explore/imageitem',
		title: '超萌狗狗',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2019/12/16/10/2_4637a632dbe422afae824fb726603955.jpeg',
		href: '/explore/videoitem',
		title: '真实评测的好物榜单：八月榜',
	},
	{
		src: 'https://ts1.cn.mm.bing.net/th/id/R-C.5f3b71f1fd7b3912c3f100edcbc91f98?rik=KM80mFjeLgnAnQ&riu=http%3a%2f%2fdownza1.zz314.njxzwh.com%2fsoftbaike%2fandroid%2f2016-10-27%2fd9dfdcfe2783e99e262491fa2af78655.jpg&ehk=KRA9auLJyHb4zyhJuBFmVBfD8wpCk%2blbewjpysbNiZU%3d&risl=&pid=ImgRaw&r=0',
		href: '/explore/videoitem',
		title: '手机客户端下载',
	},
	{
		src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.jUAuLd6NkWaO25J-nikm9wHaJ5?pid=ImgDet&rs=1',
		href: '/explore/videoitem',
		title: '小白避坑指南',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2021/03/11/8/2_b0280952776ee9daa0c08d0be2b67abe.png',
		href: '/explore/videoitem',
		title: '明星生活的另一面',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2019/12/16/10/2_4637a632dbe422afae824fb726603955.jpeg',
		href: '/explore/videoitem',
		title: '真实评测的好物榜单：八月榜',
	},
	{
		src: 'https://ts1.cn.mm.bing.net/th/id/R-C.5f3b71f1fd7b3912c3f100edcbc91f98?rik=KM80mFjeLgnAnQ&riu=http%3a%2f%2fdownza1.zz314.njxzwh.com%2fsoftbaike%2fandroid%2f2016-10-27%2fd9dfdcfe2783e99e262491fa2af78655.jpg&ehk=KRA9auLJyHb4zyhJuBFmVBfD8wpCk%2blbewjpysbNiZU%3d&risl=&pid=ImgRaw&r=0',
		href: '/explore/videoitem',
		title: '手机客户端下载',
	},
	{
		src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.jUAuLd6NkWaO25J-nikm9wHaJ5?pid=ImgDet&rs=1',
		href: '/explore/videoitem',
		title: '小白避坑指南',
	},
];

function ImageCard({ src, title, href }) {
	return (
		<Card>
			<CardBody as={Link} href={href} className='p-0'>
				<Image src={src} />
			</CardBody>
			<CardFooter className='flex-col p-2 gap-2 items-start'>
				<p className='text-sm'>{title}</p>
				<div className='w-full flex flex-row items-center justify-between'>
					<User
						name='庞大小姐'
						avatarProps={{
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
							className: 'w-6 h-6 text-tiny',
						}}
						className='text-tiny'
					/>
					<Button
						size='sm'
						variant='light'
						startContent={<FavoriteBorder size={18} />}
						className='p-0'
					>
						<p className='text-tiny'>324</p>
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}

export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<MobileHeader>
				<NavbarBack label={t('我的收藏')} />
				<Button isIconOnly variant='light'>
					<Search size={24} />
				</Button>
			</MobileHeader>
			<MobileMain className='px-0'>
				<Masonry columns={2} style={{ margin: 0 }}>
					{cardData.map((datum, i) => (
						<ImageCard
							key={i}
							src={datum.src}
							title={datum.title}
							href={datum.href}
						/>
					))}
				</Masonry>
			</MobileMain>
		</>
	);
}
