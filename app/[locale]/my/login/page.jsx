'use client';

import { Text, Box, Avatar, Nav, Button } from 'grommet';
import { LoginCircle } from '@styled-icons/remix-fill/LoginCircle';
import { Wechat } from '@styled-icons/remix-fill/Wechat';
import { Alipay } from '@styled-icons/remix-fill/Alipay';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';

const links = [
	{ label: '检查更新', url: '#' },
	{ label: '服务条款', url: '#' },
	{ label: '隐私政策', url: '#' },
	{ label: '官网', url: '#' },
	{ label: '使用帮助', url: '#' },
];

export default function Page() {
	return (
		<Box fill>
			<Nav direction='row' align='center'>
				<IconBack />
				<Text>用户登录</Text>
			</Nav>
			<JuJiuMain>
				<Box fill align='center' justify='center' gap='large'>
					<Button>
						<Box align='center' gap='small'>
							<Avatar background='background-contrast' size='large' pad='small'>
								<LoginCircle />
							</Avatar>
							<Text>密码登录</Text>
						</Box>
					</Button>
					<Button>
						<Box align='center' gap='small'>
							<Avatar background='background-contrast' size='large' pad='small'>
								<Wechat />
							</Avatar>
							<Text>微信登录</Text>
						</Box>
					</Button>
					<Button>
						<Box align='center' gap='small'>
							<Avatar background='background-contrast' size='large' pad='small'>
								<Alipay />
							</Avatar>
							<Text>支付宝登录</Text>
						</Box>
					</Button>
				</Box>
			</JuJiuMain>
		</Box>
	);
}
