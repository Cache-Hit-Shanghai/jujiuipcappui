'use client';

import { Divider, Card, CardHeader, CardBody } from '@nextui-org/react';
import { LinkButton, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
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

export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<MobileHeader className='justify-center'>
				<h4 className='h-10 flex items-center justify-center text-lg'>{t('会员服务')}</h4>
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardHeader>{t('通用服务')}</CardHeader>
					<Divider />
					<CardBody>
						<div className='grid grid-cols-3 gap-y-2'>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('云存储')}
								icon={<CloudUpload size={24} />}
								href='../my/cloudstorage'
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('电话提醒')}
								icon={<Call size={24} />}
								href=''
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('智能识别')}
								icon={<FramePersion size={24} />}
								href=''
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('语音助手')}
								icon={<Mic size={24} />}
								href=''
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('画面巡检')}
								icon={<FrameInspect size={24} />}
								href=''
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('时光相册')}
								icon={<PhotoLibrary size={24} />}
								href=''
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('物联4G')}
								icon={<SdStorage size={24} />}
								href=''
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('分享流量套餐')}
								icon={<Hub size={24} />}
								href=''
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('语音备忘')}
								icon={<GraphicEq size={24} />}
								href=''
							/>
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>{t('生活服务')}</CardHeader>
					<Divider />
					<CardBody>
						<div className='grid grid-cols-3 gap-y-2'>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('老人看护')}
								icon={<Elderly size={24} />}
								href=''
							/>
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>{t('店铺工具')}</CardHeader>
					<Divider />
					<CardBody>
						<div className='grid grid-cols-3 gap-y-2'>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('在线值守')}
								icon={<Storefront size={24} />}
								href=''
							/>
							<LinkButton
								className='p-2 min-w-0'
								radius='none'
								label={t('离岗检测')}
								icon={<ChairAlt size={24} />}
								href=''
							/>
						</div>
					</CardBody>
				</Card>
			</MobileMain>
		</>
	);
}
