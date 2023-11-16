'use client';
import { CloudIcon, DevicePhoneMobileIcon, DeviceTabletIcon } from '@heroicons/react/24/outline';
import { RadioGroup, Radio } from '@nextui-org/react';
import { useState } from 'react';

const CloudOrSDCard = () => {
	//'Cloud', 'SDCard'
	const [select, setSelect] = useState('');

	return (
		<div className='flex shrink-0 items-center gap-2 h-full w-fit'>
			{[
				{ value: 'Cloud', Icon: CloudIcon, props: { width: '24px', height: '36px' } },
				{ value: 'SDCard', Icon: DevicePhoneMobileIcon, props: { width: '24px', height: '34px' } },
			].map(({ Icon, value, props = {} }) => (
				<Icon
					{...props}
					key={value}
					className={`${select === value ? 'stroke-cyan-500' : 'stroke-black dark:stroke-white'}`}
					onClick={() => setSelect(value)}
				></Icon>
			))}
		</div>
	);
};

export { CloudOrSDCard };
