'use client'

import React, { useEffect } from 'react'
import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'next/navigation'
import i18n from '@/../i18n'

export default function Local() {
	const searchParams = useSearchParams()
	const lng = searchParams.get('lang') || 'en'
	const { t } = useTranslation()

	useEffect(() => {
		i18n.changeLanguage(lng)
	}, [lng])

	return (
		<>
			<div className={`${homeStyles.gif_background}`}></div>
			<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>LOCAL</h1>

			<div className="mt-5 pt-5 container d-flex flex-column justify-content-center align-items-center">
				<Link href={`/menu?lang=en`} className={`${menuStyles.menu_link} mt-5`}>
					{t('ENGLISH')}
				</Link>
				<Link href={`/menu?lang=fr`} className={`${menuStyles.menu_link} mt-5`}>
					{t('FRENCH')}
				</Link>
				<Link href={`/menu?lang=es`} className={`${menuStyles.menu_link} mt-5`}>
					{t('SPANISH')}
				</Link>
			</div>
		</>
	)
}
