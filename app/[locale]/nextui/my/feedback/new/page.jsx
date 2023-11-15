'use client';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { Input, Textarea, Button } from '@nextui-org/react';
const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'新建问题'}></NavbarBack>
			<div className='flex flex-col shrink-0  grow overflow-auto p-4 gap-4'>
				<Input labelPlacement='outside' placeholder='标题'></Input>
				<Textarea
					className='grow shrink'
					classNames={{
						input: 'min-h-[50vh]',
					}}
				></Textarea>

				<Button color='success'>提交</Button>
			</div>
		</div>
	);
};
export default Page;
