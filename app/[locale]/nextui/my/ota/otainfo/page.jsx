'use client';

import { Card, CardBody } from '@nextui-org/react';
import { NavbarBack, LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Update } from '@styled-icons/material/Update';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={'固件升级信息 - 办3'} />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='flex flex-col gap-2'>
						<div className='flex items-center justify-center gap-2'>
							<Update size={48} />
							<div className='flex flex-col items-center'>
								<p>最新版本：15.2.3.4</p>
								<p>当前版本：15.2.3.0</p>
							</div>
						</div>
						<div>
							<h2 className='font-semibold text-2xl'>更新日志：</h2>
							<p>1. 修复已知问题若干。</p>
							<p>2. 新增拉流时断线重连的功能。</p>
						</div>
						<div className='flex justify-center'>
							<LinkButton size='sm' variant='solid' color='primary' href='./updating' label='现在升级' />
						</div>
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
};
export default Page;
