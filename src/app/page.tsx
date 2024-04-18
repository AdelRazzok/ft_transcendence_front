import Button from '@/components/Button/Button'
import { pressStart } from '@/ui/font'
import styles from '@/ui/home.module.css'

export default function Page() {
	return (
		<main
			className={`${pressStart.className} ${styles.home_container} container-fluid`}
		>
			<h1 className="pt-5 text-center">FT_TRANSCENDENCE</h1>

			<div
				className={`${styles.auth_container} d-flex gap-5 flex-column justify-content-center align-items-center`}
			>
				<Button text="Login" link="/" />
				<Button text="Sign Up" link="/" />
			</div>
		</main>
	)
}
