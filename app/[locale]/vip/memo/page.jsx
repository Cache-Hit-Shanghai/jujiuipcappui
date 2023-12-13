'use client';

import {
	Divider,
	Card,
	CardHeader,
	CardBody,
	Button,
	Checkbox,
} from '@nextui-org/react';
import {
	LinkButton,
	MobileHeader,
	MobileMain,
	NavbarBack,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';
import { CloudUpload } from '@styled-icons/material/CloudUpload';
import { Call } from '@styled-icons/material/Call';
import { Mic } from '@styled-icons/material/Mic';
import { SdStorage } from '@styled-icons/material/SdStorage';
import { PhotoLibrary } from '@styled-icons/material/PhotoLibrary';
import { Hub } from '@styled-icons/material/Hub';
import { GraphicEq } from '@styled-icons/material/GraphicEq';
import { Elderly } from '@styled-icons/material/Elderly';
import { Storefront } from '@styled-icons/material/Storefront';
import { ChairAlt } from '@styled-icons/material/ChairAlt';
import { FramePersion } from '@/jujiu-ui-components/icons/framepersion';
import { FrameInspect } from '@/jujiu-ui-components/icons/frameinspect';
import { NestCamWiredStand } from '@styled-icons/material/NestCamWiredStand';
import { DeleteOutline } from '@styled-icons/material/DeleteOutline';
import { VolumeUp } from '@styled-icons/material/VolumeUp';

export default function Page() {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label='语音备忘' />
			</MobileHeader>
			<MobileMain>
				<div>
					<p className='text-2xl font-semibold'>云端语音备忘</p>
					<p className='text-xs text-default-500'>
						自定义设备语音播报，重要事情不错过
					</p>
				</div>
				<Card className='flex-none'>
					<CardBody className='flex flex-row items-center justify-between'>
						<div className='flex flex-row items-center gap-2'>
							<NestCamWiredStand size={24} />
							<div>
								<p>办3</p>
								<p className='text-xs text-default-500'>使用中</p>
							</div>
						</div>
						<Button size='sm' color='primary'>
							开通
						</Button>
					</CardBody>
				</Card>
				<Card className='flex-none'>
					<CardBody className='flex flex-col gap-2'>
						<div className='bg-primary-100 rounded-medium flex flex-col p-2 gap-2'>
							<Checkbox>欢迎回家</Checkbox>
							<div>
								<div className='flex flex-row items-center justify-between'>
									<Checkbox defaultSelected>记得每天晚饭后吃药哦</Checkbox>
									<div className='flex flex-col'>
										<div className='flex flex-row items-center justify-between'>
											<Button isIconOnly variant='light'>
												<VolumeUp size={24} />
											</Button>
											<Button isIconOnly variant='light'>
												<DeleteOutline size={24} />
											</Button>
										</div>
									</div>
								</div>
								<div className='flex flex-row gap-4 pl-8'>
									<Button color='primary' size='sm'>
										温柔女生
									</Button>
									<Button disabled size='sm'>
										激昂男生
									</Button>
								</div>
							</div>
							<Checkbox>你已进入监控区域</Checkbox>
						</div>
						<p className='text-lg font-semibold'>语音备忘，日程提醒</p>
						<p className='text-sm text-default-500'>
							自定义提醒内容通过设备端按时播报，对重要安排进行提醒
						</p>
						<Divider />
						<p className='text-lg font-semibold'>
							两种播报方式满足不同情景下的需求
						</p>
						<div className='text-sm text-default-500'>
							<p>定时播报：根据设置的时间点进行播报，重要日程安排不再错过</p>
							<p>
								识别到人形播报：有人出现时根据设置内容进行播报，起到精准播报作用
							</p>
						</div>
						<div className='bg-primary-100 rounded-medium flex flex-col p-2 gap-2'>
							<div className='bg-primary-200 flex flex-col gap-1 p-4 rounded-medium'>
								<p className='text-lg font-semibold'>定时播报</p>
								<p className='text-xs text-default-500'>
									适用于日程安排、吃药提醒
								</p>
							</div>
							<div className='bg-primary-200 flex flex-col gap-1 p-4 rounded-medium'>
								<p className='text-lg font-semibold'>有人出现时播报</p>
								<p className='text-xs text-default-500'>
									适用于迎宾语、防盗震慑等
								</p>
							</div>
						</div>
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
}
