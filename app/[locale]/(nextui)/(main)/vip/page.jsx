'use client';

import { Button, Divider, Card, CardHeader, CardBody } from '@nextui-org/react';
import {
	LinkButton,
	LabelLink,
	LinkGroup,
	ThemeButton,
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { PhotoAlbum } from '@styled-icons/material/PhotoAlbum';
import { CloudUpload } from '@styled-icons/material/CloudUpload';
import { Update } from '@styled-icons/material/Update';
import { IosShare } from '@styled-icons/material/IosShare';
import { HelpOutline } from '@styled-icons/material/HelpOutline';
import { Call } from '@styled-icons/material/Call';
import { Mic } from '@styled-icons/material/Mic';
import { SdStorage } from '@styled-icons/material/SdStorage';
import { PhotoLibrary } from '@styled-icons/material/PhotoLibrary';
import { ComputerVision } from '@/jujiu-ui-components/icons/computervision';
import { FrameInspect } from '@/jujiu-ui-components/icons/frameinspect';

export default function Page() {
	const t = useJuJiuT();

	return (
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
							icon={<ComputerVision size={24} />}
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
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody></CardBody>
			</Card>
		</MobileMain>
	);
}
