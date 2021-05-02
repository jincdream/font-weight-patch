import FontWeightPatch from '../index'

describe(`FontWeightPatch`, () => {
  let fontWeightPatch: FontWeightPatch

  beforeEach(() => {
    fontWeightPatch = new FontWeightPatch(false)
  })

  it(`no android`, () => {
    expect(fontWeightPatch.isAndroid).toBe(false)
    expect(fontWeightPatch.getWeight('Thin')).toBe(100)
    expect(fontWeightPatch.getWeight('ExtraLight')).toBe(200)
    expect(fontWeightPatch.getWeight('UltraLight')).toBe(200)
    expect(fontWeightPatch.getWeight('Light')).toBe(300)
    expect(fontWeightPatch.getWeight('Normal')).toBe(400)
    expect(fontWeightPatch.getWeight('Book')).toBe(400)
    expect(fontWeightPatch.getWeight('Roman')).toBe(400)
    expect(fontWeightPatch.getWeight('Regular')).toBe(400)
    expect(fontWeightPatch.getWeight('Medium')).toBe(500)
    expect(fontWeightPatch.getWeight('SemiBold')).toBe(600)
    expect(fontWeightPatch.getWeight('DemiBold')).toBe(600)
    expect(fontWeightPatch.getWeight('Bold')).toBe(700)
    expect(fontWeightPatch.getWeight('UltraBold')).toBe(800)
    expect(fontWeightPatch.getWeight('ExtraBold')).toBe(800)
    expect(fontWeightPatch.getWeight('Black')).toBe(900)
    expect(fontWeightPatch.getWeight('Heavy')).toBe(900)
  })

  it(`setEnv`, () => {
    fontWeightPatch.setEnv(true)
    expect(fontWeightPatch.isAndroid).toBe(true)

    fontWeightPatch.setEnv(false)
    expect(fontWeightPatch.isAndroid).toBe(false)
  })

  it(`is android`, () => {
    fontWeightPatch.setEnv(true)
    expect(fontWeightPatch.isAndroid).toBe(true)
    expect(fontWeightPatch.getWeight('Thin')).toBe(400)
    expect(fontWeightPatch.getWeight('ExtraLight')).toBe(400)
    expect(fontWeightPatch.getWeight('UltraLight')).toBe(400)
    expect(fontWeightPatch.getWeight('Light')).toBe(400)
    expect(fontWeightPatch.getWeight('Normal')).toBe(400)
    expect(fontWeightPatch.getWeight('Book')).toBe(400)
    expect(fontWeightPatch.getWeight('Roman')).toBe(400)
    expect(fontWeightPatch.getWeight('Regular')).toBe(400)
    expect(fontWeightPatch.getWeight('Medium')).toBe(400)
    expect(fontWeightPatch.getWeight('SemiBold')).toBe(700)
    expect(fontWeightPatch.getWeight('DemiBold')).toBe(700)
    expect(fontWeightPatch.getWeight('Bold')).toBe(700)
    expect(fontWeightPatch.getWeight('UltraBold')).toBe(700)
    expect(fontWeightPatch.getWeight('ExtraBold')).toBe(700)
    expect(fontWeightPatch.getWeight('Black')).toBe(700)
    expect(fontWeightPatch.getWeight('Heavy')).toBe(700)
  })
})
