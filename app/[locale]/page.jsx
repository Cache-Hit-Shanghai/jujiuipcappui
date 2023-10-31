'use client';

import { Text, Box, Nav, Menu, Accordion, AccordionPanel } from 'grommet';
import { AddCircle, Mail, Add, Scan, Robot, Webcam } from 'grommet-icons';
import { Group } from '@styled-icons/fluentui-system-regular/Group';
import { Pets } from '@styled-icons/material-outlined/Pets';
import Link, { useJuJiuT } from '@/state/translate';
import { AppFooter, IpcCard, IpcCardRobot, toggleFullScreen } from '@/app/components';
import { ButtonLink, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { JuJiuTagFromShared, JuJiuTagSharing } from '@/jujiu-ui-components/core/core-tag';

export default function Page() {
	const t = useJuJiuT();

	return (
		<Box fill>
			<Nav direction='row' justify='between' align='center' background='background-contrast'>
				<Box direction='row' align='center' pad='small' gap='small'>
					<Pets size='24' />
					<Text size='xlarge'>{t('小皮部落')}</Text>
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
				<Accordion>
					<AccordionPanel label={<Text margin='small'>{t('默认分组')}</Text>}>
						<Box gap='medium' margin='small'>
							<IpcCard
								key={0}
								label={
									<Box direction='row' align='center' gap='medium'>
										<Webcam />
										<Text>客厅IPC</Text>
										<JuJiuTagFromShared />
									</Box>
								}
								imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
							/>
							<IpcCardRobot
								key={10}
								online
								cloudStorage='expired'
								onClick={() => toggleFullScreen()}
								label={
									<Box direction='row' align='center' gap='medium'>
										<Robot />
										<Text>PixelBot</Text>
										<JuJiuTagSharing />
									</Box>
								}
								imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
							/>
						</Box>
					</AccordionPanel>
					<AccordionPanel label={<Text margin='small'>办公室</Text>}>
						<Box gap='medium' margin='small'>
							<IpcCard
								key={1}
								label='办3'
								imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.4894a961ab87e3459babae4ef8a2f4fa?rik=1P7ZI7Evnz4Pqg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0830%2fxiaguang2.jpg&ehk=Ok%2fjrv35R0L218oT%2flliRL8DJc52pARVnWU%2bXOpUwq4%3d&risl=&pid=ImgRaw&r=0'
							/>
							<IpcCard
								key={2}
								label='办5'
								imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
							/>
							<IpcCard
								key={3}
								label='办7'
								imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.3edbd350d03c25ed988236c50d0733e6?rik=txi3%2f%2b%2fVYUJofg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0802%2fwmdqfj4.jpg&ehk=TY9%2f90VQn6m3NYCoiPX2UyRYQIT7dkGJtTJli1W7pfo%3d&risl=&pid=ImgRaw&r=0'
							/>
							<IpcCard
								key={4}
								label='办9'
								imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
							/>
						</Box>
					</AccordionPanel>
				</Accordion>
			</JuJiuMain>
			<AppFooter uiDesign />
		</Box>
	);
}
