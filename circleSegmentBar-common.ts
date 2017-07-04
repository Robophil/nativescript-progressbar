import { View } from "ui/core/view"
import { Property } from "ui/core/properties";
import { Color } from "color"

export class CircleSegmentBar extends View {    

    constructor() {
        super();
    }
}

//progress property
export const progressProperty = new Property<CircleSegmentBar, number>({
    name: "progress",
    defaultValue: 65
})
progressProperty.register(CircleSegmentBar)

//text property
export const textProperty = new Property<CircleSegmentBar, string>({
    name: "text",
    defaultValue: "Loading..."
})
textProperty.register(CircleSegmentBar)

//textSize property
export const textSizeProperty = new Property<CircleSegmentBar, number>({
    name: "textSize",
    defaultValue: 30
})
textSizeProperty.register(CircleSegmentBar)

//widthProgressBackground property
export const widthProgressBackgroundProperty = new Property<CircleSegmentBar, number>({
    name: "widthProgressBackground",
    defaultValue: 25
})
widthProgressBackgroundProperty.register(CircleSegmentBar)

//widthProgressBarLine property
export const widthProgressBarLineProperty = new Property<CircleSegmentBar, number>({
    name: "widthProgressBarLine",
    defaultValue: 25
})
widthProgressBarLineProperty.register(CircleSegmentBar)

//backgroundColor property
export const backgroundColorProperty = new Property<CircleSegmentBar, Color>({
    name: "backgroundColor",
    defaultValue: new Color("red"),
    valueConverter: (color: string) => new Color(color)
})
backgroundColorProperty.register(CircleSegmentBar)

//progressColor property
export const progressColorProperty = new Property<CircleSegmentBar, Color>({
    name: "progressColor",
    defaultValue: new Color("green"),
    valueConverter: (color: string) => new Color(color)
})
progressColorProperty.register(CircleSegmentBar)

// //linearGradient property
// export const linearGradientProperty = new Property<CircleSegmentBar, boolean>({
//     name: "linearGradient",
//     defaultValue: false
// })
// linearGradientProperty.register(CircleSegmentBar)