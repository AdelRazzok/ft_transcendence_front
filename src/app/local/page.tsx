'use client'

import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Local() {
	const { t } = useTranslation()
	return (
		<>
			<div className={`${homeStyles.gif_background}`}></div>
			<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>LOCAL</h1>

			<div className="mt-5 gap-5 container d-flex flex-column justify-content-center align-items-center">
				<Link href="/local/solo" className={`${menuStyles.menu_link} mt-5`}>
					{t('1_PLAYER')}
				</Link>
				<Link href="/local/multi" className={`${menuStyles.menu_link} mt-5`}>
					{t('2_PLAYERS')}
				</Link>
				<Link href="/local/quatro" className={`${menuStyles.menu_link} mt-5`}>
					{t('4_PLAYERS')}
				</Link>
			</div>
		</>
	)
}
