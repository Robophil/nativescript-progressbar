import { DependencyObservable, Property, PropertyMetadata, PropertyMetadataSettings } from "ui/core/dependency-observable"
import { Observable } from "data/observable"
import { View } from "ui/core/view"
import { Color } from "color"

import {LineProgressBar as LineProgressBarModule} from "./lineProgressBar-common"
global.moduleMerge(LineProgressBarModule, exports);

declare var com

export class LineProgressBar extends LineProgressBarModule {
    
    private _android: any;

    get android(): any {
        return this._android;
    }

    public createNativeView() {
        return this._android = new com.natasa.progressviews.LineProgressBar(this._context);
    }
    
    
    constructor(context) {
        super();
    }

}


//progress property
function onProgressPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setProgress(data.newValue);
}
// LineProgressBar.progressProperty.metadata.onSetNativeValue = onProgressPropertyChanged;
LineProgressBar.progressProperty.onValueChanged = onProgressPropertyChanged;

//text property
function onTextPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setText(data.newValue);
}
LineProgressBar.textProperty.onValueChanged = onTextPropertyChanged;

//textSize property
function onTextSizePropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setTextSize(data.newValue);
}
LineProgressBar.textSizeProperty.onValueChanged = onTextSizePropertyChanged;

//widthProgressBackground property
function onWidthProgressBackgroundPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setWidthProgressBackground(data.newValue);
}
LineProgressBar.widthProgressBackgroundProperty.onValueChanged = onWidthProgressBackgroundPropertyChanged;

//widthProgressBarLine property
function onWidthProgressBarLinePropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setWidthProgressBarLine(data.newValue);
}
LineProgressBar.widthProgressBarLineProperty.onValueChanged = onWidthProgressBarLinePropertyPropertyChanged;

//backgroundColor property
function onBackgroundColorPropertyPropertyChanged(data) {
    if(Color.isValid(data.newValue)){
        var mycomponent = data.object;
        var droidColor = new Color(data.newValue).android;
        mycomponent.android.setBackgroundColor(droidColor);
    } else {
        console.log("The background color: " + data.newValue + " is invalid.");
    }
}
LineProgressBar.backgroundColorProperty.onValueChanged = onBackgroundColorPropertyPropertyChanged;

//progressColor property
function onProgressColorPropertyPropertyChanged(data) {
    if(Color.isValid(data.newValue)){
        var mycomponent = data.object;
        var droidColor = new Color(data.newValue).android;
        mycomponent.android.setProgressColor(droidColor);
    } else {
        console.log("The progress color: " + data.newValue + " is invalid.");
    }
}
LineProgressBar.progressColorProperty.onValueChanged = onProgressColorPropertyPropertyChanged;

//linearGradient property
function onLinearGradientPropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setLinearGradientProgress(data.newValue);
}
LineProgressBar.linearGradientProperty.onValueChanged = onLinearGradientPropertyPropertyChanged;
