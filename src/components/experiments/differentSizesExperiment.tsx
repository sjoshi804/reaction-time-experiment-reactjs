import React from "react";
import { Experiment } from "./experiment";

class DifferentSizesExperiment extends Experiment
{
    showStimulus()
    {
        this.setState(
            {
                stimulusPresent: true,
                stimulusType: this.getSizeFromInt(this.getRandomInt(0, 10))
            }
        )
    }

    stimulus(isStimulusPresent: boolean, stimulusType: string)
    {
        var size;
        if (stimulusType === "small")
        {
            size = 20;
        }
        else 
        {
            size = 200;
        }
        var opacityOfStimulus = isStimulusPresent? 1: 0;
        return (
            <div style={{width: "100%", height: 300}}>
            <div style={{backgroundColor: "red", borderRadius: "50%", width: size, height: size, opacity: opacityOfStimulus, verticalAlign: "true", margin: "auto"}}></div>
            </div>
        );
    }

    // Utility functions - inclusive both ways
    getSizeFromInt(sizeNum: number)
    {
        switch(sizeNum)
        {
            case 0:
                return "small";
            default:
                return "large";
        }
    }

    getExperimentTitle()
    {
        return "Different Sizes Experiment (Startle Reflex)";
    }
}

export { DifferentSizesExperiment }
