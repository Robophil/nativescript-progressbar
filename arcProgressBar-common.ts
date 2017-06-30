import { DependencyObservable, Property, PropertyMetadata, PropertyMetadataSettings } from "ui/core/dependency-observable"
import { View } from "ui/core/view"
import { Color } from "color"

export class ArcProgressBar extends View {    

    constructor() {
        super();
    }

    //progress property
    public static progressProperty = new Property(
        "progress",
        "ArcProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get progress(): number {
        return this._getValue(ArcProgressBar.progressProperty);
    }
    set progress(value: number) {
        this._setValue(ArcProgressBar.progressProperty, value);
    }

    //text property
    public static textProperty = new Property(
        "text",
        "ArcProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get text(): string {
        return this._getValue(ArcProgressBar.textProperty);
    }
    set text(value: string) {
        this._setValue(ArcProgressBar.textProperty, value);
    }

    //textSize property
    public static textSizeProperty = new Property(
        "textSize",
        "ArcProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get textSize(): number {
        return this._getValue(ArcProgressBar.textSizeProperty);
    }
    set textSize(value: number) {
        this._setValue(ArcProgressBar.textSizeProperty, value);
    }

    //widthProgressBackground property
    public static widthProgressBackgroundProperty = new Property(
        "widthProgressBackground",
        "ArcProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get widthProgressBackground(): number {
        return this._getValue(ArcProgressBar.widthProgressBackgroundProperty);
    }
    set widthProgressBackground(value: number) {
        this._setValue(ArcProgressBar.widthProgressBackgroundProperty, value);
    }

    //widthProgressBarLine property
    public static widthProgressBarLineProperty = new Property(
        "widthProgressBarLine",
        "ArcProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get widthProgressBarLine(): number {
        return this._getValue(ArcProgressBar.widthProgressBarLineProperty);
    }
    set widthProgressBarLine(value: number) {
        this._setValue(ArcProgressBar.widthProgressBarLineProperty, value);
    }

    //backgroundColor property
    public static backgroundColorProperty = new Property(
        "backgroundColorProperty",
        "ArcProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get backgroundColor(): Color {
        return this._getValue(ArcProgressBar.backgroundColorProperty);
    }
    set backgroundColor(value: Color) {
        this._setValue(ArcProgressBar.backgroundColorProperty, value);
    }

    //progressColor property
    public static progressColorProperty = new Property(
        "progressColor",
        "ArcProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get progressColor(): Color {
        return this._getValue(ArcProgressBar.progressColorProperty);
    }
    set progressColor(value: Color) {
        this._setValue(ArcProgressBar.progressColorProperty, value);
    }
/*
    //linearGradient property
    public static linearGradientProperty = new Property(
        "linearGradient",
        "ArcProgressBar",
        new PropertyMetadata(false, PropertyMetadataSettings.None)
    );
    get linearGradient(): boolean {
        return this._getValue(ArcProgressBar.linearGradientProperty);
    }
    set linearGradient(value: boolean) {
        this._setValue(ArcProgressBar.linearGradientProperty, value);
    }
*/
}