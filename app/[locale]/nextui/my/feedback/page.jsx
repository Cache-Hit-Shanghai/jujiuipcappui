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
} from '@nextui-org/react';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Article } from '@styled-icons/material/Article';
import { MoreHoriz } from '@styled-icons/material/MoreHoriz';
import { PostAdd } from '@styled-icons/material/PostAdd';
import { Reply } from '@styled-icons/material/Reply';
import { Search } from '@styled-icons/material/Search';

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
];

const Page = () => {
	return (
		<div className='flex flex-col h-screen gap-2'>
			<NavbarBack label={'帮助与反馈'}>
				<div className='flex flex-1'></div>
				<Dropdown>
					<DropdownTrigger>
						<Button isIconOnly radius='sm' variant='light'>
							<MoreHoriz size={24} />
						</Button>
					</DropdownTrigger>

					<DropdownMenu
						className='w-[160px]'
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
							<DropdownItem key={i} startContent={<Icon width={'24px'} height={'24px'}></Icon>}>
								<Link color='foreground' href={href}>
									{label}
								</Link>
							</DropdownItem>
						))}
					</DropdownMenu>
				</Dropdown>
			</NavbarBack>
			<div className='flex z-20 px-4 bg-background sticky top-[70px] items-center shrink-0 gap-1'>
				<Input
					labelPlacement='outside'
					placeholder='搜索问题……'
					startContent={<Search width={'24px'} height={'24px'}></Search>}
				></Input>
				<Button color='success'>搜索</Button>
			</div>
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				{data.map(({ title, createdBy, date }) => (
					<div className='flex gap-2 border-b'>
						<Article className='shrink-0' width={'24px'} height={'24px'}></Article>
						<div className='flex flex-col gap-2'>
							<Link href='./post' passHref legacyBehavior>
								{title}
							</Link>
							<div className='flex gap-1'>
								<Chip color='danger'>bug</Chip>
								<Chip color='primary'>建议</Chip>
								<Chip color='secondary'>功能</Chip>
								<Chip color='success'>文档</Chip>
								<Chip color='warning'>帮助</Chip>
							</div>
							<p>
								由{createdBy}于{date}创建
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='flex items-center bg-background justify-center sticky shrink-0  bottom-0 h-[70px]'>
				<Pagination total={10} initialPage={1}></Pagination>
			</div>
		</div>
	);
};
export default Page;
