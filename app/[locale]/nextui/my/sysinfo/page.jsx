'use client';
import { NavbarBack, InfoGroup } from '@/jujiu-ui-components/nextui/core/core-ui';

const infos = [
	{ key: '应用版本', value: '2023/7/16' },
	{ key: 'App/小程序版本', value: '1.0.0.2' },
	{ key: '操作系统', value: 'Android 10' },
	{ key: 'WebView', value: '114.0.5735.61' },
	{
		key: '用户代理',
		value:
			'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
	},
	{ key: '注册ID', value: '' },
];

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'系统信息'}></NavbarBack>
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<InfoGroup data={infos}></InfoGroup>
			</div>
		</div>
	);
};
export default Page;
