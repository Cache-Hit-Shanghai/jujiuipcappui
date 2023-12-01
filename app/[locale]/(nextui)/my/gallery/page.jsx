'use client';

import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { PlayCircleOutline } from '@styled-icons/material/PlayCircleOutline';
import Link, { useJuJiuT } from '@/state/translate';

const LinkBoxImage = () => {
	return (
		<Card as={Link} href='./detail'>
			<Image src='https://tse2-mm.cn.bing.net/th/id/OIP-C.ke-oC-HNGvr6A7xWstYjsgHaFS?pid=ImgDet&rs=1' />
		</Card>
	);
};

const LinkBoxVideo = () => {
	return (
		<Card as={Link} href='./detail?type=video' className='relative'>
			<Image src='https://tse1-mm.cn.bing.net/th/id/OIP-C.gKVRei8owN-eGgw20kPjwwHaE7?pid=ImgDet&rs=1' />
			<PlayCircleOutline className='absolute z-20 inset-0 m-auto' size={24} />
		</Card>
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
							<div className='grid grid-cols-3 gap-2'>
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
