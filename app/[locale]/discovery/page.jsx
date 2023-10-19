'use client';

import {
	Text,
	Box,
	Nav,
	Button,
	Tabs,
	Tab,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Image,
	Avatar,
} from 'grommet';
import { Add, Search, UserFemale, Favorite } from 'grommet-icons';
import { AppFooter } from '@/app/components';
import { JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import Masonry from '@mui/lab/Masonry';
import Link from '@/state/translate';

const cardData = [
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2021/03/11/8/2_b0280952776ee9daa0c08d0be2b67abe.png',
		nextPage: '/discovery/videoitem',
		title: '明星生活的另一面',
	},
	{
		src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e71020c709637de4bd0b96d3c7aa50b9?rik=w5SFarLizaR2Kg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140529%2f1-140529143K7.jpg&ehk=npIHrLX6sA9tu6squdUi0OwUcG0D4PI9aJZUcvnYhGA%3d&risl=&pid=ImgRaw&r=0',
		nextPage: '/discovery/imageitem',
		title: '超萌狗狗',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2019/12/16/10/2_4637a632dbe422afae824fb726603955.jpeg',
		nextPage: '/discovery/videoitem',
		title: '真实评测的好物榜单：八月榜',
	},
	{
		src: 'https://ts1.cn.mm.bing.net/th/id/R-C.5f3b71f1fd7b3912c3f100edcbc91f98?rik=KM80mFjeLgnAnQ&riu=http%3a%2f%2fdownza1.zz314.njxzwh.com%2fsoftbaike%2fandroid%2f2016-10-27%2fd9dfdcfe2783e99e262491fa2af78655.jpg&ehk=KRA9auLJyHb4zyhJuBFmVBfD8wpCk%2blbewjpysbNiZU%3d&risl=&pid=ImgRaw&r=0',
		nextPage: '/discovery/videoitem',
		title: '手机客户端下载',
	},
	{
		src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.jUAuLd6NkWaO25J-nikm9wHaJ5?pid=ImgDet&rs=1',
		nextPage: '/discovery/videoitem',
		title: '小白避坑指南',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2021/03/11/8/2_b0280952776ee9daa0c08d0be2b67abe.png',
		nextPage: '/discovery/videoitem',
		title: '明星生活的另一面',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2019/12/16/10/2_4637a632dbe422afae824fb726603955.jpeg',
		nextPage: '/discovery/videoitem',
		title: '真实评测的好物榜单：八月榜',
	},
	{
		src: 'https://ts1.cn.mm.bing.net/th/id/R-C.5f3b71f1fd7b3912c3f100edcbc91f98?rik=KM80mFjeLgnAnQ&riu=http%3a%2f%2fdownza1.zz314.njxzwh.com%2fsoftbaike%2fandroid%2f2016-10-27%2fd9dfdcfe2783e99e262491fa2af78655.jpg&ehk=KRA9auLJyHb4zyhJuBFmVBfD8wpCk%2blbewjpysbNiZU%3d&risl=&pid=ImgRaw&r=0',
		nextPage: '/discovery/videoitem',
		title: '手机客户端下载',
	},
	{
		src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.jUAuLd6NkWaO25J-nikm9wHaJ5?pid=ImgDet&rs=1',
		nextPage: '/discovery/videoitem',
		title: '小白避坑指南',
	},
];

function ImageCard({ src, title, nextPage }) {
	return (
		<Card flex={false}>
			<CardBody flex={false}>
				<Link href={nextPage} passHref legacyBehavior>
					<Image src={src} fill='horizontal' />
				</Link>
			</CardBody>
			<CardHeader background='background-contrast'>
				<Box pad='small'>
					<Text size='small'>{title}</Text>
				</Box>
			</CardHeader>
			<CardFooter background='background-contrast'>
				<Box fill pad='small' direction='row' justify='between'>
					<Box direction='row' gap='small' align='center'>
						<Avatar border size='small'>
							<UserFemale color='text-strong' size='small' />
						</Avatar>
						<Text size='xsmall'>庞大小姐</Text>
					</Box>
					<Box direction='row' align='center' gap='small'>
						<Favorite size='small' />
						<Text size='xsmall'>375</Text>
					</Box>
				</Box>
			</CardFooter>
		</Card>
	);
}

export default function Page() {
	return (
		<Box fill>
			<Nav direction='row' margin='small' align='center' justify='between'>
				<Button icon={<Search />} />
				<Tabs>
					<Tab title='关注' />
					<Tab title='发现' />
					<Tab title='周边' />
				</Tabs>
				<Button icon={<Add />} plain primary margin='small' />
			</Nav>
			<Box pad='small' direction='row' gap='medium'>
				<Text size='small'>推荐</Text>
				<Text size='small'>视频</Text>
				<Text size='small'>直播</Text>
				<Text size='small'>猫猫</Text>
				<Text size='small'>狗狗</Text>
				<Text size='small'>鸟类</Text>
				<Text size='small'>爬行类</Text>
				<Text size='small'>其它</Text>
			</Box>
			<JuJiuMain direction='row' wrap overflow='auto'>
				<Masonry columns={2}>
					{cardData.map((datum, i) => (
						<ImageCard key={i} src={datum.src} title={datum.title} nextPage={datum.nextPage} />
					))}
				</Masonry>
			</JuJiuMain>
			<AppFooter uiDesign />
		</Box>
	);
}
