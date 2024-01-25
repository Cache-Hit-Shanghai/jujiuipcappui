'use client';

import { Button, Select, SelectItem } from '@nextui-org/react';
import Link from '@/state/translate';
import { Cached } from '@styled-icons/material/Cached';
import { AddCircleOutline } from '@styled-icons/material/AddCircleOutline';
import { QrCodeScanner } from '@styled-icons/material/QrCodeScanner';
import {
	MobileHeader,
	MobileMain,
} from '@/jujiu-ui-components/nextui/core/core-ui';
import { DeviceList } from '../../components';

export default function Page() {
	return (
		<>
			<MobileHeader>
				<div className='px-2 flex w-1/2'>
					<Select
						size='sm'
						aria-label='select device'
						defaultSelectedKeys={['all']}
						labelPlacement='outside'
					>
						<SelectItem key='all' value='all'>
							全部
						</SelectItem>
						<SelectItem key='ipc' value='ipc'>
							小皮看宠助手
						</SelectItem>
						<SelectItem key='robot' value='robot'>
							小皮机器人
						</SelectItem>
						<SelectItem key='3in1' value='3in1'>
							小皮三合一
						</SelectItem>
					</Select>
				</div>
				<div className='flex items-center'>
					<Button isIconOnly variant='light' as={Link} href='/'>
						<Cached size={24} />
					</Button>
					<Button isIconOnly variant='light' as={Link} href='/device/scan'>
						<QrCodeScanner size={24} />
					</Button>
					<Button isIconOnly variant='light' as={Link} href='/device/binding'>
						<AddCircleOutline size={24} />
					</Button>
				</div>
			</MobileHeader>
			<MobileMain>
				<DeviceList />
			</MobileMain>
		</>
	);
}
