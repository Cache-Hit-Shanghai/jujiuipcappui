import {
	Avatar,
	Text,
	Tag,
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
	Stack,
} from 'grommet';
import {
	Pan,
	Home,
	Radial,
	Webcam,
	FormNext,
	Volume,
	Checkmark,
	VolumeMute,
	FormPrevious,
	ClosedCaption,
	CaretLeftFill,
	StatusCritical,
} from 'grommet-icons';
import { Settings3 } from '@styled-icons/remix-fill/Settings3';
import { Call } from '@styled-icons/fluentui-system-regular/Call';
import { CallDismiss } from '@styled-icons/fluentui-system-regular/CallDismiss';
import { Record } from '@styled-icons/fluentui-system-regular/Record';
import { RecordStop } from '@styled-icons/fluentui-system-regular/RecordStop';
import { FlashlightOn } from '@styled-icons/material-rounded/FlashlightOn';
import { FlashlightOff } from '@styled-icons/material-rounded/FlashlightOff';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

import styles from './components.module.css';

// console.log('styles', styles);

export function FlashLight() {
	const [on, setOn] = useState(false);
	return (
		<Button onClick={() => setOn(!on)}>
			<Avatar border>
				{on ? <FlashlightOff size='24' /> : <FlashlightOn size='24' />}
			</Avatar>
		</Button>
	);
}

export function VolumeControl() {
	return (
		<Box></Box>
	);
}

export function ResolutionControl({ showTitle = true }) {
	return (
		<Menu
			plain
			dropAlign={{ top: 'bottom' }}
			items={[
				{ label: '极清', onClick: () => {}, justify: 'end' },
				{
					label: '超清',
					onClick: () => {},
					icon: <Checkmark />,
					justify: 'end',
				},
				{ label: '标清', onClick: () => {}, justify: 'end' },
			]}
		>
			<Box pad='small' align='center'>
				<ClosedCaption />
				{showTitle && <Text size='small'>清晰度</Text>}
			</Box>
		</Menu>
	);
}

export function PanLayer() {
	const [show, setShow] = useState(false);
	return (
		<>
			<Button
				plain
				focusIndicator={false}
				icon={<Pan />}
				onClick={() => setShow(!show)}
			/>
			{show && (
				<Layer
					plain
					position='right'
					responsive={false}
					margin='small'
					onClickOutside={() => setShow(false)}
				>
					<PanControl />
				</Layer>
			)}
		</>
	);
}

export function RecordControl({ showTitle = true }) {
	const [recording, setRecording] = useState(false);

	return (
		<Button onClick={() => setRecording(!recording)}>
			<Box pad='small' align='center'>
				{recording ? <RecordStop size='24' /> : <Record size='24' />}
				{showTitle && (
					<Text size='small'>{recording ? '停止' : '录像'}</Text>
				)}
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
				{showTitle && (
					<Text size='small'>{mute ? '恢复' : '静音'}</Text>
				)}
			</Box>
		</Button>
	);
}

export function ChatControl({ showTitle = true }) {
	const [speaking, setSpeaking] = useState(false);

	return (
		<Button onClick={() => setSpeaking(!speaking)}>
			<Box pad='small' align='center'>
				{speaking ? <CallDismiss size='24' /> : <Call size='24' />}
				{showTitle && (
					<Text size='small'>{speaking ? '挂断' : '对讲'}</Text>
				)}
			</Box>
		</Button>
	);
}

// export function PanControl({ onPanClick = () => {} }) {
// 	return (
// 		<Box responsive={false} className={styles.sector}>
// 			{[
// 				{
// 					direction: 'top',
// 					Icon: CaretUpFill,
// 				},
// 				{
// 					direction: 'right',
// 					Icon: CaretRightFill,
// 				},
// 				{
// 					direction: 'bottom',
// 					Icon: CaretDownFill,
// 				},
// 				{
// 					direction: 'left',
// 					Icon: CaretLeftFill,
// 				},
// 				{
// 					direction: 'center',
// 					isCenter: true,
// 				},
// 			].map(({ className, direction, isCenter = false, Icon }) => (
// 				<Box
// 					className={`${isCenter ? '' : styles.box} ${
// 						styles[direction]
// 					}`}
// 					key={className}
// 					justify='center'
// 					align='center'
// 					onClick={() => {
// 						onPanClick({
// 							direction,
// 						});
// 					}}
// 				>
// 					{Icon && (
// 						<Icon
// 							className={`${styles.icon} ${
// 								styles[direction + 'Icon']
// 							}`}
// 						></Icon>
// 					)}
// 				</Box>
// 			))}
// 		</Box>
// 	);
// }

function SectorBox({ angle, onClick, index }) {
	return (
		<Box
			className={styles.SectorBox}
			align='center'
			justify='center'
			background='dark-3'
			width='50%'
			height='50%'
			onClick={onClick}
			focusIndicator={false}
			flex={false}
			// border={{ color: 'dark-4', size: '1px' }}
			style={{
				position: 'absolute',
				transform: `rotate(${angle}deg)`,
				transformOrigin: '100% 100%',
				borderRadius: '100% 0 0 0',
			}}
		>
			<CaretLeftFill style={{ transform: 'rotate(45deg)' }} />
		</Box>
	);
}

function Circle() {
	return (
		<Box
			background='dark-3'
			round='full'
			width='40%'
			height='40%'
			margin='auto'
			border={{ color: 'dark-4', size: '0.5px' }}
			style={{
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
			}}
		/>
	);
}

export function PanControl({
	size = 'small',
	onPanClick = () => {},
	...props
}) {
	return (
		<Box
			flex={false}
			width={size}
			height={size}
			style={{
				position: 'relative',
				borderRadius: '50% 50%',
				overflow: 'hidden',
			}}
			className={styles.PanControl}
			alignSelf='center'
			background='dark-4'
			{...props}
		>
			{[
				{
					direction: 'top',
					angle: 45,
				},
				{
					direction: 'right',
					angle: 135,
				},
				{
					direction: 'bottom',
					angle: 225,
				},
				{
					direction: 'left',
					angle: 315,
				},
			].map(({ direction, angle }) => (
				<SectorBox
					key={direction}
					angle={angle}
					onClick={() => {
						//console.log('onPanClick', direction);
						onPanClick({
							direction,
						});
					}}
				/>
			))}

			<Circle />
		</Box>
	);
}

export function JuJiuMain({ children, ...props }) {
	return (
		<Main
			flex={{ grow: 1, shrink: 1 }}
			overflow='auto'
			gap='small'
			margin={{ horizontal: 'small' }}
			{...props}
		>
			{children}
		</Main>
	);
}

export function JuJiuCard({ children, ...props }) {
	return (
		<Card
			pad='small'
			gap='small'
			background='background-contrast'
			focusIndicator={false}
			flex={false}
			{...props}
		>
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
	return (
		<JuJiuCard>
			<CardBody>
				<List data={data} border={false}>
					{(datum) => (
						<Link href={datum.url} passHref legacyBehavior>
							<Button
								as='a'
								icon={<FormNext color='control' />}
								label={datum.label}
								reverse
								plain
								justify='between'
							/>
						</Link>
					)}
				</List>
			</CardBody>
		</JuJiuCard>
	);
}

export function IconBack() {
	const router = useRouter();
	return (
		<Button
			icon={<FormPrevious color='control' />}
			onClick={() => router.back()}
		/>
	);
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
		<Box
			direction='row'
			background='background-contrast'
			justify='evenly'
			flex={false}
		>
			<IconLInk icon={<Webcam />} label='设备' url='/' />
			<IconLInk icon={<Radial />} label='我的' url='/my' />
			<IconLInk icon={<Home />} label='主页' url='/splash' />
			<IconLInk
				icon={<StatusCritical />}
				label='错误页'
				url='/errorpage'
			/>
		</Box>
	);
}

export function IpcCard({ label, imgurl }) {
	const router = useRouter();
	return (
		<Card>
			<CardBody onClick={() => router.push('/device/streaming')}>
				<Stack fill='horizontal' height='small'>
					<Image fill src={imgurl} />
					<Box direction='row' margin='medium' gap='small'>
						<Tag background='neutral-1' size='xsmall' value='工作中' />
						<Tag background='active' size='xsmall' value='离线' />
						<Tag background='status-error' size='xsmall' value='7天云存储过期' />
					</Box>
				</Stack>
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
