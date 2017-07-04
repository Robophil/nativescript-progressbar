import { View } from "ui/core/view"
import { Property } from "ui/core/properties";
import { Color } from "color"

export class CircleProgressBar extends View {

    constructor() {
        super();
    }
}


//progress property
export const progressProperty = new Property<CircleProgressBar, number>({
    name: 'progress',
    defaultValue: 65
})
progressProperty.register(CircleProgressBar)

//text property
export const textProperty = new Property<CircleProgressBar, string>({
    name: "text",
    defaultValue: "Loading..."
})
textProperty.register(CircleProgressBar)

//textSize property
export const textSizeProperty = new Property<CircleProgressBar, number>({
    name: "textSize",
    defaultValue: 30
})
textSizeProperty.register(CircleProgressBar)

//widthProgressBackground property
export const widthProgressBackgroundProperty = new Property<CircleProgressBar, number>({
    name: "widthProgressBackground",
    defaultValue: 25
})
widthProgressBackgroundProperty.register(CircleProgressBar)

//widthProgressBarLine property
export const widthProgressBarLineProperty = new Property<CircleProgressBar, number>({
    name: "widthProgressBarLine",
    defaultValue: 25
})
widthProgressBarLineProperty.register(CircleProgressBar)

//backgroundColor property
export const backgroundColorProperty = new Property<CircleProgressBar, Color>({
    name: "backgroundColor",
    defaultValue: new Color("red"),
    valueConverter: (color: string) => new Color(color)
})
backgroundColorProperty.register(CircleProgressBar)

//progressColor property
export const progressColorProperty = new Property<CircleProgressBar, Color>({
    name: "progressColor",
    defaultValue: new Color("green"),
    valueConverter: (color: string) => new Color(color)
})
progressColorProperty.register(CircleProgressBar)

//linearGradient property
export const linearGradientProperty = new Property<CircleProgressBar, boolean>({
    name: "linearGradient",
    defaultValue: false
})
linearGradientProperty.register(CircleProgressBar)