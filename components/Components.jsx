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
} from 'grommet';
import {
	Home,
	Webcam,
	Radial,
	Configure,
	FormPrevious,
	FormNext,
	CaretUpFill,
	CaretDownFill,
	CaretLeftFill,
	CaretRightFill,
} from 'grommet-icons';
import { useRouter } from 'next/navigation';

import styles from './components.module.css';

// console.log('styles', styles);

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
							icon={<FormNext />}
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
							icon={<FormNext />}
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
	return <Button icon={<FormPrevious />} onClick={() => router.back()} />;
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
		<Button onClick={() => router.push(url)}>
			<Box pad='small' align='center'>
				{icon}
				<Text size='small'>{label}</Text>
			</Box>
		</Button>
	);
}

export function AppFooter() {
	return (
		<Box direction='row' background='background-contrast' justify='evenly' flex={false}>
			<IconLInk icon={<Webcam />} label='设备' url='/' />
			<IconLInk icon={<Radial />} label='我的' url='/my' />
			<IconLInk icon={<Home />} label='主页' url='/splash' />
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
					icon={<Configure />}
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
