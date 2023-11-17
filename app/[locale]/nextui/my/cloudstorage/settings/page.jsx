'use client';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Switch, Card, CardBody } from '@nextui-org/react';

const packages = [
	{ title: '7天月套餐', start: '2023/08/10', end: '2023/09/10', current: true },
	{ title: '30天月套餐', start: '2023/09/10', end: '2023/10/10' },
	{ title: '30天半年套餐', start: '2023/10/10', end: '2024/04/10' },
];

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'云存储设置'} />
			<div className='flex flex-col grow shrink-0  overflow-auto px-4 gap-4'>
				<div className='flex'>
					<div>
						<p>云存储服务</p>
						<p className='text-xs text-stone-400'>云存储服务暂停后，录像将停止上传，服务有效期不会延长。</p>
					</div>
					<Switch></Switch>
				</div>
				<Card>
					<CardBody>
						{packages.map(({ title, start, end, current }) => (
							<div className='flex justify-between items-center gap-1 p-2 border-b border-solid border-gray-400'>
								<div className='flex items-center gap-1'>
									<p className='text-sm'>{title}</p>
									{current && (
										<p className='h-[22px] rounded-[22px] leading-[22px] bg-emerald-400 text-xs px-2'>
											当前套餐
										</p>
									)}
								</div>
								<div>
									<p className='text-xs text-stone-400'>{start}</p>
									<p className='text-xs text-stone-400'>{end}</p>
								</div>
							</div>
						))}
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
export default Page;
