import { BallContext, PaddleContext } from '@/contexts/GameContext'
import IBall from '@/interfaces/IBall'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Rect } from 'react-konva'

export default function Ball({
	windowWidth,
	windowHeight,
	leftPaddleY,
	rightPaddleY,
	isGameRunning,
	isGameStarted,
	increaseScore,
	handleGameEnd,
	isAiOn,
	ai,
}: IBall) {
	const ballContext = useContext(BallContext)
	const paddleContext = useContext(PaddleContext)
	const [x, setX] = useState<number>(0)
	const [y, setY] = useState<number>(0)
	const [xSpeed, setXSpeed] = useState<number>(ballContext.speed)
	const [ySpeed, setYSpeed] = useState<number>(ballContext.speed)
	const [xBounced, setXBounced] = useState<boolean>(false)
	const [yBounced, setYBounced] = useState<boolean>(false)
	const [isStopped, setIsStopped] = useState<boolean>(false)

	const calculateInitialXPosition = useCallback(
		(windowWidth: number) => windowWidth / 2 - ballContext.size / 2,
		[ballContext.size],
	)
	const calculateInitialYPosition = useCallback(
		(windowHeight: number) => windowHeight / 3 - ballContext.size / 2,
		[ballContext.size],
	)

	const stopGame = useCallback(
		(direction: number) => {
			setX(calculateInitialXPosition(windowWidth))
			setXSpeed(ballContext.speed * direction)
			setXBounced(false)
			setY(calculateInitialYPosition(windowHeight))
			setYSpeed(ballContext.speed + 5)
			setYBounced(false)
			setIsStopped(true)
			setTimeout(() => restartGame(), 300)
		},
		[
			ballContext.speed,
			calculateInitialXPosition,
			calculateInitialYPosition,
			windowHeight,
			windowWidth,
		],
	)

	const handleMovement = useCallback(() => {
		if (x && y && !isStopped && isGameRunning && isGameStarted) {
			setX((prev) => prev + xSpeed)
			setY((prev) => prev + ySpeed)
		}
		if (isAiOn) {
			ai({ x, y, ySpeed })
		}
	}, [
		x,
		y,
		isStopped,
		xSpeed,
		ySpeed,
		isGameRunning,
		isGameStarted,
		isAiOn,
		ai,
	])

	const handleScore = useCallback(() => {
		if (x >= windowWidth) {
			increaseScore(1)
			handleGameEnd(1)
			stopGame(-1)
		} else if (x <= 0) {
			increaseScore(2)
			handleGameEnd(2)
			stopGame(1)
		}
	}, [x, windowWidth, increaseScore, handleGameEnd, stopGame])

	const handlePaddleCollision = useCallback(() => {
		if (
			x + ballContext.size + 5 >=
				windowWidth - paddleContext.width - paddleContext.x &&
			y + ballContext.size - 5 >= rightPaddleY &&
			y + 5 <= rightPaddleY + paddleContext.height &&
			!xBounced
		) {
			setXSpeed((prev) => -prev)
			setXBounced(true)
		}
		if (
			x - 5 <= paddleContext.width + paddleContext.x &&
			y + ballContext.size >= leftPaddleY &&
			y <= leftPaddleY + paddleContext.height &&
			!xBounced
		) {
			setXSpeed((prev) => -prev)
			setXBounced(true)
		}
	}, [
		x,
		y,
		ballContext.size,
		windowWidth,
		paddleContext.width,
		paddleContext.height,
		paddleContext.x,
		rightPaddleY,
		leftPaddleY,
		xBounced,
	])

	const handleWallCollision = useCallback(() => {
		if (
			(y + ballContext.size >= windowHeight && !yBounced) ||
			(y <= 0 && !yBounced)
		) {
			setYSpeed((prev) => -prev)
			setYBounced(true)
		}
	}, [y, ballContext.size, windowHeight, yBounced])

	const resetBallBounce = useCallback(() => {
		if (
			(x < windowWidth / 2 && xSpeed < 0 && xBounced) ||
			(x > windowWidth / 2 && xSpeed > 0 && xBounced)
		) {
			setXBounced(false)
		}
		if (
			(y < windowHeight / 2 && ySpeed < 0 && yBounced) ||
			(y > windowHeight / 2 && ySpeed > 0 && yBounced)
		) {
			setYBounced(false)
		}
	}, [x, y, xSpeed, ySpeed, windowWidth, windowHeight, xBounced, yBounced])

	const restartGame = () => {
		setIsStopped(false)
	}

	useEffect(() => {
		setX(calculateInitialXPosition(windowWidth))
		setY(calculateInitialYPosition(windowHeight))
	}, [
		calculateInitialXPosition,
		calculateInitialYPosition,
		windowWidth,
		windowHeight,
	])

	useEffect(() => {
		const loop = () => {
			handleScore()
			resetBallBounce()
			handleWallCollision()
			handlePaddleCollision()
			handleMovement()
		}
		const interval = setInterval(loop, 1000 / 60)
		return () => clearInterval(interval)
	}, [
		handleScore,
		resetBallBounce,
		handleWallCollision,
		handlePaddleCollision,
		handleMovement,
	])

	return (
		<Rect
			x={x}
			y={y}
			width={ballContext.size}
			height={ballContext.size}
			fill={ballContext.color}
		/>
	)
}
