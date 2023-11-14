'use client';
import { NavbarBack, IconButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useSearchParams } from 'next/navigation';
import { PlayCircleIcon, InformationCircleIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline';

const Page = () => {
	const searchParams = useSearchParams();
	const type = searchParams?.get('type');

	return (
		<div className='flex flex-col w-screen h-screen'>
			<NavbarBack></NavbarBack>
			<div className='flex flex-col flex-1 px-4 gap-4 '>
				<div className='flex justify-center items-center relative w-full h-full bg-contain bg-center  bg-no-repeat bg-[url(https://tse2-mm.cn.bing.net/th/id/OIP-C.ke-oC-HNGvr6A7xWstYjsgHaFS?pid=ImgDet&rs=1)] '>
					{type && <PlayCircleIcon width={'48px'} height={'48px'}></PlayCircleIcon>}
				</div>
				<div className='flex shrink-0 justify-center items-center gap-1'>
					<InformationCircleIcon
						className='stroke-amber-300'
						width={'24px'}
						height={'24px'}
					></InformationCircleIcon>
					<span className='text-xs text-amber-300'>长按后选择“下载”可以下载图片或者视频。</span>{' '}
				</div>
				<div className='flex shrink-0 justify-evenly'>
					<IconButton
						label={'分享'}
						href=''
						icon={<ShareIcon width={'24px'} height={'24px'}></ShareIcon>}
					></IconButton>
					<IconButton
						label={'删除'}
						href=''
						icon={<TrashIcon width={'24px'} height={'24px'}></TrashIcon>}
					></IconButton>
				</div>
			</div>
		</div>
	);
};

export default Page;
