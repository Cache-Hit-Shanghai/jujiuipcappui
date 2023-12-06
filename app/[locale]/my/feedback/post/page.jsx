'use client';

import {
	Button,
	Chip,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Textarea,
	Divider,
	User,
} from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

const content = `
## 主要步骤如下
1. 单击“云探”app。
1. 单击摄像机设置小图标。
1. 选择“设置”。
1. 滚动到最下方，选择“转移设备”。
`;

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={t('帮助与反馈')} />
			</MobileHeader>
			<MobileMain>
				<div className='flex gap-2 shrink-0 items-begin'>
					<div>
						<h2>一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题</h2>
						<p className='text-sm text-default-500'>由Jim于2023/07/08创建</p>
					</div>
					<Button size='sm'>编辑</Button>
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
				<Card className='flex-none'>
					<CardHeader className='justify-between'>
						<User
							name='Jane Doe'
							description='VIP level 1'
							avatarProps={{
								src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
							}}
						/>
						<p className='text-default-500'>2023/12/6 23:13</p>
					</CardHeader>
					<Divider />
					<CardBody>
						<p>如何使用“设备转移”功能？</p>
					</CardBody>
				</Card>
				<Card className='flex-none'>
					<CardHeader className='justify-between'>
						<User
							name='Jane Doe'
							description='VIP level 1'
							avatarProps={{
								src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
							}}
						/>
						<p className='text-default-500'>2023/12/7 23:13</p>
					</CardHeader>
					<Divider />
					<CardBody>
						<p>单击“设置”，选择“设备转移”。</p>
					</CardBody>
				</Card>
				<Divider />
				<Card className='flex-none'>
					<CardHeader className='justify-between'>
						<User
							name='Junior Garcia'
							description='VIP level 2'
							avatarProps={{
								src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
							}}
						/>
						添加评论
					</CardHeader>
					<Divider />
					<CardBody className='gap-2'>
						<Textarea />
					</CardBody>
					<CardFooter className='flex justify-end'>
						<Button size='sm' color='primary'>
							评论
						</Button>
					</CardFooter>
				</Card>
			</MobileMain>
		</div>
	);
};
export default Page;
