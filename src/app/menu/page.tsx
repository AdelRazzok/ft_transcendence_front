'use client'

import i18n from '@/../i18n'
import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function MainMenu() {
	const { t } = useTranslation()
	const [lang, setLang] = useState('en')
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	useEffect(() => {
		if (isClient) {
			const params = new URLSearchParams(window.location.search)
			const newLang = params.get('lang') || 'en'
			setLang(newLang)
			i18n.changeLanguage(newLang)
		}
	}, [isClient])

	return (
		<>
			<div className={`${homeStyles.gif_background}`}></div>
			<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>PONG</h1>

			<div className="mt-5 gap-5 pt-5 container d-flex flex-column justify-content-center align-items-center">
				<Link
					href={`/local?lang=${lang}`}
					className={`${menuStyles.menu_link}`}
				>
					{t('LOCAL')}
				</Link>
				<Link
					href={`/tournament?lang=${lang}`}
					className={`${menuStyles.menu_link}`}
				>
					{t('TOURNAMENT')}
				</Link>
				<Link
					href={`/languages?lang=${lang}`}
					className={`${menuStyles.menu_link}`}
				>
					{t('LANGUAGES')}
				</Link>
				<Link
					href={`/credits?lang=${lang}`}
					className={`${menuStyles.menu_link}`}
				>
					{t('CREDITS')}
				</Link>
			</div>
		</>
	)
}
