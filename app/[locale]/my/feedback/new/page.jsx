'use client';

import { Input, Textarea, Button } from '@nextui-org/react';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<NavbarBack label={'新建问题'} />
			</MobileHeader>
			<MobileMain>
				<Input labelPlacement='outside' placeholder='标题' />
				<Textarea />
				<Button color='primary'>提交</Button>
			</MobileMain>
		</div>
	);
};
export default Page;
