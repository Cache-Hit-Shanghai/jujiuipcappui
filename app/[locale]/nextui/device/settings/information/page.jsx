'use client';

import { NavbarBack, TextGroup } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const links = [
		{ label: t('设备型号'), text: 'GC50' },
		{ label: t('序列号'), text: 'GF18374897145' },
		{
			label: t('设备统一SN'),
			text: 'daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT',
		},
		{ label: t('设备特性'), text: 'features' },
		{ label: t('设备固件版本'), text: '1.3.4.6' },
		{ label: t('设备当前WiFi'), text: 'A90_5G' },
		{ label: t('IP地址'), text: ['192.168.100.47', 'fe80::ec1b:1xxf:f475:6481'] },
		{ label: t('MAC地址'), text: 'B0-A4-60-EC-4D-6B' },
		{ label: t('已开机'), text: '1574:41:05', last: true },
	];

	return (
		<div className='h-screen flex flex-col'>
			<div className='flex items-center justify-between'>
				<NavbarBack label={t('设备信息') + ' - 办3'} />
			</div>
			<div className='flex flex-1 flex-col px-4 gap-4'>
				<TextGroup data={links} />
			</div>
		</div>
	);
}
