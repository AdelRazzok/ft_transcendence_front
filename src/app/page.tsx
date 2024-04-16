import { pressStart } from '@/ui/font'
import styles from '@/ui/home.module.css'

export default function Page() {
	return (
		<main
			className={`${pressStart.className} ${styles.home_container} container-fluid`}
		>
			<h1 className={`${pressStart.className} mt-4 text-center`}>
				FT_TRANSCENDENCE
			</h1>
		</main>
	)
}
