export default class Screen {

  static get resolution() {

    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }

  }

  static get ratio() {

    return this.resolution.width / this.resolution.height

  }

}
