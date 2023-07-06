import {
	Text,
	Box,
	Card,
	CardBody,
	CardFooter,
	Menu,
	Image,
	Button,
	List,
	Main,
	Layer,
} from 'grommet';
import {
	Pan,
	Home,
	Stop,
	Radial,
	Webcam,
	Video,
	FormNext,
	Volume,
	VolumeMute,
	FormPrevious,
	CaretUpFill,
	CaretDownFill,
	CaretLeftFill,
	CaretRightFill,
	StatusCritical,
} from 'grommet-icons';
import { Settings3 } from '@styled-icons/remix-fill/Settings3';
import { Mic } from '@styled-icons/remix-fill/Mic';
import { MicOff } from '@styled-icons/remix-fill/MicOff';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

import styles from './components.module.css';

// console.log('styles', styles);

export function PanLayer() {
	const [show, setShow] = useState(false);
	return (
		<>
			<Button plain icon={<Pan />} onClick={() => setShow(!show)} />
			{show && <Layer plain position='right' responsive={false} margin='small' onClickOutside={() => setShow(false)}><PanControl /></Layer>}
		</>
	);
}

export function RecordControl({ showTitle = true }) {
	const [recording, setRecording] = useState(false);

	return (
		<Button onClick={() => setRecording(!recording)}>
			<Box pad='small' align='center'>
				{recording ? <Stop /> : <Video />}
				{showTitle && <Text size='small'>{recording ? '停止' : '录像'}</Text>}
			</Box>
		</Button>
	);
}

export function MuteControl({ showTitle = true }) {
	const [mute, setMute] = useState(false);

	return (
		<Button onClick={() => setMute(!mute)}>
			<Box pad='small' align='center'>
				{mute ? <Volume /> : <VolumeMute />}
				{showTitle && <Text size='small'>{mute ? '恢复' : '静音'}</Text>}
			</Box>
		</Button>
	);
}

export function ChatControl({ showTitle = true }) {
	const [speaking, setSpeaking] = useState(false);

	return (
		<Button onClick={() => setSpeaking(!speaking)}>
			<Box pad='small' align='center'>
				{speaking ? <MicOff size='24' /> : <Mic size='24' />}
				{showTitle && <Text size='small'>{speaking ? '挂断' : '对讲'}</Text>}
			</Box>
		</Button>
	);
}

export function PanControl({ onPanClick = () => {} }) {
	return (
		<Box responsive={false} className={styles.sector}>
			{[
				{
					direction: 'top',
					Icon: CaretUpFill,
				},
				{
					direction: 'right',
					Icon: CaretRightFill,
				},
				{
					direction: 'bottom',
					Icon: CaretDownFill,
				},
				{
					direction: 'left',
					Icon: CaretLeftFill,
				},
				{
					direction: 'center',
					isCenter: true,
				},
			].map(({ className, direction, isCenter = false, Icon }) => (
				<Box
					className={`${isCenter ? '' : styles.box} ${
						styles[direction]
					}`}
					key={className}
					justify='center'
					align='center'
					onClick={() => {
						onPanClick({
							direction,
						});
					}}
				>
					{Icon && (
						<Icon
							className={`${styles.icon} ${
								styles[direction + 'Icon']
							}`}
						></Icon>
					)}
				</Box>
			))}
		</Box>
	);
}

export function JuJiuMain({ children, ...props }) {
	return (
		<Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small' margin={{ horizontal: 'small' }} {...props}>
			{children}
		</Main>
	);
}

export function JuJiuCard({ children, ...props }) {
	return (
		<Card pad='small' gap='small' background='background-contrast' flex={false} {...props}>
			{children}
		</Card>
	);
}

export function InfoGroup({ data }) {
	return (
		<JuJiuCard>
			<CardBody>
				<List
					data={data}
					border={false}
					primaryKey='key'
					secondaryKey='value'
				/>
			</CardBody>
		</JuJiuCard>
	);
}

export function ButtonGroup({ data }) {
	return (
		<JuJiuCard>
			<CardBody>
				<List data={data} border={false}>
					{(datum) => (
						<Button
							icon={<FormNext color='control' />}
							label={datum.label}
							reverse
							plain
							justify='between'
							onClick={datum.onClick}
						/>
					)}
				</List>
			</CardBody>
		</JuJiuCard>
	);
}

export function LinkGroup({ data }) {
	const router = useRouter();
	return (
		<JuJiuCard>
			<CardBody>
				<List data={data} border={false}>
					{(datum) => (
						<Button
							icon={<FormNext color='control' />}
							label={datum.label}
							reverse
							plain
							justify='between'
							onClick={() => router.push(datum.url)}
						/>
					)}
				</List>
			</CardBody>
		</JuJiuCard>
	);
}

export function IconBack() {
	const router = useRouter();
	return <Button icon={<FormPrevious color='control' />} onClick={() => router.back()} />;
}

export function IconButton({ icon, label, onClick }) {
	return (
		<Button onClick={onClick}>
			<Box pad='small' align='center'>
				{icon}
				<Text size='small'>{label}</Text>
			</Box>
		</Button>
	);
}

export function IconLInk({ icon, label, url }) {
	const router = useRouter();
	return (
		<Link href={url} passHref legacyBehavior>
			<Button as='a'>
				<Box pad='small' align='center'>
					{icon}
					<Text size='small'>{label}</Text>
				</Box>
			</Button>
		</Link>
	);
}

export function AppFooter() {
	return (
		<Box direction='row' background='background-contrast' justify='evenly' flex={false}>
			<IconLInk icon={<Webcam />} label='设备' url='/' />
			<IconLInk icon={<Radial />} label='我的' url='/my' />
			<IconLInk icon={<Home />} label='主页' url='/splash' />
			<IconLInk icon={<StatusCritical />} label='错误页' url='/errorpage' />
		</Box>
	);
}

export function IpcCard({ label, imgurl }) {
	const router = useRouter();
	return (
		<Card>
			<CardBody onClick={() => router.push('/device/streaming')}>
				<Image src={imgurl} />
			</CardBody>
			<CardFooter margin='small' align='center' justify='between'>
				<Text>{label}</Text>
				<Menu
					dropProps={{ align: { top: 'bottom', right: 'right' } }}
					icon={<Settings3 size='24' />}
					items={[
						{
							label: '设备分享',
							onClick: () => router.push('/device/sharing'),
						},
						{
							label: '设置',
							onClick: () => router.push('/device/settings'),
						},
					]}
				/>
			</CardFooter>
		</Card>
	);
}
