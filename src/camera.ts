import { PerspectiveCamera } from "three";

type CameraParams = {
  fov: number,
  ratio: number,
  near: number,
  far: number
}

export default class CameraController {

  private static _instance: CameraController = null!

  static get instance() {
    return this._instance
  }

  private _camera: PerspectiveCamera = null!

  get camera() {
    return this._camera
  }

  constructor(params: CameraParams) {

    if (CameraController._instance) return CameraController._instance

    this._camera = new PerspectiveCamera(
      params.fov,
      params.ratio,
      params.near,
      params.far
    )

    CameraController._instance = this

  }

  setPostion(x: number, y: number, z: number) {
    this._camera.position.set(x, y, z)
  }



}
