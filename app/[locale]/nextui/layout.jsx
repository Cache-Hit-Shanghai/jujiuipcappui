import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { CustomLocalizationProvider } from '../../../components/localization-provider';
import { MuiThemeProvider } from '../../../components/mui-theme-provider';
import { Providers } from './providers';
import './main.css';

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'cn' }];
}

export default async function LocalizedRootLayout({ children, params: { locale } }) {
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
							<Providers>{children}</Providers>
						</MuiThemeProvider>
					</CustomLocalizationProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
