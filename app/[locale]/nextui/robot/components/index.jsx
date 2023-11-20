'use client';

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useState } from 'react';
import { LinkButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChipOnline, ChipFromFriends } from '@/jujiu-ui-components/nextui/core/core-chips';
import { ChatControl } from '@/jujiu-ui-components/nextui/ipc/video/toolControl';
import { useJuJiuT } from '@/state/translate';
import { Battery2Charge } from '@styled-icons/remix-line/Battery2Charge';
import { Walk } from '@styled-icons/remix-line/Walk';
import { Magic } from '@styled-icons/remix-line/Magic';
import { Settings3 } from '@styled-icons/remix-line/Settings3';
import { Search } from '@styled-icons/remix-line/Search';

export function RobotCard() {
	const t = useJuJiuT();
	const [speaking, setSpeaking] = useState(false);

	return (
		<div>
			<Card>
				<CardBody className='p-0'>
					<Image
						src='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
						className='z-0'
					/>
					<div className='absolute left-1 top-1 flex flex-row gap-4'>
						<ChipOnline />
					</div>
					<div className='absolute right-1 top-1 flex flex-row gap-4'>
						<ChipFromFriends />
					</div>
				</CardBody>
				<CardFooter>
					<div className=' w-full grid grid-cols-3 gap-y-4 justify-items-center'>
						<LinkButton icon={<Search size={24} />} label={t('寻宠')} href='' />
						<LinkButton icon={<Magic size={24} />} label={t('逗宠')} href='' />
						<LinkButton icon={<Walk size={24} />} label={t('跟随')} href='' />
						<ChatControl showLabel speaking={speaking} onPress={() => setSpeaking(!speaking)} />
						<LinkButton icon={<Battery2Charge size={24} />} label={t('回充')} href='' />
						<LinkButton icon={<Settings3 size={24} />} label={t('设置')} href='/device/settings' />
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
