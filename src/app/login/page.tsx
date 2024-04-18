'use client'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import styles from '@/ui/home.module.css'
import Link from 'next/link'
import { FormEvent } from 'react'

export default function Login() {
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		console.log('submited')
	}

	return (
		<>
			<div className={`${styles.gif_background}`}></div>
			<h1 className="pt-5 text-center">FT_TRANSCENDENCE</h1>

			<div
				className={`${styles.auth_container} container d-flex flex-column justify-content-center align-items-center`}
			>
				<h2>Login</h2>

				<form
					onSubmit={onSubmit}
					className="d-flex my-5 gap-5 flex-column justify-content-center align-items-center"
				>
					<Input type="text" name="username" placeholder="Username"></Input>
					<Input type="password" name="password" placeholder="Password"></Input>
					<Button text="Submit"></Button>
				</form>

				<Link href="/signup" className="text-white">
					Sign up
				</Link>
			</div>
		</>
	)
}
