import React from "react";
import { Experiment } from "./experiment";

class DifferentPositionsExperiment extends Experiment
{
    showStimulus()
    {
        this.setState(
            {
                stimulusPresent: true,
                stimulusType: this.getRandomInt(10, 90).toString() + "%," + this.getRandomInt(10, 300).toString()
            }
        )
    }

    stimulus(isStimulusPresent: boolean, stimulusType: string)
    {
        var position = this.parsePosition(stimulusType);
        var opacityOfStimulus = isStimulusPresent? 1: 0;
        return (
            <div style={{backgroundColor: "red", borderRadius: "50%", width: 100, height: 100, marginLeft: position[0], marginTop: parseInt(position[1]), opacity: opacityOfStimulus}}></div>
        );
    }

    // Utility functions 
    parsePosition(positionAsString: string)
    {
        var x = (positionAsString.split(",")[0]);
        console.log(x);
        var y = (positionAsString.split(",")[1]);
        return [x, y]
    }

    getExperimentTitle()
    {
        return "Different Positions Experiment";
    }
}

export { DifferentPositionsExperiment }