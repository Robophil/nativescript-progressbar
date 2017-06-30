import { DependencyObservable, Property, PropertyMetadata, PropertyMetadataSettings } from "ui/core/dependency-observable"
import { View } from "ui/core/view"
import { Color } from "color"

export class CircleProgressBar extends View {    

    constructor() {
        super();
    }

    //progress property
    public static progressProperty = new Property(
        "progress",
        "CircleProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get progress(): number {
        return this._getValue(CircleProgressBar.progressProperty);
    }
    set progress(value: number) {
        this._setValue(CircleProgressBar.progressProperty, value);
    }

    //text property
    public static textProperty = new Property(
        "text",
        "CircleProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get text(): string {
        return this._getValue(CircleProgressBar.textProperty);
    }
    set text(value: string) {
        this._setValue(CircleProgressBar.textProperty, value);
    }

    //textSize property
    public static textSizeProperty = new Property(
        "textSize",
        "CircleProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get textSize(): number {
        return this._getValue(CircleProgressBar.textSizeProperty);
    }
    set textSize(value: number) {
        this._setValue(CircleProgressBar.textSizeProperty, value);
    }

    //widthProgressBackground property
    public static widthProgressBackgroundProperty = new Property(
        "widthProgressBackground",
        "CircleProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get widthProgressBackground(): number {
        return this._getValue(CircleProgressBar.widthProgressBackgroundProperty);
    }
    set widthProgressBackground(value: number) {
        this._setValue(CircleProgressBar.widthProgressBackgroundProperty, value);
    }

    //widthProgressBarLine property
    public static widthProgressBarLineProperty = new Property(
        "widthProgressBarLine",
        "CircleProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get widthProgressBarLine(): number {
        return this._getValue(CircleProgressBar.widthProgressBarLineProperty);
    }
    set widthProgressBarLine(value: number) {
        this._setValue(CircleProgressBar.widthProgressBarLineProperty, value);
    }

    //backgroundColor property
    public static backgroundColorProperty = new Property(
        "backgroundColorProperty",
        "CircleProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get backgroundColor(): Color {
        return this._getValue(CircleProgressBar.backgroundColorProperty);
    }
    set backgroundColor(value: Color) {
        this._setValue(CircleProgressBar.backgroundColorProperty, value);
    }

    //progressColor property
    public static progressColorProperty = new Property(
        "progressColor",
        "CircleProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get progressColor(): Color {
        return this._getValue(CircleProgressBar.progressColorProperty);
    }
    set progressColor(value: Color) {
        this._setValue(CircleProgressBar.progressColorProperty, value);
    }

    //linearGradient property
    public static linearGradientProperty = new Property(
        "linearGradient",
        "CircleProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get linearGradient(): boolean {
        return this._getValue(CircleProgressBar.linearGradientProperty);
    }
    set linearGradient(value: boolean) {
        this._setValue(CircleProgressBar.linearGradientProperty, value);
    }
}