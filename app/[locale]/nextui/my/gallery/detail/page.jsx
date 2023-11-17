'use client';

import { NavbarBack, IconButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useSearchParams } from 'next/navigation';
import { PlayCircle } from '@styled-icons/heroicons-outline/PlayCircle';
import { InformationCircle } from '@styled-icons/heroicons-outline/InformationCircle';
import { Share } from '@styled-icons/heroicons-outline/Share';
import { Trash } from '@styled-icons/heroicons-outline/Trash';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();
	const searchParams = useSearchParams();
	const type = searchParams?.get('type');

	return (
		<div className='flex flex-col w-screen h-screen'>
			<NavbarBack />
			<div className='flex flex-col flex-1 py-4 gap-4 '>
				<div className='flex justify-center items-center relative w-full h-full bg-contain bg-center  bg-no-repeat bg-[url(https://tse2-mm.cn.bing.net/th/id/OIP-C.ke-oC-HNGvr6A7xWstYjsgHaFS?pid=ImgDet&rs=1)] '>
					{type && <PlayCircle size={48} />}
				</div>
				<div className='flex shrink-0 justify-center items-center gap-1'>
					<InformationCircle size={24} className='text-warning' />
					<span className='text-xs text-warning'>{t('长按后选择“下载”可以下载图片或者视频。')}</span>
				</div>
				<div className='flex shrink-0 justify-evenly'>
					<IconButton label={t('分享')} href='' icon={<Share size={24} />} />
					<IconButton label={t('删除')} href='' icon={<Trash size={24} />} />
				</div>
			</div>
		</div>
	);
};

export default Page;
