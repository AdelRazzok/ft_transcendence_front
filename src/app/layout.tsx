import { jockeyOne, pressStart } from '@/ui/font'
import '@/ui/global.css'
import styles from '@/ui/home.module.css'
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
		<html lang="en" dir="ltr">
			<body className={`${jockeyOne.className}`}>
				<main
					className={`${pressStart.className} ${styles.home_container} container-fluid`}
				>
					{children}
				</main>
			</body>
		</html>
	)
}
