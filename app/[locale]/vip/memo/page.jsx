'use client';

import {
	Divider,
	Card,
	CardBody,
	Button,
	Checkbox,
	Slider,
	Image,
} from '@nextui-org/react';
import {
	LinkButton,
	MobileHeader,
	MobileMain,
	NavbarBack,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';
import { TextFields } from '@styled-icons/material/TextFields';
import { Mic } from '@styled-icons/material/Mic';
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
								<p className='text-xs text-default-500'>未开通</p>
							</div>
						</div>
						<LinkButton
							href='./buy'
							size='sm'
							variant='solid'
							color='primary'
							label='开通'
						/>
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
						<Divider />
						<p className='text-lg font-semibold'>时间设置更灵活</p>
						<p className='text-sm text-default-500'>
							支持时间间隔及循环次数设置，避免漏掉提醒
						</p>
						<div className='bg-primary-100 rounded-medium flex flex-col p-2 gap-2'>
							<Slider
								label={
									<div>
										<p className='font-semibold'>时间间隔</p>
										<p className='text-xs text-default-500'>间隔内仅播报一次</p>
									</div>
								}
								step={1}
								maxValue={10}
								minValue={0}
								defaultValue={4}
								className='max-w-md bg-primary-200 p-4 rounded-medium'
							/>
							<Slider
								label={<p className='font-semibold'>循环次数</p>}
								step={1}
								maxValue={5}
								minValue={0}
								defaultValue={2}
								className='max-w-md bg-primary-200 p-4 rounded-medium'
							/>
						</div>
						<Divider />
						<p className='text-lg font-semibold'>支持自己声音录制播放视频</p>
						<p className='text-sm text-default-500'>
							语音转化形式太过突兀，支持用自己的声音录制播放视频，我的设备声音我做主
						</p>
						<div className='bg-primary-100 rounded-medium flex flex-row p-2 gap-2'>
							<Button
								size='sm'
								startContent={<TextFields size={24} />}
								color='secondary'
								className='flex-1'
							>
								文字输入
							</Button>
							<Button
								size='sm'
								startContent={<Mic size={24} />}
								color='primary'
								className='flex-1'
							>
								按住语音
							</Button>
						</div>
						<Divider />
						<p className='text-lg font-semibold'>家用场景</p>
						<p className='text-sm text-default-500'>
							语音备忘，提醒自己，家人不要忘记重要行程安排
						</p>
						<Image src='https://pic.52112.com/180128/Businesswoman/Fn1vcy3sKr.jpg' />
						<Divider />
						<p className='text-lg font-semibold'>商用场景</p>
						<p className='text-sm text-default-500'>
							收银台、后厨等位置，识别到人形播报，进行交接班、进货、安全检查提醒等
						</p>
						<Image src='http://www.canyin168.com/UploadFiles/glyy/2018/2/201802111057136936.jpg' />
						<Divider />
						<p className='text-lg font-semibold'>语音留言</p>
						<p className='text-sm text-default-500'>
							节日纪念日，通过语音播放一段有意义的留言
						</p>
						<div className='bg-primary-100 rounded-medium flex flex-row items-center p-2 gap-2'>
							<NestCamWiredStand size={24} />
							<div>
								<p className='font-semibold'>语音播报</p>
								<p className='text-xs text-default-500'>
									今天是您的生日。生日快乐！
								</p>
							</div>
						</div>
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
}
