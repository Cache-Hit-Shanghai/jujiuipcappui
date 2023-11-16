'use client';
import { NavbarBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { CloudOrSDCard } from '../../components/gallery';

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<NavbarBack label={'录像截图设置'}></NavbarBack>
			<div className='flex flex-col shrink-0  overflow-auto px-4 gap-4'>
				<div className='flex  justify-between  shadow-md shadow-white p-2'>
					<p>录像截图存放到</p>
					<CloudOrSDCard></CloudOrSDCard>
				</div>
			</div>
		</div>
	);
};
export default Page;
