import React from "react";
import { Experiment } from "./experiment";

class DifferentColorsExperiment extends Experiment
{
    showStimulus()
    {
        this.setState(
            {
                stimulusPresent: true,
                stimulusType: this.getColorFromInt(this.getRandomInt(0, 3))
            }
        )
    }

    stimulus(isStimulusPresent: boolean, stimulusType: string)
    {
        var opacityOfStimulus = isStimulusPresent? 1: 0;
        return (
            <div style={{backgroundColor: stimulusType, borderRadius: "50%", width: 100, height: 100, margin: "auto", opacity: opacityOfStimulus}}></div>
        );
    }

    // Utility functions 
    getColorFromInt(colorNum: number)
    {
        switch(colorNum)
        {
            case 0:
                return "red";
            case 1:
                return "blue";
            case 2: 
                return "green";
            default:
                return "yellow";
        }
    }

    getExperimentTitle()
    {
        return "Different Colors Experiment";
    }
}

export { DifferentColorsExperiment }