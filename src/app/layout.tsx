import { jockeyOne } from '@/ui/font'
import '@/ui/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
	title: 'ft_transcendence',
	description: 'Pong du futur',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr" dir="ltr">
			<body className={`${jockeyOne.className}`}>{children}</body>
		</html>
	)
}
