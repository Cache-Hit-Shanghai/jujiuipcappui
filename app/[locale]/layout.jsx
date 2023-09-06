import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import GrommetRoot from "@/jujiuuicomponents/layout/grommet";
import { CustomLocalizationProvider } from "../../components/localization-provider";
import { MuiThemeProvider } from "../../components/mui-theme-provider";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }];
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CustomLocalizationProvider>
            <MuiThemeProvider>
              <GrommetRoot>{children}</GrommetRoot>
            </MuiThemeProvider>
          </CustomLocalizationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
