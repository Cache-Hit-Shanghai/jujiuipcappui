'use client';

import { Text, Box, Button, Avatar, TextInput, Anchor } from 'grommet';
import { Favorite, UserFemale, Emoji, Gallery } from 'grommet-icons';
import { useJuJiuT } from '@/state/translate';

function CommectGroup({ children }) {
	return (
		<Box flex={false} gap='small' pad={{ left: 'medium', vertical: 'medium' }}>
			{children}
		</Box>
	);
}

function CommentPanel({ children }) {
	return (
		<Box direction='row' gap='medium'>
			{children}
		</Box>
	);
}

function CommentLike() {
	return (
		<Box flex={false} pad={{ right: 'medium' }}>
			<Button>
				<Box align='center'>
					<Favorite />
					<Text size='small'>10</Text>
				</Box>
			</Button>
		</Box>
	);
}

export function Comments() {
	const t = useJuJiuT();

	return (
		<Box overflow='auto' gap='small'>
			<Box flex={false} direction='row' pad='small' gap='small' align='center'>
				<Avatar border flex={false}>
					<UserFemale color='text-strong' />
				</Avatar>
				<Box direction='row' align='center' gap='small' border round='small' pad={{ right: 'small' }}>
					<TextInput plain placeholder='说点什么' focusIndicator={false} />
					<Button plain label='@' />
					<Button plain icon={<Emoji />} />
					<Button plain icon={<Gallery />} />
				</Box>
			</Box>
			<CommectGroup>
				<CommentPanel>
					<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
					<Box flex={{ grow: 1, shrink: 1 }}>
						<Box direction='row' gap='small'>
							<Text size='small' weight='bold'>
								大小姐
							</Text>
							<Text size='small' color='text-xweak'>
								今天 下午4:43
							</Text>
						</Box>
						<Text size='small' color='text-strong'>
							How artistic!真美！
						</Text>
						<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
					</Box>
					<CommentLike />
				</CommentPanel>
				<CommentPanel>
					<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
					<Box flex={{ grow: 1, shrink: 1 }}>
						<Box direction='row' gap='small'>
							<Text size='small' weight='bold'>
								小二哥
							</Text>
							<Text size='small' color='text-xweak'>
								昨天 下午4:43
							</Text>
						</Box>
						<Text size='small' color='text-strong'>
							This has been very useful for my research. Thanks as well!
						</Text>
						<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
					</Box>
					<CommentLike />
				</CommentPanel>
				<CommectGroup>
					<CommentPanel>
						<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
						<Box flex={{ grow: 1, shrink: 1 }}>
							<Box direction='row' gap='small'>
								<Text size='small' weight='bold'>
									Jenny Hess
								</Text>
								<Text size='small' color='text-xweak'>
									刚才
								</Text>
							</Box>
							<Text size='small' color='text-strong'>
								Elliot you are always so right :)
							</Text>
							<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
						</Box>
						<CommentLike />
					</CommentPanel>
					<CommentPanel>
						<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
						<Box flex={{ grow: 1, shrink: 1 }}>
							<Box direction='row' gap='small'>
								<Text size='small' weight='bold'>
									大小姐
								</Text>
								<Text size='small' color='text-xweak'>
									刚才
								</Text>
							</Box>
							<Text size='small' color='text-strong'>
								Elliot you are always so right :)
							</Text>
							<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
						</Box>
						<CommentLike />
					</CommentPanel>
				</CommectGroup>
				<CommentPanel>
					<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
					<Box flex={{ grow: 1, shrink: 1 }}>
						<Box direction='row' gap='small'>
							<Text size='small' weight='bold'>
								Joe Henderson
							</Text>
							<Text size='small' color='text-xweak'>
								5天前
							</Text>
						</Box>
						<Text size='small' color='text-strong'>
							Dude, this is awesome. Thanks so much
						</Text>
						<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
					</Box>
					<CommentLike />
				</CommentPanel>
				<CommentPanel>
					<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
					<Box flex={{ grow: 1, shrink: 1 }}>
						<Box direction='row' gap='small'>
							<Text size='small' weight='bold'>
								大小姐
							</Text>
							<Text size='small' color='text-xweak'>
								今天 下午4:43
							</Text>
						</Box>
						<Text size='small' color='text-strong'>
							How artistic!真美！
						</Text>
						<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
					</Box>
					<CommentLike />
				</CommentPanel>
				<CommentPanel>
					<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
					<Box flex={{ grow: 1, shrink: 1 }}>
						<Box direction='row' gap='small'>
							<Text size='small' weight='bold'>
								小二哥
							</Text>
							<Text size='small' color='text-xweak'>
								昨天 下午4:43
							</Text>
						</Box>
						<Text size='small' color='text-strong'>
							This has been very useful for my research. Thanks as well!
						</Text>
						<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
					</Box>
					<CommentLike />
				</CommentPanel>
				<CommectGroup>
					<CommentPanel>
						<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
						<Box flex={{ grow: 1, shrink: 1 }}>
							<Box direction='row' gap='small'>
								<Text size='small' weight='bold'>
									Jenny Hess
								</Text>
								<Text size='small' color='text-xweak'>
									刚才
								</Text>
							</Box>
							<Text size='small' color='text-strong'>
								Elliot you are always so right :)
							</Text>
							<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
						</Box>
						<CommentLike />
					</CommentPanel>
					<CommentPanel>
						<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
						<Box flex={{ grow: 1, shrink: 1 }}>
							<Box direction='row' gap='small'>
								<Text size='small' weight='bold'>
									大小姐
								</Text>
								<Text size='small' color='text-xweak'>
									刚才
								</Text>
							</Box>
							<Text size='small' color='text-strong'>
								Elliot you are always so right :)
							</Text>
							<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
						</Box>
						<CommentLike />
					</CommentPanel>
				</CommectGroup>
				<CommentPanel>
					<Avatar flex={false} src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
					<Box flex={{ grow: 1, shrink: 1 }}>
						<Box direction='row' gap='small'>
							<Text size='small' weight='bold'>
								Joe Henderson
							</Text>
							<Text size='small' color='text-xweak'>
								5天前
							</Text>
						</Box>
						<Text size='small' color='text-strong'>
							Dude, this is awesome. Thanks so much
						</Text>
						<Anchor as={Button} weight='normal' size='small' label={t('回复')} />
					</Box>
					<CommentLike />
				</CommentPanel>
			</CommectGroup>
		</Box>
	);
}
