'use client';

import { Input, Card, CardBody, Switch, Spinner } from '@nextui-org/react';
import { NavbarBack, LinkGroup, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
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
				<video muted autoPlay loop>
					<source src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' type='video/mp4' />
				</video>
				<Card className='flex flex-1'>
					<CardBody>
						<div className='flex flex-row justify-between'>
							<div>
								<Input size='sm' type='date' />
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
