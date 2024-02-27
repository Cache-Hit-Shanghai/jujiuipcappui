'use client';

import { Input, Button, Badge } from '@nextui-org/react';
import {
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { MailOutline } from '@styled-icons/material/MailOutline';
import { Search } from '@styled-icons/material/Search';
import { Cached } from '@styled-icons/material/Cached';
import { CloudUpload } from '@styled-icons/material/CloudUpload';
import { DeviceList, DeviceMenu } from '../../components';

export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<MobileHeader>
				<Input
					isClearable
					onClear={() => {}}
					size='sm'
					startContent={<Search size={24} />}
					placeholder={t('搜索设备')}
				/>
			</MobileHeader>
			<MobileHeader className='justify-end'>
				<div className='flex items-center'>
					<Button isIconOnly variant='light' as={Link} href='/robot/device'>
						<Cached size={24} />
					</Button>
					<Button
						isIconOnly
						variant='light'
						as={Link}
						href='../my/cloudstorage'
					>
						<CloudUpload size={24} />
					</Button>
					<Button isIconOnly variant='light' as={Link} href='./message'>
						<Badge content='5' color='primary'>
							<MailOutline size={24} />
						</Badge>
					</Button>
					<DeviceMenu />
				</div>
			</MobileHeader>
			<MobileMain className='gap-0 p-0'>
				<DeviceList />
			</MobileMain>
		</>
	);
}
