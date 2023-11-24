'use client';

import { NavbarBack, IconButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useSearchParams } from 'next/navigation';
import { PlayCircle } from '@styled-icons/material/PlayCircle';
import { Info } from '@styled-icons/material/Info';
import { Share } from '@styled-icons/material/Share';
import { DeleteOutline } from '@styled-icons/material/DeleteOutline';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();
	const searchParams = useSearchParams();
	const type = searchParams?.get('type');

	return (
		<div className='flex flex-col w-screen h-screen'>
			<MobileHeader>
				<NavbarBack />
			</MobileHeader>
			<MobileMain className='p-0'>
				<div className='flex justify-center items-center relative w-full h-full bg-contain bg-center  bg-no-repeat bg-[url(https://tse2-mm.cn.bing.net/th/id/OIP-C.ke-oC-HNGvr6A7xWstYjsgHaFS?pid=ImgDet&rs=1)] '>
					{type && <PlayCircle size={48} />}
				</div>
				<div className='p-2 flex shrink-0 justify-center items-center gap-1'>
					<Info size={24} className='text-warning' />
					<span className='text-xs text-warning'>{t('长按后选择“下载”可以下载图片或者视频。')}</span>
				</div>
				<div className='p-2 flex shrink-0 justify-evenly'>
					<IconButton label={t('分享')} href='' icon={<Share size={24} />} />
					<IconButton label={t('删除')} href='' icon={<DeleteOutline size={24} />} />
				</div>
			</MobileMain>
		</div>
	);
};

export default Page;
