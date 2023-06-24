import { BoxGeometry, GridHelper, Mesh, MeshBasicMaterial, Scene } from "three"
import CameraController from "./camera"
import RendererController from "./renderer"
import Screen from "./screen"

import './style.css'

async function main() {

  const cameraController = new CameraController({
    fov: 90,
    ratio: Screen.ratio,
    near: 0.1,
    far: 10
  })

  const rendererController = new RendererController({
    size: Screen.resolution
  })

  const scene = new Scene()

  const geo = new BoxGeometry(1, 1, 1)

  const mat = new MeshBasicMaterial({
    color: 0x00FF00
  })

  cameraController.setPostion(0, -2, 0)
  cameraController.camera.lookAt(scene.position)

  const mesh = new Mesh(geo, mat)

  scene.add(mesh)

  const gridHelper = new GridHelper(40, 40)

  scene.add(gridHelper)

  document.body.appendChild(rendererController.domElement)

  rendererController.render(scene, cameraController.camera)

  console.log(rendererController.renderer)

}

main()

