'use client'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Tournament from '@/components/Tournament'
import IPlayer from '@/interfaces/IPlayer'
import homeStyles from '@/ui/home.module.css'
import menuStyles from '@/ui/menu.module.css'
import { FormEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '@/../i18n'

export default function TournamentPage() {
	const { t } = useTranslation()
	const [lang, setLang] = useState('en')
	const [isClient, setIsClient] = useState(false)
	const [players, setPlayers] = useState<IPlayer[]>([
		{ id: 1, name: 'Player 1', winner: false },
		{ id: 2, name: 'Player 2', winner: false },
		{ id: 3, name: 'Player 3', winner: false },
		{ id: 4, name: 'Player 4', winner: false },
	])
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
	const [isTournamentStarted, setIsTournamentStarted] = useState<boolean>(false)
	const [isGameRunning, setIsGameRunning] = useState<boolean>(false)
	const [currentMatch, setCurrentMatch] = useState<number[]>([])
	const [winner, setWinner] = useState<number>(0)

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const player1 = (e.target as HTMLFormElement).player1.value
		const player2 = (e.target as HTMLFormElement).player2.value
		const player3 = (e.target as HTMLFormElement).player3.value
		const player4 = (e.target as HTMLFormElement).player4.value
		setPlayers([
			{ id: 1, name: player1, winner: false },
			{ id: 2, name: player2, winner: false },
			{ id: 3, name: player3, winner: false },
			{ id: 4, name: player4, winner: false },
		])
		setCurrentMatch([1, 2])
		setIsSubmitted(true)
	}

	const startTournament = () => {
		setIsTournamentStarted(true)
		setIsGameRunning(true)
	}

	const handleWinner = (winnerId: number) => {
		const winnerIndex = winnerId - 1
		const updatePlayers = players.map((player) => {
			if (player.id === currentMatch[winnerIndex]) {
				return { ...player, winner: true }
			}
			return player
		})
		setPlayers(updatePlayers)
		setIsGameRunning(false)

		if (currentMatch.includes(1) && currentMatch.includes(2)) {
			setCurrentMatch([3, 4])
		} else if (currentMatch.includes(3) && currentMatch.includes(4)) {
			const winners = updatePlayers.filter((player) => player.winner)
			setCurrentMatch([winners[0].id, winners[1].id])
		} else {
			setWinner(winnerId)
			setIsGameRunning(false)
			setIsTournamentStarted(false)
			setIsSubmitted(false)
		}
	}

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

	useEffect(() => {
		if (winner) {
			const winnerName: string = players.filter(
				(player) => player.id === winner,
			)[0].name
			alert(`${winnerName} wins! Congratulations!`)
		}
	}, [winner, players])

	if (!isSubmitted) {
		return (
			<>
				<div className={`${homeStyles.gif_background}`}></div>
				<h1 className={`${menuStyles.menu_title} pt-5 text-center`}>
					{t('TOURNAMENT')}
				</h1>

				<form
					onSubmit={onSubmit}
					className="d-flex my-5 gap-5 flex-column justify-content-center align-items-center"
				>
					<Input type="text" name="player1" placeholder="1" />
					<Input type="text" name="player2" placeholder="2" />
					<Input type="text" name="player3" placeholder="3" />
					<Input type="text" name="player4" placeholder="4" />
					<Button text={t('START')}></Button>
				</form>
			</>
		)
	}

	if (isSubmitted && !isGameRunning) {
		return (
			<>
				<div className={`${homeStyles.gif_background}`}></div>

				<div className="vh-100 d-flex gap-5 flex-column justify-content-center align-items-center">
					<h1>
						{players.filter((player) => player.id === currentMatch[0])[0].name}{' '}
						VS{' '}
						{players.filter((player) => player.id === currentMatch[1])[0].name}
					</h1>
					<h2 onClick={startTournament}>START GAME</h2>
				</div>
			</>
		)
	}

	if (isTournamentStarted && isGameRunning) {
		return <Tournament handleWinner={handleWinner} />
	}
}
