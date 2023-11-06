'use client';

import { Text, Box, Button, Avatar, TextInput } from 'grommet';
import { Comment } from 'semantic-ui-react';
import { Favorite, UserFemale, Emoji, Gallery } from 'grommet-icons';
import { useJuJiuT } from '@/state/translate';
import 'semantic-ui-css/semantic.min.css';

export function Comments() {
	const t = useJuJiuT();

	return (
		<Box overflow='auto' pad='small'>
			<Box flex={false} direction='row' gap='small' align='center'>
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
			<Comment.Group>
				<Box direction='row' justify='between' align='start'>
					<Comment>
						<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
						<Comment.Content>
							<Comment.Author as='a'>Matt</Comment.Author>
							<Comment.Metadata>
								<div>Today at 5:42PM</div>
							</Comment.Metadata>
							<Comment.Text>How artistic!</Comment.Text>
							<Comment.Actions>
								<Comment.Action>{t('回复')}</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>
					<Button>
						<Box align='center'>
							<Favorite />
							<Text size='small'>10</Text>
						</Box>
					</Button>
				</Box>
				<Box direction='row' justify='between' align='start'>
					<Comment>
						<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
						<Comment.Content>
							<Comment.Author as='a'>Elliot Fu</Comment.Author>
							<Comment.Metadata>
								<div>Yesterday at 12:30AM</div>
							</Comment.Metadata>
							<Comment.Text>
								<p>This has been very useful for my research. Thanks as well!</p>
							</Comment.Text>
							<Comment.Actions>
								<Comment.Action>{t('回复')}</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
						<Comment.Group>
							<Box direction='row' justify='between' align='start'>
								<Comment>
									<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
									<Comment.Content>
										<Comment.Author as='a'>Jenny Hess</Comment.Author>
										<Comment.Metadata>
											<div>Just now</div>
										</Comment.Metadata>
										<Comment.Text>Elliot you are always so right :)</Comment.Text>
										<Comment.Actions>
											<Comment.Action>{t('回复')}</Comment.Action>
										</Comment.Actions>
									</Comment.Content>
								</Comment>
								<Button>
									<Box align='center'>
										<Favorite />
										<Text size='small'>10</Text>
									</Box>
								</Button>
							</Box>
						</Comment.Group>
					</Comment>
					<Button>
						<Box align='center'>
							<Favorite />
							<Text size='small'>10</Text>
						</Box>
					</Button>
				</Box>
				<Box direction='row' justify='between' align='start'>
					<Comment>
						<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
						<Comment.Content>
							<Comment.Author as='a'>Joe Henderson</Comment.Author>
							<Comment.Metadata>
								<div>5 days ago</div>
							</Comment.Metadata>
							<Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
							<Comment.Actions>
								<Comment.Action>{t('回复')}</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>
					<Button>
						<Box align='center'>
							<Favorite />
							<Text size='small'>10</Text>
						</Box>
					</Button>
				</Box>
				<Box direction='row' justify='between' align='start'>
					<Comment>
						<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
						<Comment.Content>
							<Comment.Author as='a'>Matt</Comment.Author>
							<Comment.Metadata>
								<div>Today at 5:42PM</div>
							</Comment.Metadata>
							<Comment.Text>How artistic!</Comment.Text>
							<Comment.Actions>
								<Comment.Action>{t('回复')}</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>
					<Button>
						<Box align='center'>
							<Favorite />
							<Text size='small'>10</Text>
						</Box>
					</Button>
				</Box>
				<Box direction='row' justify='between' align='start'>
					<Comment>
						<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
						<Comment.Content>
							<Comment.Author as='a'>Elliot Fu</Comment.Author>
							<Comment.Metadata>
								<div>Yesterday at 12:30AM</div>
							</Comment.Metadata>
							<Comment.Text>
								<p>This has been very useful for my research. Thanks as well!</p>
							</Comment.Text>
							<Comment.Actions>
								<Comment.Action>{t('回复')}</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
						<Comment.Group>
							<Box direction='row' justify='between' align='start'>
								<Comment>
									<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
									<Comment.Content>
										<Comment.Author as='a'>Jenny Hess</Comment.Author>
										<Comment.Metadata>
											<div>Just now</div>
										</Comment.Metadata>
										<Comment.Text>Elliot you are always so right :)</Comment.Text>
										<Comment.Actions>
											<Comment.Action>{t('回复')}</Comment.Action>
										</Comment.Actions>
									</Comment.Content>
								</Comment>
								<Button>
									<Box align='center'>
										<Favorite />
										<Text size='small'>10</Text>
									</Box>
								</Button>
							</Box>
						</Comment.Group>
					</Comment>
					<Button>
						<Box align='center'>
							<Favorite />
							<Text size='small'>10</Text>
						</Box>
					</Button>
				</Box>
				<Box direction='row' justify='between' align='start'>
					<Comment>
						<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
						<Comment.Content>
							<Comment.Author as='a'>Joe Henderson</Comment.Author>
							<Comment.Metadata>
								<div>5 days ago</div>
							</Comment.Metadata>
							<Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
							<Comment.Actions>
								<Comment.Action>{t('回复')}</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>
					<Button>
						<Box align='center'>
							<Favorite />
							<Text size='small'>10</Text>
						</Box>
					</Button>
				</Box>
			</Comment.Group>
		</Box>
	);
}
