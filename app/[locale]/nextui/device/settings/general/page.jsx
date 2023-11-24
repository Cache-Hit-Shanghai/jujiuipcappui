'use client';

import { Card, CardBody, Input, RadioGroup, Radio, Switch, Slider, Button } from '@nextui-org/react';
import {
	NavbarBack,
	LabeledControl,
	IpDisplay,
	UsnDisplay,
	WiFiDisplay,
	FeaturesDisplay,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { Sleep } from '@/jujiu-ui-components/nextui/ipc/settings/sleep';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='h-screen flex flex-col'>
			<div className='flex items-center justify-between'>
				<NavbarBack label={t('通用设置') + ' - 办3'} />
			</div>
			<div className='flex flex-1 flex-col px-4 gap-4'>
				<Card className='flex-none'>
					<CardBody className='py-0 divide-y divide-divider'>
						<LabeledControl label={t('设备名称')}>
							<div>
								<Input size='sm' labelPlacement='outside' value='办3' />
							</div>
						</LabeledControl>
						<LabeledControl label={t('设备分组')}>
							<RadioGroup>
								<Radio value='defaultGroup'>默认分组</Radio>
								<Radio value='office'>办公室</Radio>
								<Radio value='home'>家</Radio>
							</RadioGroup>
						</LabeledControl>
						<LabeledControl label={t('人形追踪')}>
							<Switch />
						</LabeledControl>
						<LabeledControl label={t('视频水印(OSD)')}>
							<Switch />
						</LabeledControl>
						<LabeledControl label={t('设备音量')}>
							<div className='w-1/2'>
								<Slider size='sm' />
							</div>
						</LabeledControl>
						<LabeledControl label={t('设备状态灯')}>
							<Switch />
						</LabeledControl>
						<LabeledControl label={t('云台位置校准')}>
							<Button size='sm' color='secondary'>
								{t('校准')}
							</Button>
						</LabeledControl>
						<LabeledControl label={t('重启设备')}>
							<Button size='sm' color='secondary'>
								{t('重启')}
							</Button>
						</LabeledControl>
						<Sleep />
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<Button size='sm' color='danger'>
							{t('删除设备')}
						</Button>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
