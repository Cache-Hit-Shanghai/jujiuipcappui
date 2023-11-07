import { Navbar, NavbarItem, NavbarContent } from '@nextui-org/react';
import { ButtonBack } from '@/jujiu-ui-components/nextui/core/core-ui';
import { AppLogo, AppMark } from '@/jujiu-ui-components/nextui/ipc/about/brand';

export default function Page() {
	return (
		<div className='h-screen flex flex-col'>
			<Navbar isBordered position='static' height='3rem' maxWidth='full'>
				<NavbarContent>
					<NavbarItem className='p-0'>
						<ButtonBack />
					</NavbarItem>
					<NavbarItem>
						<p>关于</p>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<div className='flex flex-col flex-1 p-2'>
				<AppLogo />
			</div>
			<AppMark />
		</div>
	);
}
