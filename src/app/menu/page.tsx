import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import Link from 'next/link'

export default function MainMenu() {
	return (
		<>
			<div className={`${homeStyles.gif_background}`}></div>
			<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>PONG</h1>

			<div className="mt-5 gap-5 container d-flex flex-column justify-content-center align-items-center">
				<Link href="/local" className={`${menuStyles.menu_link}`}>
					LOCAL
				</Link>

				<Link href="" className={`${menuStyles.menu_link}`}>
					ONLINE
				</Link>

				<Link href="" className={`${menuStyles.menu_link}`}>
					TOURNAMENT
				</Link>

				<Link href="" className={`${menuStyles.menu_link}`}>
					SETTINGS
				</Link>

				<Link href="" className={`${menuStyles.menu_link}`}>
					CREDITS
				</Link>
			</div>
		</>
	)
}
