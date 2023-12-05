'use client';

import { User, Button, Image, Divider } from '@nextui-org/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavbarBack, MobileHeader, MobileMain } from '@/jujiu-ui-components/nextui/core/core-ui';
import { ChatBubbleOutline } from '@styled-icons/material/ChatBubbleOutline';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { StarBorder } from '@styled-icons/material/StarBorder';
import { Share } from '@styled-icons/material/Share';
import { PersonOutline } from '@styled-icons/material/PersonOutline';
import Link, { useJuJiuT } from '@/state/translate';

function CommentBox() {
	const t = useJuJiuT();

	return (
		<div pad='medium' id='comments' className='flex-none'>
			<p className='text-xs'>共9条评论</p>
			{/* <Comments /> */}
		</div>
	);
}

function Description() {
	return (
		<div className='flex flex-col shrink-0 gap-2'>
			<h3 level={3} margin='none'>
				超萌狗狗
			</h3>
			<p className='text-sm'>
				狗是由狼驯化而来的。早在狩猎采集时代，人们就已驯养狗为狩猎时的助手。因此，狗算是人类最早驯养的家畜。河北武安磁山、河南新郑裴李岗、浙江余姚河姆渡等遗址，都发现了狗骨骼，足证其驯养历史之久远。山东胶县三里河出土的狗形鬶，造型生动逼真，使得见新石器时代家犬的形态特征。陕西西安半坡遗址出土的狗骨，头骨较小，额骨突出，肉裂齿小，下颌骨水平边缘弯曲，与华北狼有很大区别，说明人类驯养狗的历史确实很早。
			</p>
			<p className='text-sm'>
				没有人确切知道人与狼第一次互动发生在什么时候。有科学家认为可能是在5万年之前，因为至少要花这么久的时间野狼才能发展出如今的基因差异。当时人与野狼分布在地球表面的许多地方，演化过程可能发生在好几个不同的地区。有些学者则认为狼在14000年前，甚至可能在16000年前的亚洲东南部，就已经被人类从野生狼驯化为家畜、即狗，用来玩、打猎、看家护院。
			</p>
			<p className='text-sm'>
				世界所有种类的犬都起源于约1.6万年前中国长江流域南部驯养的狼。(瑞典皇家理工学院科学家彼得·萨弗莱宁确认了犬类的起源地点和时间)。
			</p>
			<p className='text-sm'>
				狗的听觉十分敏锐，听觉感应能力可达12万赫兹，是人类的6倍，它能听到的最远距离大约是人的400倍！狗对于声音方向的辨别能力也是人类的2倍，能分辨32个方向。
			</p>
			<p className='text-sm'>
				正常情况下其寿命约十多年，狗的寿命大约在10~15年之间，最长的也有20年以上，不过很少见。与猫的平均寿命相近，平均寿命以小型犬为长。
			</p>
		</div>
	);
}

const Page = () => {
	return (
		<div className='flex flex-col h-screen'>
			<MobileHeader>
				<div className='flex flex-row gap-2 items-center'>
					<NavbarBack />
					<User
						name='庞大小姐'
						avatarProps={{
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
						}}
					/>
					<Button size='sm' radius='full' color='primary'>
						关注
					</Button>
				</div>
				<Button isIconOnly variant='light'>
					<Share size={24} />
				</Button>
			</MobileHeader>
			<MobileMain>
				<Carousel dynamicHeight showArrows={false} showStatus={false} showThumbs={false}>
					<Image
						className='object-contain'
						src='https://ts1.cn.mm.bing.net/th/id/R-C.e71020c709637de4bd0b96d3c7aa50b9?rik=w5SFarLizaR2Kg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140529%2f1-140529143K7.jpg&ehk=npIHrLX6sA9tu6squdUi0OwUcG0D4PI9aJZUcvnYhGA%3d&risl=&pid=ImgRaw&r=0'
					/>
					<Image
						className='object-contain'
						src='https://img.zcool.cn/community/01d89d556899f60000012716e4364f.jpg@1280w_1l_2o_100sh.jpg'
					/>
					<Image
						className='object-contain'
						src='https://img1.pconline.com.cn/piclib/200902/05/batch/1/21808/1233825719734fjxnizp4bm.jpg'
					/>
					<Image
						className='object-contain'
						src='https://i4.3conline.com/images/piclib/201004/09/batch/1/57506/12707694838789g8zxh1nlg.jpg'
					/>
				</Carousel>
				<Description />
				<div className='flex shrink-0'>
					<span className='text-xs text-zinc-200'>09-01 上海</span>
				</div>
				<Divider />
				<CommentBox />
			</MobileMain>
			<footer className='p-2 flex flex-row items-center justify-between'>
				<Button size='sm' variant='bordered'>
					发弹幕
				</Button>
				<div className='flex items-center'>
					<Button
						size='sm'
						variant='light'
						startContent={<FavoriteBorder size={24} />}
						as={Link}
						href='#star'
					>
						2166
					</Button>
					<Button size='sm' variant='light' startContent={<StarBorder size={24} />} as={Link} href='#star'>
						4064
					</Button>
					<Button
						size='sm'
						variant='light'
						startContent={<ChatBubbleOutline size={24} />}
						as={Link}
						href='#comments'
					>
						9
					</Button>
				</div>
			</footer>
		</div>
	);
};
export default Page;
