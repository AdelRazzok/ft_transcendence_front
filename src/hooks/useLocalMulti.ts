import IBall from '@/interfaces/IBall'
import IPaddle from '@/interfaces/IPaddle'
import { useEffect, useRef, useState } from 'react'

export default function useLocalMulti() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [paddle, setPaddle] = useState<IPaddle>({
		x: 0,
		y: 0,
		width: 75,
		height: 10,
	})
	const [ball, setBall] = useState<IBall>({ x: 0, y: 0, dx: 2, dy: 2 })

	const drawBall = (ctx: CanvasRenderingContext2D) => {
		ctx.beginPath()
		ctx.arc(ball.x, ball.y, 10, 0, Math.PI * 2)
		ctx.fillStyle = '#ffffff'
		ctx.fill()
		ctx.closePath()
	}

	const drawPaddle = (ctx: CanvasRenderingContext2D) => {
		ctx.beginPath()
		ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height)
		ctx.fillStyle = '#ffffff'
		ctx.fill()
		ctx.closePath()
	}

	const update = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		drawBall(ctx)
		drawPaddle(ctx)
		setBall((ball) => {
			if (ball.x + ball.dx > canvas.width - 10 || ball.x + ball.dx < 10) {
				ball.dx = -ball.dx
			}
			if (ball.y + ball.dy > canvas.height - 10 || ball.y + ball.dy < 10) {
				ball.dy = -ball.dy
			}
			ball.x += ball.dx
			ball.y += ball.dy
			return ball
		})
	}

	useEffect(() => {
		const canvas: HTMLCanvasElement = canvasRef.current!
		const ctx = canvas.getContext('2d')!

		paddle.x = canvas.width / 2
		paddle.y = canvas.height - paddle.height
		ball.x = canvas.width / 2
		ball.y = canvas.height - 30
		const interval = setInterval(() => update(canvas, ctx), 10)
		return () => clearInterval(interval)
	})

	return { canvasRef }
}
