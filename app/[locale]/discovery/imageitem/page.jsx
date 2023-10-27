'use client';

import { Text, Box, Nav, Button, Heading, Footer, Paragraph, Image, Avatar } from 'grommet';
import { ShareRounded, Favorite, StarOutline, UserFemale } from 'grommet-icons';
import { CommentDots } from '@styled-icons/fa-regular/CommentDots';
import { IconBack, JuJiuMain } from '@/jujiu-ui-components/core/core-ui';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Description() {
	return (
		<Box pad='medium' gap='medium'>
			<Heading level={3} margin='none'>
				超萌狗狗
			</Heading>
			<Paragraph size='small' margin='none'>
				狗是由狼驯化而来的。早在狩猎采集时代，人们就已驯养狗为狩猎时的助手。因此，狗算是人类最早驯养的家畜。河北武安磁山、河南新郑裴李岗、浙江余姚河姆渡等遗址，都发现了狗骨骼，足证其驯养历史之久远。山东胶县三里河出土的狗形鬶，造型生动逼真，使得见新石器时代家犬的形态特征。陕西西安半坡遗址出土的狗骨，头骨较小，额骨突出，肉裂齿小，下颌骨水平边缘弯曲，与华北狼有很大区别，说明人类驯养狗的历史确实很早。
			</Paragraph>
			<Paragraph size='small' margin='none'>
				没有人确切知道人与狼第一次互动发生在什么时候。有科学家认为可能是在5万年之前，因为至少要花这么久的时间野狼才能发展出如今的基因差异。当时人与野狼分布在地球表面的许多地方，演化过程可能发生在好几个不同的地区。有些学者则认为狼在14000年前，甚至可能在16000年前的亚洲东南部，就已经被人类从野生狼驯化为家畜、即狗，用来玩、打猎、看家护院。
			</Paragraph>
			<Paragraph size='small' margin='none'>
				世界所有种类的犬都起源于约1.6万年前中国长江流域南部驯养的狼。(瑞典皇家理工学院科学家彼得·萨弗莱宁确认了犬类的起源地点和时间)。
			</Paragraph>
			<Paragraph size='small' margin='none'>
				狗的听觉十分敏锐，听觉感应能力可达12万赫兹，是人类的6倍，它能听到的最远距离大约是人的400倍！狗对于声音方向的辨别能力也是人类的2倍，能分辨32个方向。
			</Paragraph>
			<Paragraph size='small' margin='none'>
				正常情况下其寿命约十多年，狗的寿命大约在10~15年之间，最长的也有20年以上，不过很少见。与猫的平均寿命相近，平均寿命以小型犬为长。
			</Paragraph>
		</Box>
	);
}

export default function Page() {
	return (
		<Box fill>
			<Nav direction='row' margin='small' align='center' justify='between'>
				<IconBack />
				<Box direction='row' gap='medium' align='center'>
					<Avatar border>
						<UserFemale color='text-strong' />
					</Avatar>
					<Text>庞大小姐</Text>
					<Button label='关注' primary size='small' />
				</Box>
				<Button icon={<ShareRounded />} />
			</Nav>
			<JuJiuMain pad='none' gap='none' overflow='auto'>
				<Carousel dynamicHeight showArrows={false} showStatus={false} showThumbs={false}>
					<Image
						fit='contain'
						src='https://ts1.cn.mm.bing.net/th/id/R-C.e71020c709637de4bd0b96d3c7aa50b9?rik=w5SFarLizaR2Kg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140529%2f1-140529143K7.jpg&ehk=npIHrLX6sA9tu6squdUi0OwUcG0D4PI9aJZUcvnYhGA%3d&risl=&pid=ImgRaw&r=0'
					/>
					<Image
						fit='contain'
						src='https://img.zcool.cn/community/01d89d556899f60000012716e4364f.jpg@1280w_1l_2o_100sh.jpg'
					/>
					<Image
						fit='contain'
						src='https://img1.pconline.com.cn/piclib/200902/05/batch/1/21808/1233825719734fjxnizp4bm.jpg'
					/>
					<Image
						fit='contain'
						src='https://i4.3conline.com/images/piclib/201004/09/batch/1/57506/12707694838789g8zxh1nlg.jpg'
					/>
				</Carousel>
				<Description />
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
					<Box direction='row' align='center' gap='small'>
						<CommentDots size='24' />
						<Text size='small'>9</Text>
					</Box>
				</Box>
			</Footer>
		</Box>
	);
}
