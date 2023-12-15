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
				<NavbarBack label={t('智能识别')} />
			</MobileHeader>
			<MobileMain>
				<div>
					<p className='text-2xl font-semibold'>智能识别</p>
					<p className='text-xs text-default-500'>帮你精准识别人、车、宠物等</p>
				</div>
			</MobileMain>
		</div>
	);
}
