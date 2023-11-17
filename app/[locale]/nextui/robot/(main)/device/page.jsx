'use client';

import { Button, Image, Select, SelectItem } from '@nextui-org/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ThemeButton } from '@/jujiu-ui-components/nextui/core/core-ui';
import Link from '@/state/translate';
import { PlusCircle } from '@styled-icons/heroicons-outline';
import { ScanDash } from '@styled-icons/fluentui-system-filled/ScanDash';
import { RobotCard } from '../../components';

export default function Page() {
	return (
		<>
			<div className='p-2 flex items-center justify-between'>
				<div className='px-2 flex w-1/2'>
					<Select
						size='sm'
						aria-label='select device'
						defaultSelectedKeys={['robot0']}
						labelPlacement='outside'
					>
						<SelectItem key='robot0' value='robot0'>
							小皮0
						</SelectItem>
						<SelectItem key='robot1' value='robot1'>
							小皮1
						</SelectItem>
						<SelectItem key='robot2' value='robot2'>
							小皮2
						</SelectItem>
					</Select>
				</div>
				<div className='flex items-center'>
					<ThemeButton />
					<Button isIconOnly variant='light' as={Link} href='/device/scan'>
						<ScanDash size={24} />
					</Button>
					<Button isIconOnly variant='light' as={Link} href='/device/binding'>
						<PlusCircle size={24} />
					</Button>
				</div>
			</div>
			<div className='px-4 py-1 flex flex-col flex-1 gap-4 overflow-auto'>
				<RobotCard />
				<Carousel
					autoPlay
					infiniteLoop
					dynamicHeight
					showArrows={false}
					showStatus={false}
					showThumbs={false}
				>
					<Image src='https://pixelbot.oss-accelerate.aliyuncs.com/Weixin%20Image_20231116164719.png' />
					<Image src='https://pixelbot.oss-accelerate.aliyuncs.com/Weixin%20Image_20231116164752.png' />
					<Image src='https://pixelbot.oss-accelerate.aliyuncs.com/Weixin%20Image_20231116164801.png' />
				</Carousel>
			</div>
		</>
	);
}
