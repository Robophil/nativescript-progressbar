import { DependencyObservable, Property, PropertyMetadata, PropertyMetadataSettings } from "ui/core/dependency-observable"
import { Observable } from "data/observable"
import { View } from "ui/core/view"
import { Color } from "color"

import {ArcProgressBar as ArcProgressBarModule} from "./arcProgressBar-common"
global.moduleMerge(ArcProgressBarModule, exports)

declare var com

export class ArcProgressBar extends ArcProgressBarModule {
    
    private _android: any;

    get android(): any {
        return this._android;
    }

    public createNativeView() {
        return this._android = new com.natasa.progressviews.ArcProgressBar(this._context);
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
ArcProgressBar.progressProperty.onValueChanged = onProgressPropertyChanged;

//text property
function onTextPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setText(data.newValue);
}
ArcProgressBar.textProperty.onValueChanged = onTextPropertyChanged;

//textSize property
function onTextSizePropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setTextSize(data.newValue);
}
ArcProgressBar.textSizeProperty.onValueChanged = onTextSizePropertyChanged;

//widthProgressBackground property
function onWidthProgressBackgroundPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setWidthProgressBackground(data.newValue);
}
ArcProgressBar.widthProgressBackgroundProperty.onValueChanged = onWidthProgressBackgroundPropertyChanged;

//widthProgressBarLine property
function onWidthProgressBarLinePropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setWidthProgressBarLine(data.newValue);
}
ArcProgressBar.widthProgressBarLineProperty.onValueChanged = onWidthProgressBarLinePropertyPropertyChanged;

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
ArcProgressBar.backgroundColorProperty.onValueChanged = onBackgroundColorPropertyPropertyChanged;

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
ArcProgressBar.progressColorProperty.onValueChanged = onProgressColorPropertyPropertyChanged;

/*
//linearGradient property
function onLinearGradientPropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setLinearGradientProgress(data.newValue);
}
common.ArcProgressBar.linearGradientProperty.metadata.onSetNativeValue = onLinearGradientPropertyPropertyChanged;
*/