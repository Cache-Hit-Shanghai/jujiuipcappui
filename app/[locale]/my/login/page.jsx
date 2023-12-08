'use client';

import { Card, CardBody, Button, Checkbox, Link as Anchor } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { AppAbout } from '@/jujiu-ui-components/nextui/ipc/about/brand';
import { Smartphone } from '@styled-icons/material/Smartphone';
import { Lock } from '@styled-icons/material/Lock';
import { Wechat } from '@styled-icons/remix-fill/Wechat';
import { useJuJiuT } from '@/state/translate';

const Page = () => {
	const t = useJuJiuT();

	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack />
			</MobileHeader>
			<MobileMain className='justify-center gap-4'>
				<AppAbout />
			</MobileMain>
			<footer className='flex flex-col gap-2 p-4'>
				<Card>
					<CardBody className='gap-2'>
						<p className='self-center text-lg'>+86 138****1297</p>
						<Button size='sm' color='primary' startContent={<Smartphone size={24} />}>
							{t('使用当前手机号')}
						</Button>
					</CardBody>
				</Card>
				<Card>
					<CardBody className='gap-2'>
						<Button size='sm' startContent={<Wechat size={24} />} className='bg-[#1AAD19]'>
							{t('微信')}
						</Button>
					</CardBody>
				</Card>
				<Card>
					<CardBody className='gap-2'>
						<Button size='sm' color='secondary' startContent={<Lock size={24} />}>
							{t('密码登录')}
						</Button>
					</CardBody>
				</Card>
				<Checkbox size='sm' className='self-center p-4'>
					{t('已阅读并同意')}
					<Anchor size='sm'>{t('服务协议')}</Anchor>
				</Checkbox>
			</footer>
		</div>
	);
};
export default Page;
