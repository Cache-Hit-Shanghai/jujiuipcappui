'use client';

import { Text, Box, Nav, CardHeader, CardBody, Avatar } from 'grommet';
import { Gallery, CloudUpload, ShareRounded, User, Upgrade } from 'grommet-icons';
import { PersonFeedback } from '@styled-icons/fluentui-system-regular/PersonFeedback';
import { AppFooter } from '@/app/components';
import { ButtonLink, IconLink, LinkGroup, JuJiuMain, JuJiuCard } from '@/jujiu-ui-components/core/core-ui';

const links = [
	{ label: '账号设置', href: '/my/account' },
	{ label: '通知设置', href: '/my/notification' },
	{ label: '界面设置', href: '/my/uisettings' },
	{ label: '系统信息', href: '/my/sysinfo' },
	{ label: '录像截图设置', href: '/my/storagesettings' },
	{ label: '关于', href: '/my2/about' },
];

export default function Page() {
	return (
		<Box fill>
			<Nav direction='row' margin='small' justify='between'>
				<ButtonLink href='/my/login'>
					<Box direction='row' gap='small' align='center'>
						<Avatar background='background-contrast'>
							<User />
						</Avatar>
						<Box align='start'>
							<Text>用户34881</Text>
							<Text size='xsmall' color='text-xweak'>
								黄金会员
							</Text>
						</Box>
					</Box>
				</ButtonLink>
			</Nav>
			<JuJiuMain>
				<JuJiuCard>
					<CardBody>
						<Box direction='row' justify='evenly'>
							<IconLink icon={<Gallery />} label='相册' href='/my/gallery' />
							<IconLink icon={<CloudUpload />} label='云存储' href='/my/cloudstorage' />
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardHeader>
						<Text>常用工具</Text>
					</CardHeader>
					<CardBody>
						<Box direction='row' justify='evenly'>
							<IconLink icon={<Upgrade />} label='固件升级' href='/my/ota' />
							<IconLink icon={<ShareRounded />} label='我的分享' href='/my/sharing' />
							<IconLink icon={<PersonFeedback size='24' />} label='帮助与反馈' href='/my/feedback' />
						</Box>
					</CardBody>
				</JuJiuCard>
				<LinkGroup data={links} />
			</JuJiuMain>
			<AppFooter uiDesign />
		</Box>
	);
}