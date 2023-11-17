'use client';

import { Switch, Card, CardBody, Listbox, ListboxItem, Tabs, Tab } from '@nextui-org/react';
import { Cloud } from '@styled-icons/heroicons-outline/Cloud';
import { DevicePhoneMobile } from '@styled-icons/heroicons-outline/DevicePhoneMobile';
import { useJuJiuT } from '@/state/translate';

const CloudOrSDCard = () => {
	const t = useJuJiuT();

	return (
		<Switch
			size='lg'
			defaultSelected={false}
			classNames={{ base: 'w-full max-w-md flex-row-reverse justify-between' }}
			thumbIcon={({ isSelected, className }) =>
				isSelected ? (
					<Cloud size={16} className={className} />
				) : (
					<DevicePhoneMobile size={16} className={className} />
				)
			}
		>
			{t('录像截图存放到')}
		</Switch>
	);
};

export { CloudOrSDCard };
