import { View } from "ui/core/view"
import { Property } from "ui/core/properties";
import { Color } from "color"

export class LineProgressBar extends View {

    constructor() {
        super();
    }
}

//progress property
export const progressProperty = new Property<LineProgressBar, number>({
    name: "progress",
    defaultValue: 65
})
progressProperty.register(LineProgressBar)

//text property
export const textProperty = new Property<LineProgressBar, string>({
    name: "text",
    defaultValue: "Loading"
})
textProperty.register(LineProgressBar)

//textSize property
export const textSizeProperty = new Property<LineProgressBar, number>({
    name: "textSize",
    defaultValue: 30
})
textSizeProperty.register(LineProgressBar)

//widthProgressBackground property
export const widthProgressBackgroundProperty = new Property<LineProgressBar, number>({
    name: "widthProgressBackground",
    defaultValue: 25
})
widthProgressBackgroundProperty.register(LineProgressBar)

//widthProgressBarLine property
export const widthProgressBarLineProperty = new Property<LineProgressBar, number>({
    name: "widthProgressBarLine",
    defaultValue: 25
})
widthProgressBarLineProperty.register(LineProgressBar)

//backgroundColor property
export const backgroundColorProperty = new Property<LineProgressBar, Color>({
    name: "backgroundColor",
    defaultValue: new Color("red"),
    valueConverter: (color: string) => new Color(color)
})
backgroundColorProperty.register(LineProgressBar)

//progressColor property
export const progressColorProperty = new Property<LineProgressBar, Color>({
    name: "progressColor",
    defaultValue: new Color("green"),
    valueConverter: (color: string) => new Color(color)
})
progressColorProperty.register(LineProgressBar)

//linearGradient property
export const linearGradientProperty = new Property<LineProgressBar, boolean>({
    name: "linearGradient",
    defaultValue: false
})
linearGradientProperty.register(LineProgressBar)