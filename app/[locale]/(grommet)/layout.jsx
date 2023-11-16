import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import GrommetRoot from '@/jujiu-ui-components/layout/grommet';
import { CustomLocalizationProvider } from '../../../components/localization-provider';
import { MuiThemeProvider } from '../../../components/mui-theme-provider';

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'cn' }];
}

export default async function RootLayout({ children, params: { locale } }) {
	let messages;
	try {
		messages = (await import(`@/jujiu-ui-components/messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}

	return (
		<html suppressHydrationWarning>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages} now={new Date()} timeZone='Asia/Shanghai'>
					<CustomLocalizationProvider>
						<MuiThemeProvider>
							<GrommetRoot themeMode='dark'>{children}</GrommetRoot>
						</MuiThemeProvider>
					</CustomLocalizationProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
