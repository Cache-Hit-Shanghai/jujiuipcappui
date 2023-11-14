'use client';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import Link from '@/state/translate';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { CloudOrSDCard } from '../../components/gallery';

const LinkBoxImage = () => {
	return (
		<Link href='./detail' passHref legacyBehavior>
			<div
				as='a'
				className=' w-full h-full   bg-[url(https://tse2-mm.cn.bing.net/th/id/OIP-C.ke-oC-HNGvr6A7xWstYjsgHaFS?pid=ImgDet&rs=1)] rounded cursor-pointer'
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
				<PlayCircleIcon className='absolute' width={'24px'} height={'24px'} />
			</div>
		</Link>
	);
};

const Page = () => {
	return (
		<div className='flex flex-1 flex-col '>
			<NavbarBack label={'相册（剩余容量100GB）'}>
				<CloudOrSDCard></CloudOrSDCard>
			</NavbarBack>

			<div className='flex flex-col shrink-0 px-4 gap-4 overflow-auto'>
				{[
					{ date: '2023/7/4', Component: LinkBoxVideo, length: 20 },
					{ date: '2023/7/5', Component: LinkBoxImage, length: 20 },
				].map(({ date, length, Component }) => (
					<Card key={date} fullWidth={true}>
						<CardHeader className='bg-zinc-700'>
							<span>{date}</span>
						</CardHeader>
						<CardBody>
							<div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(min(96px,100%),_1fr))] grid-flow-dense auto-rows-[70px] justify-center items-center'>
								{Array.from({ length }, (_, index) => index).map((item) => (
									<Component key={item} />
								))}
							</div>
						</CardBody>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Page;
