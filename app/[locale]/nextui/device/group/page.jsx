'use client';

import { Button, Card, CardBody } from '@nextui-org/react';
import { ChevronRight } from '@styled-icons/material/ChevronRight';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	const groups = [
		{ label: t('默认分组'), disabled: true },
		{ label: '办公室' },
		{ label: '家' },
		{ label: '废弃' },
	];

	return (
		<div className='h-screen flex flex-col'>
			<MobileHeader>
				<NavbarBack label={t('设备分组')} />
			</MobileHeader>
			<MobileMain>
				<Card>
					<CardBody className='flex flex-col py-0 divide-y divide-divider'>
						{groups.map((group) => (
							<Button
								isDisabled={group.disabled}
								variant='light'
								radius='none'
								endContent={<ChevronRight size={24} />}
								className='justify-between px-0'
							>
								{group.label}
							</Button>
						))}
					</CardBody>
				</Card>
			</MobileMain>
		</div>
	);
}
