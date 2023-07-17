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
	DropButton,
	RangeInput,
} from 'grommet';
import {
	Pan,
	Home,
	Radial,
	Webcam,
	FormNext,
	Volume,
	VolumeLow,
	VolumeMute,
	Checkmark,
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
		<Button primary onClick={() => setOn(!on)}>
			<Avatar border>
				{on ? <FlashlightOff size='24' /> : <FlashlightOn size='24' />}
			</Avatar>
		</Button>
	);
}

export function VolumeControl({ showTitle = true }) {
	const [volume, setVolume] = useState(10);

	function selectIcon(volume) {
		if (volume === 0) return <VolumeMute />;
		else if (volume < 20) return <VolumeLow />;
		else return <Volume />;
	}

	return (
		<DropButton
			dropContent={
				<Box pad='small'>
					<RangeInput
						min={0}
						max={100}
						value={volume}
						onChange={(e) => setVolume(parseInt(e.target.value))}
					/>
				</Box>
			}
			dropProps={{ align: { bottom: 'top' } }}
		>
			<Box align='center'>
				{selectIcon(volume)}
				{showTitle && <Text size='small'>音量</Text>}
			</Box>
		</DropButton>
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
			className={styles.SectorContent}
			width='50%'
			height='50%'
			onClick={onClick}
			focusIndicator={false}
			flex={false}
			style={{
				position: 'absolute',
				transform: `rotate(${angle}deg)`,
				transformOrigin: '100% 100%',
			}}
		>
			<Box
				className={styles.SectorBox}
				width='calc(100% - 1px)'
				height='calc(100% - 1px)'
				align='center'
				justify='center'
				background='dark-3'
				round={{ size: 'full', corner: 'top-left' }}
				style={{
					WebkitMaskImage:
						'radial-gradient(circle farthest-side at bottom right, transparent 40%, #000 40%)',
					mask: 'radial-gradient(circle farthest-side at bottom right, transparent 40%, #000 40%)',
				}}
			>
				<CaretLeftFill style={{ transform: 'rotate(45deg)' }} />
			</Box>
		</Box>
	);
}

function Circle() {
	return (
		<Box
			round='full'
			width='calc(40% - 3px)'
			height='calc(40% - 3px)'
			margin='auto'
			background={'dark-3'}
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
			gap='medium'
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
			<CardBody onClick={() => router.push('/device/streaming')} background='background-front'>
				<Stack fill='horizontal' height='small'>
					<Image fill src={imgurl} />
					<Box direction='row' margin='medium' gap='small'>
						<Tag
							background='neutral-1'
							size='xsmall'
							value='工作中'
						/>
						<Tag background='active' size='xsmall' value='离线' />
						<Tag
							background='status-error'
							size='xsmall'
							value='7天云存储过期'
						/>
					</Box>
				</Stack>
			</CardBody>
			<CardFooter pad='small' align='center' justify='between' background='background-contrast'>
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
						{
							label: '高级',
							onClick: () => router.push('/device/advanced'),
						},
					]}
				/>
			</CardFooter>
		</Card>
	);
}
