'use client';

import { Button, Badge, Divider, Tabs, Tab, Spinner } from '@nextui-org/react';
import {
	MoonIcon,
	ArrowTopRightOnSquareIcon,
	Cog6ToothIcon,
	ExclamationTriangleIcon,
} from '@heroicons/react/24/solid';
import { NavbarBack, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChipRecording } from '@/jujiu-ui-components/nextui/core/core-chips';
import { PanControl } from '@/jujiu-ui-components/nextui/ipc/video/panControl';
import { ScreenCopyControl } from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import { AppLogo } from '@/jujiu-ui-components/nextui/ipc/about/brand';
import Link from '@/state/translate';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { Orientation } from '@styled-icons/fluentui-system-filled/Orientation';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='h-screen flex flex-col'>
			<div className='flex items-center justify-between'>
				<NavbarBack label={t('实时视频') + ' - 办3'} />
			</div>
			<div>
				<Tabs fullWidth>
					<Tab key='拉流成功' title='拉流成功'>
						<div className='relative bg-default aspect-video'>
							<video muted autoPlay loop>
								<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
							</video>
							<ChipRecording label='00:02:34' className='absolute top-1 inset-x-0 mx-auto' />
							<Spinner size='lg' className='absolute inset-0 m-auto' />
							<div className='absolute top-1 right-1'>
								<LinkButton
									href='/device/settings/sharing'
									icon={<ArrowTopRightOnSquareIcon className='h-6 w-6' />}
								/>
								<LinkButton href='/device/settings' icon={<Cog6ToothIcon className='h-6 w-6' />} />
							</div>
							<LinkButton
								className='absolute bottom-1 right-1'
								href='/device/streaming/fullscreen'
								icon={<Orientation size={24} />}
							/>
						</div>
					</Tab>
					<Tab key='拉流失败' title='拉流失败'>
						<div className='relative bg-default aspect-video'>
							<video />
							<div className='absolute inset-0 m-auto px-4 gap-y-2 flex flex-col items-center justify-center'>
								<ExclamationTriangleIcon className='h-12 w-12' />
								<p>{t('无法加载视频流')}</p>
								<p className='text-xs text-default-400'>
									{t('设备已离线，离线时间：2023年9月14日 14:52:30。')}
								</p>
							</div>
						</div>
					</Tab>
					<Tab key='拉流休眠' title='拉流休眠'>
						<div className='relative bg-default aspect-video'>
							<video />
							<div className='absolute inset-0 m-auto px-4 gap-y-2 flex flex-col items-center justify-center'>
								<MoonIcon className='h-12 w-12' />
								<p>{t('设备已休眠')}</p>
								<Button color='primary'>{t('唤醒')}</Button>
							</div>
						</div>
					</Tab>
				</Tabs>
			</div>
			<div className='flex flex-1 items-center justify-center overflow-auto'>
				<PanControl
					onClickUp={() => console.log('up clicked.')}
					onClickDown={() => console.log('down clicked.')}
					onClickLeft={() => console.log('left clicked.')}
					onClickRight={() => console.log('right clicked.')}
				/>
			</div>
			<Divider />
			<div className='py-2 flex flex-row justify-evenly'>
				<ScreenCopyControl />
			</div>
		</div>
	);
}
