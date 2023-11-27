'use client';

import { Button, Chip, Card, CardHeader, CardBody, Textarea } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';

const content = `
## 主要步骤如下
1. 单击“云探”app。
1. 单击摄像机设置小图标。
1. 选择“设置”。
1. 滚动到最下方，选择“转移设备”。
`;

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={'帮助与反馈'} />
			</MobileHeader>
			<MobileMain>
				<div className='flex gap-2 shrink-0 items-center'>
					<h2>一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题</h2>
					<Button color='primary'>编辑</Button>
				</div>
				<div className='flex gap-1'>
					<Chip size='sm' color='danger'>
						bug
					</Chip>
					<Chip size='sm' color='primary'>
						建议
					</Chip>
					<Chip size='sm' color='secondary'>
						功能
					</Chip>
					<Chip size='sm' color='success'>
						文档
					</Chip>
					<Chip size='sm' color='warning'>
						帮助
					</Chip>
				</div>
				<Card>
					<CardHeader>
						<p className='text-default-500'>由Jim于2023/07/08创建</p>
					</CardHeader>
					<CardBody>
						<p>如何使用“设备转移”功能？</p>
					</CardBody>
				</Card>
				<Card className='sticky  bottom-0'>
					<CardBody className='gap-4'>
						<Textarea></Textarea>
						<div className='flex justify-end'>
							<Button color='secondary'>发布</Button>
						</div>
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
};
export default Page;
