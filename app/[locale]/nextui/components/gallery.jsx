'use client';
import { CloudIcon, DevicePhoneMobileIcon, DeviceTabletIcon } from '@heroicons/react/24/outline';
import { RadioGroup, Radio } from '@nextui-org/react';
import { useState } from 'react';

const CloudOrSDCard = () => {
	//'Cloud', 'SDCard'
	const [select, setSelect] = useState('');

	return (
		<div className='flex shrink-0 h-full w-fit'>
			{[
				{ value: 'Cloud', Icon: CloudIcon },
				{ value: 'SDCard', Icon: DevicePhoneMobileIcon },
			].map(({ Icon, value }) => (
				<Icon
					width={'24px'}
					height={'24px'}
					key={value}
					color={`${select === value ? 'cyan' : 'white'}`}
					onClick={() => setSelect(value)}
				></Icon>
			))}
		</div>
	);
};

export { CloudOrSDCard };
