export default interface IPaddle {
	x: number
	y: number
	windowWidth: number
	windowHeight: number
	update: (y: number) => void
	isRightPaddle: boolean
	isGameRunning: boolean
	isAiOn: boolean
}
