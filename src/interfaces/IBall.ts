export default interface IBall {
	windowWidth: number
	windowHeight: number
	leftPaddleY: number
	rightPaddleY: number
	isGameStarted: boolean
	isGameRunning: boolean
	increaseScore: (playerId: number) => void
	handleGameEnd: (playerId: number) => void
	isAiOn: boolean
}
