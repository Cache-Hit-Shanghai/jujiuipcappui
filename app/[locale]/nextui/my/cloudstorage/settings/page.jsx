'use client';

import { Switch, Card, CardBody, Chip } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';

const packages = [
	{ title: '7天月套餐', start: '2023/08/10', end: '2023/09/10', current: true },
	{ title: '30天月套餐', start: '2023/09/10', end: '2023/10/10' },
	{ title: '30天半年套餐', start: '2023/10/10', end: '2024/04/10' },
];

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label='云存储设置' />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='flex flex-row items-center justify-between gap-4'>
						<div>
							<p>云存储服务</p>
							<p className='text-xs text-default-500'>
								云存储服务暂停后，录像将停止上传，服务有效期不会延长。
							</p>
						</div>
						<Switch />
					</CardBody>
				</Card>
				<Card>
					<CardBody className='py-0 divide-y divide-divider'>
						{packages.map(({ title, start, end, current }) => (
							<div
								key={title}
								className='flex justify-between items-center gap-1 p-2 border-solid border-gray-400'
							>
								<div className='flex items-center gap-2'>
									<p className='text-sm'>{title}</p>
									{current && (
										<Chip size='sm' color='primary'>
											当前套餐
										</Chip>
									)}
								</div>
								<div>
									<p className='text-xs text-default-500'>{start}</p>
									<p className='text-xs text-default-500'>{end}</p>
								</div>
							</div>
						))}
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
};
export default Page;
