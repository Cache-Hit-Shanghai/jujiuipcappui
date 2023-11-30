'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/react';
import Link from '@/state/translate';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { PlayCircleOutline } from '@styled-icons/material/PlayCircleOutline';
import { useJuJiuT } from '@/state/translate';

const LinkBoxImage = () => {
	return (
		<Link href='./detail' passHref legacyBehavior>
			<div
				as='a'
				className='w-full h-full bg-[url(https://tse2-mm.cn.bing.net/th/id/OIP-C.ke-oC-HNGvr6A7xWstYjsgHaFS?pid=ImgDet&rs=1)] rounded cursor-pointer'
			/>
		</Link>
	);
};

const LinkBoxVideo = () => {
	return (
		<Link href='./detail?type=video' passHref legacyBehavior>
			<div
				as='a'
				className='relative w-full h-full flex flex-col justify-center items-center bg-[url(https://tse1-mm.cn.bing.net/th/id/OIP-C.gKVRei8owN-eGgw20kPjwwHaE7?pid=ImgDet&rs=1)] rounded cursor-pointer'
			>
				<PlayCircleOutline className='absolute' size={24} />
			</div>
		</Link>
	);
};

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-1 flex-col '>
			<MobileHeader>
				<NavbarBack label={t('相册') + ' ' + t('剩余容量', { space: 100 })} />
			</MobileHeader>
			<MobileMain>
				{[
					{ date: '2023/7/4', Component: LinkBoxVideo, length: 20 },
					{ date: '2023/7/5', Component: LinkBoxImage, length: 20 },
				].map(({ date, length, Component }) => (
					<Card key={date} fullWidth={true} className='flex-none'>
						<CardHeader>
							<span>{date}</span>
						</CardHeader>
						<CardBody>
							<div className='grid gap-2 grid-cols-[repeat(auto-fill,minmax(min(96px,100%),_1fr))] grid-flow-dense auto-rows-[70px] justify-center items-center'>
								{Array.from({ length }, (_, index) => index).map((item) => (
									<Component key={item} />
								))}
							</div>
						</CardBody>
					</Card>
				))}
			</MobileMain>
		</div>
	);
};

export default Page;
