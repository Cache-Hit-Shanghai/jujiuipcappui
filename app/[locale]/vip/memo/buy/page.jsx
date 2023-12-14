'use client';

import {
	Divider,
	Card,
	CardHeader,
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
				<NavbarBack label='语音备忘套餐选择' />
			</MobileHeader>
			<MobileMain></MobileMain>
		</div>
	);
}
