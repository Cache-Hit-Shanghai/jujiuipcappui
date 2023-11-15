'use client';
import { NavbarBack, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { CameraIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';

const data = [
	{ device: '客厅', size: '150MB', from: '1.0.0', to: '1.1.0' },
	{ device: '办3', size: '100MB', from: '0.1.0', to: '1.1.0' },
	{ device: '办5', size: '50MB', from: '1.0.0', to: '2.1.0' },
];

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'固件升级'}></NavbarBack>
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				{data.map(({ device, size, from, to }, i) => (
					<div key={i} className='flex border-white border-b justify-between items-center gap-2'>
						<div className='flex  items-center gap-2'>
							<CameraIcon width={'48px'} height={'48px'}></CameraIcon>
							<div>
								<p>{device}</p>
								<p>{size}</p>
								<p>
									{from} ~ {to}
								</p>
							</div>
						</div>
						<div>
							<LinkButton
								href='./otainfo'
								label='现在升级'
								className={'rounded-full bg-success h-[36px]'}
							></LinkButton>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Page;
