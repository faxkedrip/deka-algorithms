import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.svg" />
				{/* door baigaa shig seo/search engine optimization/ hiih bolomjtoi* /}
				{/* <!-- Meta --> */}
				<meta name="author" content="Delgernyam" />
				<meta name="theme-color" content="#3b82f6" />
				<meta name="description" content="Deka bol algorithm programmchlaliin dadal bolgoh zorilgotoi programm etc..." />
				<meta name="robots" content="index, nofollow" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
