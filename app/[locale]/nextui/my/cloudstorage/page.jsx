'use client';

import { Card, CardHeader, CardBody, CardFooter, Avatar, Chip } from '@nextui-org/react';
import { NavbarBack, LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';

const tagClass = 'h-[26px] rounded-[26px] leading-[26px] bg-orange-800 text-xs px-2';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label='云存储' />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardHeader className='text-2xl font-semibold'>安全、可靠的云存储</CardHeader>
					<CardBody className='text-sm'>
						云存储可以将您的重要数据保存在云端。它可以避免数据的丢失、泄露以及人为破坏。您可以在世界上任何一个角落访问云存储上的文件。它具有金融级安全，能尽可能的保护您的隐私。即使设备被破坏而导致无法使用，已保存在云存储中的文件仍然安然无恙。
					</CardBody>
				</Card>
				<Card>
					<CardBody className='flex flex-row justify-between'>
						<div className='flex flex-col justify-center items-center'>
							<Avatar icon={<NestCamWiredStand size={24} />} />
							<span>办3</span>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='flex  gap-2'>
								<Chip size='sm' color='success'>
									7天循环存储
								</Chip>
								<Chip size='sm' color='success'>
									24小时录像
								</Chip>
							</div>
							<div className='flex flex-col items-end'>
								<p className='text-sm text-success'>正常使用中</p>
								<p className='text-xs text-default-500'>将于2023.8.24日到期</p>
							</div>
						</div>
					</CardBody>
					<CardFooter className='flex justify-evenly'>
						<LinkButton variant='solid' color='primary' href='./settings' label='设置' />
						<LinkButton variant='solid' color='secondary' href='./pay' label='续订' />
					</CardFooter>
				</Card>
			</MobileMain>
		</div>
	);
};

export default Page;
