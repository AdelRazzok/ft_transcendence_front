import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import Link from 'next/link'

export default function Local() {
	return (
		<>
			<div className={`${homeStyles.gif_background}`}></div>
			<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>LOCAL</h1>

			<div className="mt-5 gap-5 container d-flex flex-column justify-content-center align-items-center">
				<Link href="/local/solo" className={`${menuStyles.menu_link} mt-5`}>
					1 PLAYER
				</Link>
				<Link href="/local/multi" className={`${menuStyles.menu_link} mt-5`}>
					2 PLAYERS
				</Link>
			</div>
		</>
	)
}
