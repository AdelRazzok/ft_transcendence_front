'use client'

import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '@/../i18n'

export default function Local() {
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
			<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>LOCAL</h1>

			<div className="mt-5 gap-5 container d-flex flex-column justify-content-center align-items-center">
				<Link href="/local/solo" className={`${menuStyles.menu_link} mt-5`}>
					{t('1 PLAYER')}
				</Link>

				<Link href="/local/multi" className={`${menuStyles.menu_link} mt-5`}>
					{t('2 PLAYERS')}
				</Link>

				<Link href="/local/quatro" className={`${menuStyles.menu_link} mt-5`}>
					{t('4 PLAYERS')}
				</Link>
			</div>
		</>
	)
}
