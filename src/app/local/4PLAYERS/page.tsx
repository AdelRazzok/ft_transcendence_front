'use client'

import Ball from '@/components/Ball'
import Court from '@/components/Court'
import Paddle from '@/components/Paddle'
import { PaddleContext } from '@/contexts/GameContext'
import styles from '@/ui/game.module.css'
import { useContext, useEffect, useState } from 'react'
import { Line } from 'react-konva'

export default function Multi() {
	const paddleContext = useContext(PaddleContext)
	const [windowWidth, setWindowWidth] = useState<number>(0)
	const [windowHeight, setWindowHeight] = useState<number>(0)
	const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
	const [isGamePaused, setIsGamePaused] = useState<boolean>(false)
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false)
	const [leftPaddleY, setLeftPaddleY] = useState<number>(0)
    const [leftPaddleY2, setLeftPaddleY2] = useState<number>(0)
	const [rightPaddleY, setRightPaddleY] = useState<number>(0)
    const [rightPaddleY2, setRightPaddleY2] = useState<number>(0)
	const [leftPlayerScore, setLeftPlayerScore] = useState<number>(0)
	const [rightPlayerScore, setRightPlayerScore] = useState<number>(0)

	// Game functions
	const startGame = () => {
		setIsGameEnded(false)
		setIsGameStarted(true)
		setLeftPaddleY(windowHeight - paddleContext.height)
        setLeftPaddleY2(windowHeight / 4 - paddleContext.height / 4)
		setRightPaddleY(windowHeight - paddleContext.height)
        setRightPaddleY2(windowHeight / 4 - paddleContext.height / 4)

		setLeftPlayerScore(0)
		setRightPlayerScore(0)
	}

	const togglePause = () => {
		setIsGamePaused((prev) => !prev)
	}

	const updateLeftPaddle = (newY: number) => {
		setLeftPaddleY((prev) => newY)
        setLeftPaddleY2((prev) => newY)
	}

	const updateRightPaddle = (newY: number) => {
		setRightPaddleY((prev) => newY)
        setRightPaddleY2((prev) => newY)
	}

	const increaseScore = (playerId: number) => {
		if (playerId === 1) {
			setLeftPlayerScore((prev) => prev + 1)
		} else if (playerId === 2) {
			setRightPlayerScore((prev) => prev + 1)
		}
	}

	const endGame = (winnerId: number) => {
		setIsGameEnded(true)
		setIsGameStarted(false)
		setLeftPaddleY(windowHeight- paddleContext.height)
        setLeftPaddleY2(windowHeight / 4 - paddleContext.height / 4)

		setRightPaddleY(windowHeight - paddleContext.height)
        setRightPaddleY2(windowHeight / 4 - paddleContext.height / 4)

		setLeftPlayerScore(0)
		setRightPlayerScore(0)
		if (winnerId === 1) {
			alert('Player 1 wins!')
		} else if (winnerId === 2) {
			alert('Player 2 wins!')
		}
	}

	const handleGameEnd = (playerId: number) => {
		const scoreCible = 5

		if (playerId === 1) {
			if (leftPlayerScore + 1 === scoreCible) {
				endGame(1)
			}
		} else if (playerId === 2) {
			if (rightPlayerScore + 1 === scoreCible) {
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
				<p>{leftPlayerScore}</p>
				<p>{rightPlayerScore}</p>
			</div>

			<Court width={windowWidth} height={windowHeight}>
				<Line
					points={[windowWidth / 2, 5, windowWidth / 2, windowHeight - 5]}
					stroke="#fff"
					strokeWidth={2}
					dash={[10, 5]}
				/>

				<Paddle
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					x={paddleContext.x}
					y={leftPaddleY}
					update={updateLeftPaddle}
					isGameRunning={!isGamePaused}
					isRightPaddle={false}
					isAiOn={false}
				/>
                <Paddle
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					x={paddleContext.x}
					y={leftPaddleY2}
					update={updateLeftPaddle}
					isGameRunning={!isGamePaused}
					isRightPaddle={false}
					isAiOn={false}
				/>

				<Paddle
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					x={windowWidth - paddleContext.width - paddleContext.x}
					y={rightPaddleY2}
					update={updateRightPaddle}
					isGameRunning={!isGamePaused}
					isRightPaddle={true}
					isAiOn={false}
				/>
                <Paddle
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					x={windowWidth - paddleContext.width - paddleContext.x}
					y={rightPaddleY}
					update={updateRightPaddle}
					isGameRunning={!isGamePaused}
					isRightPaddle={true}
					isAiOn={false}
				/>

				<Ball
					windowHeight={windowHeight}
					windowWidth={windowWidth}
					leftPaddleY={leftPaddleY}
					rightPaddleY={rightPaddleY}
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
