import { Switch } from '@nextui-org/react';
import { Cloud } from '@styled-icons/heroicons-outline/Cloud';
import { DevicePhoneMobile } from '@styled-icons/heroicons-outline/DevicePhoneMobile';

const CloudOrSDCard = ({ label }) => {
	return (
		<Switch
			size='lg'
			defaultSelected={false}
			classNames={{
				base: label ? 'w-full max-w-md flex-row-reverse justify-between' : 'flex-row-reverse justify-between',
			}}
			thumbIcon={({ isSelected, className }) =>
				isSelected ? (
					<Cloud size={16} className={className} />
				) : (
					<DevicePhoneMobile size={16} className={className} />
				)
			}
		>
			{label}
		</Switch>
	);
};

export { CloudOrSDCard };
