import styles from '@/ui/home.module.css'

export default function Login() {
	return (
		<>
			<div className={`${styles.gif_background}`}></div>
			<h1 className="pt-5 text-center">FT_TRANSCENDENCE</h1>

			<div
				className={`${styles.auth_container} ${styles.form_container} d-flex flex-column justify-content-center align-items-center`}
			>
				<input placeholder="username"></input>
				<input placeholder="password"></input>
			</div>
		</>
	)
}
