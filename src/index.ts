export default class FontWeightPatch {
  isAndroid = false
  weightMap = {
    Thin: 100,
    ExtraLight: 200,
    UltraLight: 200,
    Light: 300,
    Normal: 400,
    Book: 400,
    Roman: 400,
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    DemiBold: 600,
    Bold: 700,
    UltraBold: 800,
    ExtraBold: 800,
    Black: 900,
    Heavy: 900,
  }
  constructor(isAndroid: boolean) {
    this.isAndroid = isAndroid
  }
  setEnv(isAndroid: boolean) {
    this.isAndroid = isAndroid
  }
  extend(map: { [k: string]: number }) {
    Object.assign(this.weightMap, map)
  }
  getWeight(name: keyof FontWeightPatch['weightMap']) {
    let value = this.weightMap[name]
    if (this.isAndroid) {
      value = value > 500 ? 700 : 400
    }
    return value
  }
}
