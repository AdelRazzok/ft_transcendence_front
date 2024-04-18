import Button from '@/components/Button/Button'
import { pressStart } from '@/ui/font'
import styles from '@/ui/home.module.css'
import Link from 'next/link'

export default function Page() {
	return (
		<main
			className={`${pressStart.className} ${styles.home_container} container-fluid`}
		>
			<h1 className="pt-5 text-center">FT_TRANSCENDENCE</h1>

			<div
				className={`${styles.auth_container} d-flex gap-5 flex-column justify-content-center align-items-center`}
			>
				<Link href="/login">
					<Button text="Login" />
				</Link>

				<Link href="/signup">
					<Button text="Sign Up" />
				</Link>
			</div>
		</main>
	)
}
