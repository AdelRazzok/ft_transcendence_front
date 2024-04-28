import { PaddleContext } from '@/contexts/GameContext'
import { useContext, useEffect, useState } from 'react'
import { Rect } from 'react-konva'

export default function QuatroPaddle({
	windowWidth,
	windowHeight,
	x,
	y,
	update,
	isGameRunning,
	isTopLeftPaddle,
	isTopRightPaddle,
	isBottomLeftPaddle,
	isBottomRightPaddle,
	isAiOn,
}: any) {
	const paddleContext = useContext(PaddleContext)
	const [isMovingUp, setIsMovingUp] = useState<boolean>(false)
	const [isMovingDown, setIsMovingDown] = useState<boolean>(false)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isGameRunning || isAiOn) return
			if (isTopLeftPaddle) {
				if (e.key === 'w') {
					setIsMovingUp(true)
				} else if (e.key === 's') {
					setIsMovingDown(true)
				}
			} else if (isBottomLeftPaddle) {
				if (e.key === 't') {
					setIsMovingUp(true)
				} else if (e.key === 'g') {
					setIsMovingDown(true)
				}
			} else if (isTopRightPaddle) {
				if (e.key === 'o') {
					setIsMovingUp(true)
				} else if (e.key === 'l') {
					setIsMovingDown(true)
				}
			} else if (isBottomRightPaddle) {
				if (e.key === 'ArrowUp') {
					setIsMovingUp(true)
				} else if (e.key === 'ArrowDown') {
					setIsMovingDown(true)
				}
			}
		}

		const handleKeyUp = (e: KeyboardEvent) => {
			if (!isGameRunning || isAiOn) return

			if (isTopLeftPaddle) {
				if (e.key === 'w' && isMovingUp) {
					setIsMovingUp(false)
				} else if (e.key === 's' && isMovingDown) {
					setIsMovingDown(false)
				}
			} else if (isBottomLeftPaddle) {
				if (e.key === 't' && isMovingUp) {
					setIsMovingUp(false)
				} else if (e.key === 'g' && isMovingDown) {
					setIsMovingDown(false)
				}
			} else if (isTopRightPaddle) {
				if (e.key === 'o' && isMovingUp) {
					setIsMovingUp(false)
				} else if (e.key === 'l' && isMovingDown) {
					setIsMovingDown(false)
				}
			} else if (isBottomRightPaddle) {
				if (e.key === 'ArrowUp' && isMovingUp) {
					setIsMovingUp(false)
				} else if (e.key === 'ArrowDown' && isMovingDown) {
					setIsMovingDown(false)
				}
			}
		}

		window.addEventListener('keydown', handleKeyDown, false)
		window.addEventListener('keyup', handleKeyUp, false)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [
		isMovingUp,
		isMovingDown,
		isGameRunning,
		isAiOn,
		isTopLeftPaddle,
		isTopRightPaddle,
		isBottomLeftPaddle,
		isBottomRightPaddle,
	])

	useEffect(() => {
		const loop = () => {
			if (isGameRunning) {
				if (isMovingUp && y > 0) {
					update(y - paddleContext.speed)
				} else if (isMovingDown && y < windowHeight - paddleContext.height) {
					update(y + paddleContext.speed)
				}
			}
		}
		const interval = setInterval(loop, 1000 / 60)
		return () => clearInterval(interval)
	}, [
		isMovingUp,
		isMovingDown,
		windowHeight,
		y,
		update,
		isGameRunning,
		paddleContext.height,
		paddleContext.speed,
	])

	return (
		<Rect
			x={x}
			y={y}
			width={paddleContext.width}
			height={paddleContext.height}
			fill={paddleContext.color}
		/>
	)
}
