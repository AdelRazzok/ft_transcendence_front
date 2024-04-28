'use client'

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import Link from 'next/link'
import i18n from '@/../i18n'

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
			<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>
				{t('LOCAL')}
			</h1>

			<div className="mt-5 gap-5 pt-5 container d-flex flex-column justify-content-center align-items-center">
				<Link
					href={`/local/solo?lang=${lang}`}
					className={`${menuStyles.menu_link}`}
				>
					{t('1_PLAYER')}
				</Link>
				<Link
					href={`/local/multi?lang=${lang}`}
					className={`${menuStyles.menu_link}`}
				>
					{t('2_PLAYERS')}
				</Link>
				<Link
					href={`/local/4PLAYERS?lang=${lang}`}
					className={`${menuStyles.menu_link}`}
				>
					{t('4_PLAYERS')}
				</Link>
			</div>
		</>
	)
}
//link credits a modif pour le multi redirige vers credits pour le moment
