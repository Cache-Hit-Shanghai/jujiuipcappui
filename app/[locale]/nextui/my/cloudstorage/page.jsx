import { NavbarBack, LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react';
import { CameraIcon } from '@heroicons/react/24/outline';

const tagClass = 'h-[26px] rounded-[26px] leading-[26px] bg-orange-800 text-xs px-2';
const btnClass = 'bg-green-300 rounded-full h-[36px]';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack></NavbarBack>
			<div className='flex flex-col shrink-0 gap-y-3 overflow-auto p-1'>
				<div>
					<h2 className='text-2xl font-semibold'>云存储</h2>
					<p className='text-xs'>不会丢失的录像文件存储。</p>
				</div>
				<Card>
					<CardHeader className='text-2xl font-semibold'>安全、可靠的云存储</CardHeader>
					<CardBody className='text-sm'>
						云存储可以将您的重要数据保存在云端。它可以避免数据的丢失、泄露以及人为破坏。您可以在世界上任何一个角落访问云存储上的文件。它具有金融级安全，能尽可能的保护您的隐私。即使设备被破坏而导致无法使用，已保存在云存储中的文件仍然安然无恙。
					</CardBody>
				</Card>
				<Card>
					<CardBody className='flex flex-row justify-between'>
						<div className='flex flex-col justify-center items-center'>
							<Avatar icon={<CameraIcon width={'24px'} height={'24px'}></CameraIcon>}></Avatar>
							<span>办3</span>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='flex  gap-1'>
								<p className={tagClass}>7天循环存储</p>
								<p className={tagClass}>24小时录像</p>
							</div>
							<div className='flex flex-col items-end'>
								<p className='text-sm text-emerald-400'>正常使用中</p>
								<p className='text-xs text-stone-400'>将于2023.8.24日到期</p>
							</div>
						</div>
					</CardBody>
					<CardFooter className='flex justify-evenly'>
						<LinkButton className={btnClass} href='./settings' label='设置'></LinkButton>
						<LinkButton className={btnClass} href='./pay' label='续订'></LinkButton>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default Page;
