import React from "react";
import { Experiment } from "./experiment";
import { Sound } from '../sound';
import beep from '../../assets/beep.mp3';

class SoundExperiment extends Experiment
{

    showStimulus()
    {
        this.setState(
            {
                stimulusPresent: true,
                stimulusType: "sound"
            }
        )
    }

    stimulus(isStimulusPresent, stimulusType)
    {
        if (isStimulusPresent)
        {
            return (<Sound url={beep} ></Sound>)
        }
        else
        {
            return <div></div>
        }

    }

    getExperimentTitle()
    {
        return "Sound Experiment";
    }
}

export { SoundExperiment }
