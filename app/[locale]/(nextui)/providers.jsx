'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { useRouter } from '@/state/translate';

export function Providers({ children }) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<ThemeProvider attribute='class' defaultTheme='dark'>
				{children}
			</ThemeProvider>
		</NextUIProvider>
	);
}
