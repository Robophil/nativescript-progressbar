import { DependencyObservable, Property, PropertyMetadata, PropertyMetadataSettings } from "ui/core/dependency-observable"
import { View } from "ui/core/view"
import { Color } from "color"

export class LineProgressBar extends View {

    constructor() {
        super();
    }

    //progress property
    public static progressProperty = new Property(
        "progress",
        "LineProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get progress(): number {
        return this._getValue(LineProgressBar.progressProperty);
    }
    set progress(value: number) {
        this._setValue(LineProgressBar.progressProperty, value);
    }

    //text property
    public static textProperty = new Property(
        "text",
        "LineProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get text(): string {
        return this._getValue(LineProgressBar.textProperty);
    }
    set text(value: string) {
        this._setValue(LineProgressBar.textProperty, value);
    }

    //textSize property
    public static textSizeProperty = new Property(
        "textSize",
        "LineProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get textSize(): number {
        return this._getValue(LineProgressBar.textSizeProperty);
    }
    set textSize(value: number) {
        this._setValue(LineProgressBar.textSizeProperty, value);
    }

    //widthProgressBackground property
    public static widthProgressBackgroundProperty = new Property(
        "widthProgressBackground",
        "LineProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get widthProgressBackground(): number {
        return this._getValue(LineProgressBar.widthProgressBackgroundProperty);
    }
    set widthProgressBackground(value: number) {
        this._setValue(LineProgressBar.widthProgressBackgroundProperty, value);
    }

    //widthProgressBarLine property
    public static widthProgressBarLineProperty = new Property(
        "widthProgressBarLine",
        "LineProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get widthProgressBarLine(): number {
        return this._getValue(LineProgressBar.widthProgressBarLineProperty);
    }
    set widthProgressBarLine(value: number) {
        this._setValue(LineProgressBar.widthProgressBarLineProperty, value);
    }

    //backgroundColor property
    public static backgroundColorProperty = new Property(
        "backgroundColorProperty",
        "LineProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get backgroundColor(): Color {
        return this._getValue(LineProgressBar.backgroundColorProperty);
    }
    set backgroundColor(value: Color) {
        this._setValue(LineProgressBar.backgroundColorProperty, value);
    }

    //progressColor property
    public static progressColorProperty = new Property(
        "progressColor",
        "LineProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get progressColor(): Color {
        return this._getValue(LineProgressBar.progressColorProperty);
    }
    set progressColor(value: Color) {
        this._setValue(LineProgressBar.progressColorProperty, value);
    }

    //linearGradient property
    public static linearGradientProperty = new Property(
        "linearGradient",
        "LineProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get linearGradient(): boolean {
        return this._getValue(LineProgressBar.linearGradientProperty);
    }
    set linearGradient(value: boolean) {
        this._setValue(LineProgressBar.linearGradientProperty, value);
    }
}