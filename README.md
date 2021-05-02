# FontWeightPatch
```
npm i font-weight-patch -S
```

```ts
import FontWeightPatch from 'font-weight-patch'
const fontWeightPatch = new FontWeightPatch(false)

// ! android

fontWeightPatch.getWeight("Medium") // 500
/**
 * weightMap = {
    "Thin": 100,
    "ExtraLight": 200,
    "UltraLight": 200,
    "Light": 300,
    "Normal": 400,
    "Book": 400,
    "Roman": 400,
    "Regular": 400,
    "Medium": 500,
    "SemiBold":600,
    "DemiBold": 600,
    "Bold":700,
    "UltraBold":800,
    "ExtraBold":800,
    "Black":900,
    "Heavy": 900
  }
* /

// android

// value > 500 ? 700 : 400
```
