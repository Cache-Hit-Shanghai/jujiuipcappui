'use client';

import { Avatar, Button } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Login } from '@styled-icons/material/Login';
import { Wechat } from '@styled-icons/remix-fill/Wechat';
import { Alipay } from '@styled-icons/remix-fill/Alipay';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack />
			</MobileHeader>
			<MobileMain className='justify-center gap-8'>
				{[
					{ Icon: Login, label: '密码登录' },
					{ Icon: Wechat, label: '微信登录' },
					{ Icon: Alipay, label: '支付宝登录' },
				].map(({ Icon, label }) => (
					<Button key={label} variant='light' className='flex flex-col items-center h-fit'>
						<Avatar icon={<Icon />} />
						<p>{label}</p>
					</Button>
				))}
			</MobileMain>
		</div>
	);
};
export default Page;
