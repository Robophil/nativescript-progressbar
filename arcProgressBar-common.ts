import { View } from "ui/core/view"
import { Property } from "ui/core/properties";
import { Color } from "color"

export abstract class ArcProgressBar extends View {

    constructor() {
        super()
    }

}

//progress property
export const progressProperty = new Property<ArcProgressBar, number>({
    name: "progress",
    defaultValue: 65
})
progressProperty.register(ArcProgressBar)

//text property
export const textProperty = new Property<ArcProgressBar, string>({
    name: "text",
    defaultValue: "Loading..."
})
textProperty.register(ArcProgressBar)

//textSize property
export const textSizeProperty = new Property<ArcProgressBar, number>({
    name: "textSize",
    defaultValue: 30
})
textSizeProperty.register(ArcProgressBar)

//widthProgressBackground property
export const widthProgressBackgroundProperty = new Property<ArcProgressBar, number>({
    name: "widthProgressBackground",
    defaultValue: 25
})
widthProgressBackgroundProperty.register(ArcProgressBar)

//widthProgressBarLine property
export const widthProgressBarLineProperty = new Property<ArcProgressBar, number>({
    name: "widthProgressBarLine",
    defaultValue: 25
})
widthProgressBarLineProperty.register(ArcProgressBar)

//backgroundColor property
export const backgroundColorProperty = new Property<ArcProgressBar, Color>({
    name: "backgroundColor",
    defaultValue: new Color("red"),
    valueConverter: (color: string) => new Color(color)
})
backgroundColorProperty.register(ArcProgressBar)

//progressColor property
export const progressColorProperty = new Property<ArcProgressBar, Color>({
    name: "progressColor",
    defaultValue: new Color("green"),
    valueConverter: (color: string) => new Color(color)
})
progressColorProperty.register(ArcProgressBar)

// //linearGradient property
// export const linearGradientProperty = new Property<ArcProgressBar, boolean>({
//     name: "linearGradient",
//     defaultValue: false
// })
// linearGradientProperty.register(ArcProgressBar)