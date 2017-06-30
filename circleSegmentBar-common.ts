import { DependencyObservable, Property, PropertyMetadata, PropertyMetadataSettings } from "ui/core/dependency-observable"
import { View } from "ui/core/view"
import { Color } from "color"

export class CircleSegmentBar extends View {    

    constructor() {
        super();
    }

    //progress property
    public static progressProperty = new Property(
        "progress",
        "CircleSegmentBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get progress(): number {
        return this._getValue(CircleSegmentBar.progressProperty);
    }
    set progress(value: number) {
        this._setValue(CircleSegmentBar.progressProperty, value);
    }

    //text property
    public static textProperty = new Property(
        "text",
        "CircleSegmentBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get text(): string {
        return this._getValue(CircleSegmentBar.textProperty);
    }
    set text(value: string) {
        this._setValue(CircleSegmentBar.textProperty, value);
    }

    //textSize property
    public static textSizeProperty = new Property(
        "textSize",
        "CircleSegmentBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get textSize(): number {
        return this._getValue(CircleSegmentBar.textSizeProperty);
    }
    set textSize(value: number) {
        this._setValue(CircleSegmentBar.textSizeProperty, value);
    }

    //widthProgressBackground property
    public static widthProgressBackgroundProperty = new Property(
        "widthProgressBackground",
        "CircleSegmentBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get widthProgressBackground(): number {
        return this._getValue(CircleSegmentBar.widthProgressBackgroundProperty);
    }
    set widthProgressBackground(value: number) {
        this._setValue(CircleSegmentBar.widthProgressBackgroundProperty, value);
    }

    //widthProgressBarLine property
    public static widthProgressBarLineProperty = new Property(
        "widthProgressBarLine",
        "CircleSegmentBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get widthProgressBarLine(): number {
        return this._getValue(CircleSegmentBar.widthProgressBarLineProperty);
    }
    set widthProgressBarLine(value: number) {
        this._setValue(CircleSegmentBar.widthProgressBarLineProperty, value);
    }

    //backgroundColor property
    public static backgroundColorProperty = new Property(
        "backgroundColorProperty",
        "CircleSegmentBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get backgroundColor(): Color {
        return this._getValue(CircleSegmentBar.backgroundColorProperty);
    }
    set backgroundColor(value: Color) {
        this._setValue(CircleSegmentBar.backgroundColorProperty, value);
    }

    //progressColor property
    public static progressColorProperty = new Property(
        "progressColor",
        "CircleSegmentBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get progressColor(): Color {
        return this._getValue(CircleSegmentBar.progressColorProperty);
    }
    set progressColor(value: Color) {
        this._setValue(CircleSegmentBar.progressColorProperty, value);
    }

    //linearGradient property
    public static linearGradientProperty = new Property(
        "linearGradient",
        "CircleSegmentBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get linearGradient(): boolean {
        return this._getValue(CircleSegmentBar.linearGradientProperty);
    }
    set linearGradient(value: boolean) {
        this._setValue(CircleSegmentBar.linearGradientProperty, value);
    }
}