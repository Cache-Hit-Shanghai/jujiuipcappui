'use client';

import {
	Text,
	Box,
	Nav,
	Grid,
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
import { PersonFeedback } from '@styled-icons/fluentui-system-regular/PersonFeedback';
import { AppFooter } from '@/app/components';
import { ButtonLink, IconLink, LinkGroup, JuJiuMain, JuJiuCard } from '@/jujiu-ui-components/core/core-ui';
import Masonry from '@mui/lab/Masonry';
import Link, { usePathname, useJuJiuT } from '@/state/translate';

const cardData = [
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2021/03/11/8/2_b0280952776ee9daa0c08d0be2b67abe.png',
		title: '明星生活的另一面',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2019/12/16/10/2_4637a632dbe422afae824fb726603955.jpeg',
		title: '真实评测的好物榜单：八月榜',
	},
	{
		src: 'https://ts1.cn.mm.bing.net/th/id/R-C.5f3b71f1fd7b3912c3f100edcbc91f98?rik=KM80mFjeLgnAnQ&riu=http%3a%2f%2fdownza1.zz314.njxzwh.com%2fsoftbaike%2fandroid%2f2016-10-27%2fd9dfdcfe2783e99e262491fa2af78655.jpg&ehk=KRA9auLJyHb4zyhJuBFmVBfD8wpCk%2blbewjpysbNiZU%3d&risl=&pid=ImgRaw&r=0',
		title: '手机客户端下载',
	},
	{
		src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.jUAuLd6NkWaO25J-nikm9wHaJ5?pid=ImgDet&rs=1',
		title: '小白避坑指南',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2021/03/11/8/2_b0280952776ee9daa0c08d0be2b67abe.png',
		title: '明星生活的另一面',
	},
	{
		src: 'https://android-screenimgs.25pp.com/fs08/2019/12/16/10/2_4637a632dbe422afae824fb726603955.jpeg',
		title: '真实评测的好物榜单：八月榜',
	},
	{
		src: 'https://ts1.cn.mm.bing.net/th/id/R-C.5f3b71f1fd7b3912c3f100edcbc91f98?rik=KM80mFjeLgnAnQ&riu=http%3a%2f%2fdownza1.zz314.njxzwh.com%2fsoftbaike%2fandroid%2f2016-10-27%2fd9dfdcfe2783e99e262491fa2af78655.jpg&ehk=KRA9auLJyHb4zyhJuBFmVBfD8wpCk%2blbewjpysbNiZU%3d&risl=&pid=ImgRaw&r=0',
		title: '手机客户端下载',
	},
	{
		src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.jUAuLd6NkWaO25J-nikm9wHaJ5?pid=ImgDet&rs=1',
		title: '小白避坑指南',
	},
];

function ImageCard({ src, title }) {
	return (
		<Card flex={false}>
			<CardBody flex={false}>
				<Link href='/discovery/item' passHref legacyBehavior>
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
					<Tab title='推荐' />
					<Tab title='直播' />
				</Tabs>
				<Button icon={<Add />} plain primary margin='small' />
			</Nav>
			<JuJiuMain direction='row' wrap overflow='auto'>
				<Masonry columns={2}>
					{cardData.map((datum, i) => (
						<ImageCard key={i} src={datum.src} title={datum.title} />
					))}
				</Masonry>
			</JuJiuMain>
			<AppFooter uiDesign />
		</Box>
	);
}
