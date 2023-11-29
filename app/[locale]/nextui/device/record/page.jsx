'use client';

import { Input, Card, CardBody, Switch } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ScreenCopyControl } from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import { DownloadControl } from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import { useJuJiuT } from '@/state/translate';
import { Cloud } from '@styled-icons/material/Cloud';
import { SdStorage } from '@styled-icons/material/SdStorage';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('录像查看') + ' - 办3'} />
			</MobileHeader>
			<MobileMain>
				<div className='bg-black aspect-video'>
					<video muted autoPlay loop className='object-contain'>
						<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
					</video>
				</div>
				<Card className='flex flex-1'>
					<CardBody className='flex flex-col gap-2'>
						<div className='flex flex-row justify-between'>
							<div>
								<Input size='sm' type='date' label={t('请选择日期')} />
							</div>
							<Switch
								size='lg'
								thumbIcon={({ isSelected, className }) =>
									isSelected ? (
										<Cloud size={16} className={className} />
									) : (
										<SdStorage size={16} className={className} />
									)
								}
							/>
						</div>
						<div className='grid grid-cols-3 overflow-auto gap-2'>
							{Array.from({ length: 40 }).map((e, i) => (
								<div key={i} className='bg-black aspect-video'>
									<video className='object-contain'>
										<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
									</video>
								</div>
							))}
						</div>
					</CardBody>
				</Card>
			</MobileMain>
			<div className='flex flex-row justify-evenly py-2'>
				<ScreenCopyControl showLabel />
				<DownloadControl showLabel />
			</div>
		</div>
	);
}
