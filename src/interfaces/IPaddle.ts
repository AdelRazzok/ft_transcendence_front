export default interface IPaddle {
	windowWidth: number
	windowHeight: number
	x: number
	y: number
	update: (y: number) => void
	isRightPaddle: boolean
	isGameRunning: boolean
	isAiOn: boolean
	isQuatro?: boolean
}
