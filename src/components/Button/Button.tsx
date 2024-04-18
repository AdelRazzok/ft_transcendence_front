import styles from '@/components/Button/button.module.css'
import { IButton } from '@/interfaces/IButton'

export default function Button({ text, link }: IButton) {
	return <button className={`${styles.auth_button}`}>{text}</button>
}
