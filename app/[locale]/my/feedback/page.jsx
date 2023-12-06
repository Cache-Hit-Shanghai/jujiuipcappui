'use client';

import {
	Button,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Link,
	Input,
	Chip,
	Pagination,
	Card,
	CardBody,
	Spacer,
} from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Article } from '@styled-icons/material/Article';
import { MoreHoriz } from '@styled-icons/material/MoreHoriz';
import { PostAdd } from '@styled-icons/material/PostAdd';
import { Reply } from '@styled-icons/material/Reply';
import { Search } from '@styled-icons/material/Search';
import LocalizedLink from '@/state/translate';

const data = [
	{ title: '如何使用“设备转移”？', createdBy: 'Jim', date: '2023/7/1' },
	{ title: '云端费用如何计算？', createdBy: 'Jim', date: '2023/7/1' },
	{ title: '摄像机硬件如何保养？', createdBy: 'Tony', date: '2023/7/1' },
	{
		title: '是否可以把摄像机共享给家人？',
		createdBy: 'Jack',
		date: '2023/7/1',
	},
	{
		title: '一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题',
		createdBy: 'Lisa',
		date: '2023/7/1',
	},
	{ title: '如何使用“设备转移”1？', createdBy: 'Jim', date: '2023/7/1' },
	{ title: '云端费用如何计算？1', createdBy: 'Jim', date: '2023/7/1' },
	{ title: '摄像机硬件如何保养？1', createdBy: 'Tony', date: '2023/7/1' },
	{
		title: '是否可以把摄像机共享给家人？1',
		createdBy: 'Jack',
		date: '2023/7/1',
	},
	{
		title: '一个非常非常长的标题一个非常非常长的标题一个非常非常长的标题1',
		createdBy: 'Lisa',
		date: '2023/7/1',
	},
];

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={'帮助与反馈'} />
				<Dropdown>
					<DropdownTrigger>
						<Button isIconOnly radius='sm' variant='light'>
							<MoreHoriz size={24} />
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						itemClasses={{
							base: 'gap-4',
						}}
					>
						{[
							{
								label: '新建问题',
								href: './new',
								Icon: PostAdd,
							},
							{
								label: '我的问题',
								href: '#',
								Icon: Article,
							},
							{
								label: '我的回复',
								href: '#',
								Icon: Reply,
							},
						].map(({ Icon, label, href }, i) => (
							<DropdownItem key={i} startContent={<Icon size={24} />}>
								<Link as={LocalizedLink} href={href}>
									{label}
								</Link>
							</DropdownItem>
						))}
					</DropdownMenu>
				</Dropdown>
			</MobileHeader>
			<div className='flex flex-row px-4 gap-4'>
				<Input
					size='sm'
					labelPlacement='outside'
					placeholder='搜索问题……'
					startContent={<Search size={24} />}
				/>
				<Button size='sm' color='primary'>
					搜索
				</Button>
			</div>
			<Spacer y={2} />
			<MobileMain>
				<Card>
					<CardBody className='flex flex-col divide-y divide-divider'>
						{data.map(({ title, createdBy, date }) => (
							<div key={title} className='flex gap-2 py-2'>
								<Article className='shrink-0' size={24} />
								<div className='flex flex-col gap-2'>
									<Link as={LocalizedLink} href='./post'>
										{title}
									</Link>
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
									<p className='text-xs text-default-500'>
										由{createdBy}于{date}创建
									</p>
								</div>
							</div>
						))}
					</CardBody>
				</Card>
			</MobileMain>
			<div className='flex flex-row justify-center'>
				<Pagination total={10} initialPage={1} className='m-0 p-2' />
			</div>
		</div>
	);
};
export default Page;