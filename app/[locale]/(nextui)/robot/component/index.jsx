import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import AMapLoader from '@amap/amap-jsapi-loader';
import { useEffect } from 'react';
import Link, { useJuJiuT } from '@/state/translate';
import { Gallery } from '@styled-icons/remix-line/Gallery';

export function RobotCard() {
	const t = useJuJiuT();
	let map = null;

	useEffect(() => {
		AMapLoader.load({
			key: 'b1573511d4a7de65388ef2e9ee3f804e', // 申请好的Web端开发者Key，首次调用 load 时必填
			version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
			plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
		})
			.then((AMap) => {
				map = new AMap.Map('container', {
					// 设置地图容器id
					viewMode: '2D', // 是否为3D地图模式
					zoom: 11, // 初始化地图级别
				});
			})
			.catch((e) => {
				console.log(e);
			});

		return () => {
			map?.destroy();
		};
	}, []);

	return (
		<Card className='w-full'>
			<CardBody>
				<div id='container' className='w-full aspect-video' />
			</CardBody>
			<CardFooter>
				<div className=' w-full grid grid-cols-3 gap-y-4'>
					<LinkButton icon={<Gallery size={24} />} label={t('相册')} href='/my/gallery' />
					<LinkButton icon={<Gallery size={24} />} label={t('相册')} href='/my/gallery' />
					<LinkButton icon={<Gallery size={24} />} label={t('相册')} href='/my/gallery' />
					<LinkButton icon={<Gallery size={24} />} label={t('相册')} href='/my/gallery' />
					<LinkButton icon={<Gallery size={24} />} label={t('相册')} href='/my/gallery' />
					<LinkButton icon={<Gallery size={24} />} label={t('相册')} href='/my/gallery' />
				</div>
			</CardFooter>
		</Card>
	);
}
