'use client';

import { Button, Card, Tabs, Tab, Spinner } from '@nextui-org/react';
import {
	MoonIcon,
	ArrowTopRightOnSquareIcon,
	Cog6ToothIcon,
	ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { NavbarBack, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChipRecording } from '@/jujiu-ui-components/nextui/core/core-chips';
import { PanControl } from '@/jujiu-ui-components/nextui/ipc/video/panControl';
import { ScreenCopyControl } from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import { Orientation } from '@styled-icons/fluentui-system-filled/Orientation';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='h-screen flex flex-col'>
			<div className='flex items-center justify-between'>
				<NavbarBack label={t('实时视频') + ' - 办3'} />
			</div>
			<div className='flex flex-1 flex-col px-4 gap-4'>
				<Card className='pt-3'>
					<Tabs className='self-center'>
						<Tab key='拉流成功' title='拉流成功'>
							<div className='relative bg-black aspect-video'>
								<video muted autoPlay loop>
									<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
								</video>
								<ChipRecording label='00:02:34' className='absolute top-1 inset-x-0 mx-auto' />
								<Spinner size='lg' className='absolute inset-0 m-auto' />
								<div className='absolute top-1 right-1'>
									<LinkButton
										className='text-white'
										href='/device/settings/sharing'
										icon={<ArrowTopRightOnSquareIcon className='h-6 w-6' />}
									/>
									<LinkButton
										className='text-white'
										href='/device/settings'
										icon={<Cog6ToothIcon className='h-6 w-6' />}
									/>
								</div>
								<LinkButton
									className='absolute bottom-1 right-1 text-white'
									href='/device/streaming/fullscreen'
									icon={<Orientation size={24} />}
								/>
							</div>
						</Tab>
						<Tab key='拉流失败' title='拉流失败'>
							<div className='relative bg-black aspect-video'>
								<video />
								<div className='absolute inset-0 m-auto px-4 gap-y-2 flex flex-col items-center justify-center'>
									<ExclamationTriangleIcon className='h-12 w-12 text-white' />
									<p className='text-white'>{t('无法加载视频流')}</p>
									<p className='text-xs text-default-400'>
										{t('设备已离线，离线时间：2023年9月14日 14:52:30。')}
									</p>
								</div>
							</div>
						</Tab>
						<Tab key='拉流休眠' title='拉流休眠'>
							<div className='relative bg-black aspect-video'>
								<video />
								<div className='absolute inset-0 m-auto px-4 gap-y-2 flex flex-col items-center justify-center'>
									<MoonIcon className='h-12 w-12 text-white' />
									<p className='text-white'>{t('设备已休眠')}</p>
									<Button color='primary'>{t('唤醒')}</Button>
								</div>
							</div>
						</Tab>
					</Tabs>
				</Card>
				<div className='flex flex-1'>
					<Card className='flex flex-1 items-center justify-center'>
						<PanControl
							onClickUp={() => console.log('up clicked.')}
							onClickDown={() => console.log('down clicked.')}
							onClickLeft={() => console.log('left clicked.')}
							onClickRight={() => console.log('right clicked.')}
						/>
					</Card>
				</div>
			</div>
			<div className='py-2 flex flex-row justify-evenly'>
				<ScreenCopyControl />
			</div>
		</div>
	);
}