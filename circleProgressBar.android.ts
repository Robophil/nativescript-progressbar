import { View } from "ui/core/view"
import { Color } from "color"

import {
    CircleProgressBar as CircleProgressBarModule,
    progressProperty, textProperty, textSizeProperty,
    widthProgressBackgroundProperty, widthProgressBarLineProperty,
    backgroundColorProperty, progressColorProperty
} from "./circleProgressBar-common"
global.moduleMerge(CircleProgressBarModule, exports);

declare var com

export class CircleProgressBar extends CircleProgressBarModule {
    
    private _nativeView: any;

    get nativeView(): any {
        return this._nativeView;
    }

    public createNativeView() {
        return this._nativeView = new com.natasa.progressviews.CircleProgressBar(this._context);
    }
    
    
    constructor(context) {
        super();
    }

    /**
     * set progress value
     * @param value 
     */
    [progressProperty.setNative](value: number) {
        this.nativeView.setProgress(value)
    }

    /**
     * set the progress text
     * @param value 
     */
    [textProperty.setNative](value: string) {
        this.nativeView.setText(value)
    }

    /**
     * set the progress textSize
     * @param value 
     */
    [textSizeProperty.setNative](value: number) {
        this.nativeView.setTextSize(value)
    }

    /**
     * set the progress widthProgressBackground
     * @param value 
     */
    [widthProgressBackgroundProperty.setNative](value: number) {
        this.nativeView.setWidthProgressBackground(value)
    }

    /**
     * set the progress widthProgressBarLine
     * @param value 
     */
    [widthProgressBarLineProperty.setNative](value: number) {
        this.nativeView.setWidthProgressBarLine(value)
    }

    /**
     * set the progress backgroundColor
     * @param value 
     */
    [backgroundColorProperty.setNative](value: Color) {
        if(Color.isValid(value)) this.nativeView.setBackgroundColor(value.android)
    }

    /**
     * set the progress Color
     * @param value 
     */
    [progressColorProperty.setNative](value: Color) {
        if(Color.isValid(value)) this.nativeView.setProgressColor(value.android)
    }

    // /**
    //  * set the value of linear gradient
    //  * @param value 
    //  */
    // [linearGradientProperty.setNative](value: boolean) {
    //     this.nativeView.setLinearGradientProgress(value)
    // }

}
