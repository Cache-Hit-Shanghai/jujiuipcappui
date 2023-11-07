'use client';

import { Text, Box, Nav, Menu } from 'grommet';
import { AddCircle, Mail, Add, Scan } from 'grommet-icons';
import { Group } from '@styled-icons/fluentui-system-regular/Group';
import { Pets } from '@styled-icons/material-outlined/Pets';
import Link, { useJuJiuT } from '@/state/translate';
import { AppFooter, DeviceList } from '@/app/components';
import { ButtonLink, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';

export default function Page() {
	const t = useJuJiuT();

	return (
		<Box fill>
			<Nav direction='row' justify='between' align='center' background='background-contrast'>
				<Box direction='row' align='center' pad='small' gap='small'>
					<Pets size='24' />
					<Text size='large'>{t('小皮部落')}</Text>
				</Box>
				<Box direction='row' gap='small' align='center'>
					<ButtonLink href='/message' icon={<Mail />} badge={7} />
					<Menu
						dropProps={{ align: { top: 'bottom', right: 'right' } }}
						icon={<AddCircle />}
						items={[
							{
								label: (
									<Link href='/device/binding' passHref legacyBehavior>
										<Text>{t('添加设备')}</Text>
									</Link>
								),
								icon: (
									<Box margin={{ right: 'small' }}>
										<Add />
									</Box>
								),
							},
							{
								label: (
									<Link href='/device/group' passHref legacyBehavior>
										<Text>{t('设备分组')}</Text>
									</Link>
								),
								icon: (
									<Box margin={{ right: 'small' }}>
										<Group size='24' />
									</Box>
								),
							},
							{
								label: (
									<Link href='/device/scan' passHref legacyBehavior>
										<Text>{t('扫一扫')}</Text>
									</Link>
								),
								icon: (
									<Box margin={{ right: 'small' }}>
										<Scan />
									</Box>
								),
							},
						]}
					/>
				</Box>
			</Nav>
			<JuJiuMain pad='none'>
				<DeviceList />
			</JuJiuMain>
			<AppFooter uiDesign />
		</Box>
	);
}
