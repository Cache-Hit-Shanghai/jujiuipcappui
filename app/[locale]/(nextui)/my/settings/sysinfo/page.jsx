'use client';

import { NavbarBack, InfoGroup, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();
	const infos = [
		{ key: t('应用版本'), value: '2023/7/16' },
		{ key: t('App/小程序版本'), value: '1.0.0.2' },
		{ key: t('操作系统'), value: 'Android 10' },
		{ key: 'WebView', value: 'Chrome 114.0.5735.61' },
		{ key: t('注册ID'), value: 'abcdefghijklmn' },
		{
			key: t('用户代理'),
			value:
				'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
		},
	];

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('系统信息')} />
			</MobileHeader>
			<MobileMain>
				<InfoGroup data={infos} />
			</MobileMain>
		</div>
	);
};
export default Page;
