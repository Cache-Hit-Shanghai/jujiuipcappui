'use client';
import { NavbarBack, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Update } from 'styled-icons/material';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'固件升级信息 - 办3'} />
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<div className='flex justify-center'>
					<Update width={'64px'} height={'64px'}></Update>
				</div>
				<div className='flex flex-col items-center'>
					<p>最新版本：15.2.3.4</p>
					<p>当前版本：15.2.3.0</p>
				</div>
				<div>
					<h2 className='font-semibold text-2xl'>更新日志：</h2>
					<p>1. 修复已知问题若干。</p>
					<p>2. 新增拉流时断线重连的功能。</p>
				</div>
				<div className='flex justify-center'>
					<LinkButton
						href='./updating'
						label='现在升级'
						className={'rounded-full bg-success h-[36px]'}
					></LinkButton>
				</div>
			</div>
		</div>
	);
};
export default Page;
