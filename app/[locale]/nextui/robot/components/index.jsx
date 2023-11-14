'use client';

import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useEffect } from 'react';
import { useJuJiuT } from '@/state/translate';
import { Battery2Charge, Walk } from '@styled-icons/remix-fill';
import { Magic } from '@styled-icons/bootstrap/Magic';
import { PhotoIcon, ShareIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function RobotCard() {
	const t = useJuJiuT();
	let map = null;

	useEffect(() => {
		import('@amap/amap-jsapi-loader').then((AMapLoader) =>
			AMapLoader.load({
				key: 'b1573511d4a7de65388ef2e9ee3f804e',
				version: '2.0',
				plugins: [],
			})
				.then((AMap) => {
					map = new AMap.Map('container', {
						viewMode: '2D',
						zoom: 11,
						dragEnable: false,
					});
				})
				.catch((e) => {
					console.log(e);
				})
		);

		return () => {
			map?.destroy();
		};
	}, []);

	return (
		<div>
			<Card>
				<CardBody className='p-0'>
					<div id='container' className='w-full aspect-video' />
				</CardBody>
				<CardFooter>
					<div className=' w-full grid grid-cols-3 gap-y-4'>
						<LinkButton icon={<PhotoIcon className='h-6 w-6' />} label={t('相册')} href='/my/gallery' />
						<LinkButton icon={<MagnifyingGlassIcon className='h-6 w-6' />} label={t('寻宠')} href='' />
						<LinkButton icon={<Magic size={24} />} label={t('逗宠')} href='' />
						<LinkButton icon={<Walk size={24} />} label={t('跟随')} href='' />
						<LinkButton icon={<ShareIcon className='h-6 w-6' />} label={t('分享')} href='/my/sharing' />
						<LinkButton icon={<Battery2Charge size={24} />} label={t('回充')} href='' />
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}