'use client';

import { Text, Box, Nav, Button, Stack, Footer, Video, Paragraph, Avatar, Heading, Layer } from 'grommet';
import { ShareRounded, Favorite, StarOutline, UserFemale, Close } from 'grommet-icons';
import { CommentDots } from '@styled-icons/fa-regular/CommentDots';
import { ExpandAlt } from '@styled-icons/boxicons-regular/ExpandAlt';
import { CollapseAlt } from '@styled-icons/boxicons-regular/CollapseAlt';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { Comments } from '../components';

function Description() {
	const [expand, setExpand] = useState(false);
	const [hide, setHide] = useState(false);

	return (
		<Box pad='medium'>
			<Box direction='row' gap='medium' align='center' style={{ visibility: hide ? 'hidden' : 'visible' }}>
				<Avatar border>
					<UserFemale color='text-strong' />
				</Avatar>
				<Text>庞大小姐</Text>
				<Button label='关注' primary size='small' />
			</Box>
			<Box direction='row' gap='medium' align='end'>
				<Paragraph
					size='small'
					maxLines={expand ? undefined : 2}
					margin='none'
					style={{ visibility: hide ? 'hidden' : 'visible' }}
					onClick={() => setExpand(!expand)}
				>
					国营常陆海滨公园面临鹿岛滩、座落在从久慈川留出的细沙和北东风形成的沙丘上面。在此附近的海域、来自太平洋冲的暖流和寒流结合、所以在公园里同时可以看到北方系和南方系的动植物。在公园里面、除了一年四季都可以欣赏到各种花卉之外、还有欢快游乐园区、800平方米的“大草原”、“林间体育活动广场”“烧烤广场”等等、距离东京很近、是很有人气的观光地。
				</Paragraph>
				{!expand && (
					<Button
						pad='none'
						icon={hide ? <CollapseAlt size='24' /> : <ExpandAlt size='24' />}
						onClick={() => setHide(!hide)}
					/>
				)}
			</Box>
		</Box>
	);
}

function DefaultContent({ setShowComments }) {
	return (
		<>
			<JuJiuMain pad='none'>
				<Stack fill>
					<Box fill>
						<Video controls={false} fit='contain' autoPlay mute loop style={{ zIndex: '0' }}>
							<source
								src='https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4'
								type='video/mp4'
							/>
						</Video>
					</Box>
					<Box fill justify='between'>
						<Nav direction='row' margin='small' align='center' justify='between'>
							<IconBack />
							<Button icon={<ShareRounded />} />
						</Nav>
						<Description />
					</Box>
				</Stack>
			</JuJiuMain>
			<Footer justify='between' pad='medium'>
				<Box>
					<Button size='small' label='发弹幕' primary color='background-contrast' />
				</Box>
				<Box direction='row' gap='medium'>
					<Box direction='row' align='center' gap='small'>
						<Favorite />
						<Text size='small'>2166</Text>
					</Box>
					<Box direction='row' align='center' gap='small'>
						<StarOutline />
						<Text size='small'>4064</Text>
					</Box>
					<Button onClick={() => setShowComments(true)}>
						<Box direction='row' align='center' gap='small'>
							<CommentDots size='24' />
							<Text size='small'>9</Text>
						</Box>
					</Button>
				</Box>
			</Footer>
		</>
	);
}

function ContentWithComments({ setShowComments }) {
	const slideUp = keyframes`
		0% { height: 0; }
		100% { height: 62%; }
	`;
	const AnimatedBox = styled(Box)`
		animation: ${slideUp} 0.5s linear;
	`;

	return (
		<JuJiuMain pad='none' gap='none'>
			<Box flex={{ grow: 1, shrink: 1 }}>
				<Video controls={false} fit='contain' autoPlay mute loop style={{ zIndex: '0' }}>
					<source
						src='https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4'
						type='video/mp4'
					/>
				</Video>
			</Box>
			<AnimatedBox height='62%' flex={false} pad='small' background='background-back' overflow='hidden'>
				<Box direction='row' justify='between' align='center'>
					<Heading margin='none' level={3}>
						共9条评论
					</Heading>
					<Button icon={<Close />} onClick={() => setShowComments(false)} />
				</Box>
				<Comments />
			</AnimatedBox>
		</JuJiuMain>
	);
}

export default function Page() {
	const [showComments, setShowComments] = useState(false);

	return (
		<Box fill background='black'>
			{showComments ? (
				<ContentWithComments setShowComments={setShowComments} />
			) : (
				<DefaultContent setShowComments={setShowComments} />
			)}
		</Box>
	);
}
