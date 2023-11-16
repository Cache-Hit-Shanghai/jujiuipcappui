'use client';

import { Tabs, Tab, Button, Card, CardBody } from '@nextui-org/react';
import { ThemeButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link, { useJuJiuT } from '@/state/translate';
import { EnvelopeIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import {
	MagnifyingGlass,
	VipCrown,
	Medal,
	Store,
	Coupon,
	FileText,
	Profile,
	ShoppingCart2,
	CustomerService,
	Mail,
	Question,
	ArrowUpCircle,
	Stethoscope,
	At,
} from '@styled-icons/heroicons-outline';

function StatisticCard({ data }) {
	return (
		<div className='flex flex-row gap-4'>
			{data.map((datum) => (
				<div key={datum.label} className='flex flex-row items-baseline'>
					<p className='px-1 font-bold'>{datum.number}</p>
					<p className='text-sm text-default-400'>{datum.label}</p>
				</div>
			))}
		</div>
	);
}

export default function Page() {
	const t = useJuJiuT();

	return (
		<>
			<div className='flex items-center justify-between p-2'>
				<Tabs
					aria-label='Options'
					color='primary'
					variant='underlined'
					classNames={{
						tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
						cursor: 'w-full bg-primary',
						tab: 'max-w-fit px-0 h-12',
						tabContent: 'group-data-[selected=true]:text-primary',
					}}
				>
					<Tab
						key='follow'
						title={
							<div className='flex items-center space-x-2'>
								<span>{t('关注')}</span>
							</div>
						}
					/>
					<Tab
						key='explore'
						title={
							<div className='flex items-center space-x-2'>
								<span>{t('发现')}</span>
							</div>
						}
					/>
					<Tab
						key='nearby'
						title={
							<div className='flex items-center space-x-2'>
								<span>{t('附近')}</span>
							</div>
						}
					/>
					<Tab
						key='live'
						title={
							<div className='flex items-center space-x-2'>
								<span>{t('直播')}</span>
							</div>
						}
					/>
				</Tabs>
				<Button isIconOnly variant='light'>
					<MagnifyingGlass size={24} />
				</Button>
			</div>
			<div className='flex flex-col flex-1 px-4 gap-4'></div>
		</>
	);
}
