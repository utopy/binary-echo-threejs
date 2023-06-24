import { Camera, Scene, WebGLRenderer } from "three"

type rendererParams = {
	size: {
		width: number,
		height: number
	}
}

export default class RendererController {

	private static _instance: RendererController = null!

	static get instance() {
		return this._instance
	}

	private _renderer: WebGLRenderer = null!

	get renderer() {
		return this._renderer
	}

	get domElement() {
		return this._renderer.domElement
	}

	constructor(params: rendererParams) {

		if (RendererController._instance) {
			return RendererController._instance
		}

		this._renderer = new WebGLRenderer({
			antialias: true
		})

		this.setSize(
			params.size.width,
			params.size.height
		)

		this._renderer.setClearColor(0x000000)

		RendererController._instance = this

	}

	setSize(width: number, height: number) {
		this._renderer.setSize(width, height)
	}

	render(scene: Scene, camera: Camera) {
		this._renderer.render(scene, camera)
	}

}
