'use client'

import QuatroBall from '@/components/QuatroBall'
import Court from '@/components/Court'
import QuatroPaddle from '@/components/QuatroPaddle'
import { PaddleContext } from '@/contexts/GameContext'
import styles from '@/ui/game.module.css'
import { useContext, useEffect, useState } from 'react'
import { Line } from 'react-konva'

export default function Quatro() {
	const paddleContext = useContext(PaddleContext)
	const [windowWidth, setWindowWidth] = useState<number>(0)
	const [windowHeight, setWindowHeight] = useState<number>(0)
	const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
	const [isGamePaused, setIsGamePaused] = useState<boolean>(false)
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false)
	const [topLeftPaddleY, setTopLeftPaddleY] = useState<number>(0)
	const [bottomLeftPaddleY, setBottomLeftPaddleY] = useState<number>(0)
	const [topRightPaddleY, setTopRightPaddleY] = useState<number>(0)
	const [bottomRightPaddleY, setBottomRightPaddleY] = useState<number>(0)
	const [leftTeamScore, setLeftTeamScore] = useState<number>(0)
	const [rightTeamScore, setRightTeamScore] = useState<number>(0)

	const startGame = () => {
		setIsGameEnded(false)
		setIsGameStarted(true)

		setTopLeftPaddleY(paddleContext.height)
		setBottomLeftPaddleY(windowHeight - 2 * paddleContext.height)

		setTopRightPaddleY(paddleContext.height)
		setBottomRightPaddleY(windowHeight - 2 * paddleContext.height)

		setLeftTeamScore(0)
		setRightTeamScore(0)
	}

	const togglePause = () => {
		setIsGamePaused((prev) => !prev)
	}

	const updateTopLeftPaddle = (newY: number) => {
		setTopLeftPaddleY((prev) => newY)
	}

	const updateBottomLeftPaddle = (newY: number) => {
		setBottomLeftPaddleY((prev) => newY)
	}

	const updateTopRightPaddle = (newY: number) => {
		setTopRightPaddleY((prev) => newY)
	}

	const updateBottomRightPaddle = (newY: number) => {
		setBottomRightPaddleY((prev) => newY)
	}

	const increaseScore = (teamId: number) => {
		if (teamId === 1) {
			setLeftTeamScore((prev) => prev + 1)
		} else if (teamId === 2) {
			setRightTeamScore((prev) => prev + 1)
		}
	}

	const endGame = (winnerId: number) => {
		setIsGameEnded(true)
		setIsGameStarted(false)
		setIsGamePaused(false)
		setLeftTeamScore(0)
		setRightTeamScore(0)

		if (winnerId === 1) {
			alert('Team 1 wins!')
		} else if (winnerId === 2) {
			alert('Team 2 wins!')
		}
	}

	const handleGameEnd = (teamId: number) => {
		const scoreCible = 5

		if (teamId === 1) {
			if (leftTeamScore + 1 === scoreCible) {
				endGame(1)
			}
		} else if (teamId === 2) {
			if (rightTeamScore + 1 === scoreCible) {
				endGame(2)
			}
		}
	}

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(document.documentElement.clientWidth)
			setWindowHeight(document.documentElement.clientHeight)
		}
		handleResize()

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === ' ') {
				togglePause()
			}
		}

		window.addEventListener('resize', handleResize)
		window.addEventListener('keydown', handleKeyDown)
		window.focus()

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	if (!isGameStarted || isGameEnded) {
		return (
			<div className={`${styles.pause_screen}`}>
				<h1>MULTI</h1>
				<h2 onClick={startGame}>START GAME</h2>
			</div>
		)
	}

	if (isGamePaused) {
		return (
			<div className={`${styles.pause_screen}`}>
				<h2 onClick={togglePause}>RESUME GAME</h2>
				<p>Or press space</p>
			</div>
		)
	}

	return (
		<>
			<div className={`${styles.score_container}`}>
				<p>{leftTeamScore}</p>
				<p>{rightTeamScore}</p>
			</div>

			<Court width={windowWidth} height={windowHeight}>
				<Line
					points={[windowWidth / 2, 5, windowWidth / 2, windowHeight - 5]}
					stroke="#fff"
					strokeWidth={2}
					dash={[10, 5]}
				/>

				<QuatroPaddle
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					x={paddleContext.x}
					y={topLeftPaddleY}
					update={updateTopLeftPaddle}
					isGameRunning={!isGamePaused}
					isTopLeftPaddle={true}
					isAiOn={false}
					isQuatro={true}
				/>
				<QuatroPaddle
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					x={paddleContext.x}
					y={bottomLeftPaddleY}
					update={updateBottomLeftPaddle}
					isGameRunning={!isGamePaused}
					isBottomLeftPaddle={true}
					isAiOn={false}
					isQuatro={true}
				/>

				<QuatroPaddle
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					x={windowWidth - paddleContext.width - paddleContext.x}
					y={topRightPaddleY}
					update={updateTopRightPaddle}
					isGameRunning={!isGamePaused}
					isTopRightPaddle={true}
					isAiOn={false}
					isQuatro={true}
				/>
				<QuatroPaddle
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					x={windowWidth - paddleContext.width - paddleContext.x}
					y={bottomRightPaddleY}
					update={updateBottomRightPaddle}
					isGameRunning={!isGamePaused}
					isBottomRightPaddle={true}
					isAiOn={false}
					isQuatro={true}
				/>

				<QuatroBall
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					topLeftPaddleY={topLeftPaddleY}
					bottomLeftPaddleY={bottomLeftPaddleY}
					topRightPaddleY={topRightPaddleY}
					bottomRightPaddleY={bottomRightPaddleY}
					isGameStarted={isGameStarted}
					isGameRunning={!isGamePaused}
					increaseScore={increaseScore}
					handleGameEnd={handleGameEnd}
					isAiOn={false}
					ai={() => 1}
				/>
			</Court>
		</>
	)
}
