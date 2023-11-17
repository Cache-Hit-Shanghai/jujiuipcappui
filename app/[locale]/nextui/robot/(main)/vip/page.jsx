'use client';

import { Button, Spacer, Image, Card, CardHeader, CardBody, Chip } from '@nextui-org/react';
import { useJuJiuT } from '@/state/translate';
import { CalendarCheck } from '@styled-icons/remix-line/CalendarCheck';
import { Store } from '@styled-icons/remix-line/Store';
import { Coupon } from '@styled-icons/remix-line/Coupon';
import { VipDiamond } from '@styled-icons/remix-line/VipDiamond';

export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<div className='flex items-center justify-center p-2'>
				<h4 className='py-2 text-2xl font-bold'>会员中心</h4>
			</div>
			<div className='flex flex-col flex-1 px-4 gap-4 overflow-auto'>
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
						<Button radius='none' variant='flat' className='h-full'>
							<div className='flex flex-row items-center w-full'>
								<div>
									<CalendarCheck size={36} />
								</div>
								<Spacer x={4} />
								<div className='flex flex-col items-start'>
									<div className='text-lg'>签到</div>
									<div className='text-sm text-default-400'>连续签到得积分</div>
								</div>
							</div>
						</Button>
					</div>
					<div className='flex flex-col h-16'>
						<Button radius='none' variant='flat' className='h-full'>
							<div className='flex flex-row items-center w-full'>
								<div>
									<Coupon size={36} />
								</div>
								<Spacer x={4} />
								<div className='flex flex-col items-start'>
									<div className='text-lg'>优惠券</div>
									<div className='text-sm text-default-400'>0张</div>
								</div>
							</div>
						</Button>
					</div>
					<div className='flex flex-col h-16'>
						<Button radius='none' variant='flat' className='h-full'>
							<div className='flex flex-row items-center w-full'>
								<div>
									<VipDiamond size={36} />
								</div>
								<Spacer x={4} />
								<div className='flex flex-col items-start'>
									<div className='text-lg'>我的皮豆</div>
									<div className='text-sm text-default-400'>0</div>
								</div>
							</div>
						</Button>
					</div>
					<div className='flex flex-col h-16'>
						<Button radius='none' variant='flat' className='h-full'>
							<div className='flex flex-row items-center w-full'>
								<div className='text-lg'>
									<Store size={36} />
								</div>
								<Spacer x={4} />
								<div className='flex flex-col items-start'>
									<div className='text-lg'>皮豆商城</div>
									<div className='text-sm text-default-400'>实用好物</div>
								</div>
							</div>
						</Button>
					</div>
				</Card>
				<Card className='flex-none'>
					<CardHeader>会员专属福利</CardHeader>
					<CardBody className='p-8'>
						<p>做任务领皮豆</p>
						<p>十多项会员任务，365积分分享不停。</p>
					</CardBody>
				</Card>
			</div>
		</>
	);
}
