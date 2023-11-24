'use client';

import { Button, Spacer, Image, Card, CardHeader, CardBody, Chip } from '@nextui-org/react';
import Link, { useJuJiuT } from '@/state/translate';
import { MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ErrorOutline } from '@styled-icons/material/ErrorOutline';
import { EventAvailable } from '@styled-icons/material/EventAvailable';
import { Store } from '@styled-icons/material/Store';
import { ConfirmationNumber } from '@styled-icons/material/ConfirmationNumber';
import { Diamond } from '@styled-icons/material/Diamond';

function CardButton({ label, description, icon, ...props }) {
	return (
		<Button radius='none' variant='flat' className='h-full' {...props}>
			<div className='flex flex-row items-center w-full'>
				<div>{icon}</div>
				<Spacer x={4} />
				<div className='flex flex-col items-start'>
					<div className='text-lg'>{label}</div>
					<div className='text-xs text-default-500'>{description}</div>
				</div>
			</div>
		</Button>
	);
}
export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<MobileHeader className='justify-center'>
				<h4 className='py-1.5 text-lg'>会员中心</h4>
				<Button isIconOnly variant='light' as={Link} href='' className='absolute right-0'>
					<ErrorOutline size={24} />
				</Button>
			</MobileHeader>
			<MobileMain>
				<Card className='relative aspect-video flex-none'>
					<div className='absolute left-0 inset-y-0 m-auto h-fit p-8 flex flex-col gap-2'>
						<p>
							<span className='text-4xl text-yellow-600'>青铜</span>
							<span className='text-xl text-yellow-400'>皮宠主</span>
						</p>
						<p className='text-yellow-800'>还差2201分升级</p>
					</div>
					<Chip color='warning'>当前等级</Chip>
				</Card>
				<Image src='https://pixelbot.oss-accelerate.aliyuncs.com/vip0.png' />
				<Card className='flex-none'>
					<CardHeader>增值服务</CardHeader>
					<CardBody className='grid grid-cols-4 gap-2'>
						<Button variant='bordered'>云存储</Button>
						<Button variant='bordered'>智能识别</Button>
						<Button variant='bordered'>电话提醒</Button>
						<Button variant='bordered'>异常巡检</Button>
					</CardBody>
				</Card>
				<Card className='grid grid-cols-2 gap-0.5 flex-none'>
					<div className='flex flex-col h-16'>
						<CardButton icon={<EventAvailable size={36} />} label='签到' description='连续签到得积分' />
					</div>
					<div className='flex flex-col h-16'>
						<CardButton icon={<ConfirmationNumber size={36} />} label='优惠券' description='0张' />
					</div>
					<div className='flex flex-col h-16'>
						<CardButton icon={<Diamond size={36} />} label='我的皮豆' description='0' />
					</div>
					<div className='flex flex-col h-16'>
						<CardButton icon={<Store size={36} />} label='皮豆商城' description='实用好物' />
					</div>
				</Card>
				<Card className='flex-none'>
					<CardHeader>会员专属福利</CardHeader>
					<CardBody className='p-8'>
						<p>做任务领皮豆</p>
						<p>十多项会员任务，365积分分享不停。</p>
					</CardBody>
				</Card>
			</MobileMain>
		</>
	);
}
