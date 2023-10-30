import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import GrommetRoot from '@/jujiu-ui-components/layout/grommet';
import { CustomLocalizationProvider } from '../../components/localization-provider';
import { MuiThemeProvider } from '../../components/mui-theme-provider';
import { FullScreen } from '../components';

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
		<html>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<CustomLocalizationProvider>
						<MuiThemeProvider>
							<GrommetRoot themeMode='light'>
								<FullScreen>{children}</FullScreen>
							</GrommetRoot>
						</MuiThemeProvider>
					</CustomLocalizationProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
