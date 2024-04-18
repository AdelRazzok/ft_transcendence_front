import styles from '@/components/Input/input.module.css'
import { IInput } from '@/interfaces/IInput'

export default function Input({ name, type, placeholder }: IInput) {
	return (
		<input
			className={`${styles.auth_input}`}
			name={name}
			type={type}
			placeholder={placeholder}
		></input>
	)
}
