import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

const themeScript = `
(function() {
  try {
    var storageKey = 'theme';
    var storedTheme = localStorage.getItem(storageKey);
    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme;
    var root = document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  } catch (error) {}
})();
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" suppressHydrationWarning>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}