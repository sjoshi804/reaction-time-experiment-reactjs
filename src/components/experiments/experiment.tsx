import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { CSVLink } from 'react-csv';

class Experiment extends React.Component<{}, { stimulusPresent: boolean, results: Array<[string, number]>, experimentCompleted: boolean, stimulusType: string }>
{
    private static ApproximateResponseLag = 120;
    private static ExperimentName = "Basic Reaction Time Experiment";

    constructor(props: any)
    {
        super(props);
        this.state = 
        {
            stimulusPresent: false,
            results: new Array<[string, number]>(),
            experimentCompleted: false,
            stimulusType: "text"
        };
        this.recordReactionTime = this.recordReactionTime.bind(this);
        this.downloadResults = this.downloadResults.bind(this);
        this.nextTrial = this.nextTrial.bind(this);
    }

    componentDidMount()
    {
        this.nextTrial();
    }

    async nextTrial()
    {
        this.setState({stimulusPresent: false});
        await this.waitForMs(Math.random() * 1000 + 2000);
        if (!this.state.experimentCompleted)
        {
            this.showStimulus()
        }
    }

    recordReactionTime(startTime: Date)
    {
        var reaction_time = (new Date()).getTime() - startTime.getTime() - Experiment.ApproximateResponseLag;
        this.state.results.push([this.state.stimulusType, reaction_time]);
        console.log("You reacted in " + reaction_time.toString());
        this.nextTrial();
    }

    // Override this to be able to set varying types of stimulus
    showStimulus()
    {
        console.log("REACT NOW!");
        this.setState({stimulusPresent: true, stimulusType: "text"});
    }

    // Override this to put the appropriate stimulus: Return the appropriate stimulus - with opacity set based on isStimulusPresent
    stimulus(isStimulusPresent: boolean, stimulusType: string)
    {
        var opacityOfStimulus = isStimulusPresent? 1: 0;
        return (
            <div style={{backgroundColor: "red", borderRadius: "50%", width: 100, height: 100, margin: "auto", opacity: opacityOfStimulus}}></div>
        );
    }

    downloadResults()
    {
        console.log(this.state.results);
        this.setState({experimentCompleted: true})
    }

    // Utility functions

    waitForMs(ms: number) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    constructExperimentName(title: string)
    {
        var currentDate = new Date();
        return title + " " + currentDate.getMonth() + "-" + currentDate.getDate() + "-" + currentDate.getFullYear() + " " + currentDate.getHours() + "-" + currentDate.getMinutes() + "-" + currentDate.getSeconds()
    }

    getExperimentTitle()
    {
        return Experiment.ExperimentName;
    }

    getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        var startTime = new Date();
        if (this.state.stimulusPresent)
        {
            startTime = new Date();
        }
        var filename = this.constructExperimentName(this.getExperimentTitle());
        var buttonPanel = 
            ( 
                <div>
                    <Button disabled={!this.state.stimulusPresent || this.state.experimentCompleted} onClick={() => this.recordReactionTime(startTime)}>
                    React
                    </Button>
                    <div className="ui button labeled">
                        <CSVLink data={this.state.results} filename={filename}>
                            <Button className="ui button" onClick={this.downloadResults}>
                                Download Results
                            </Button>
                        </CSVLink>
                        <div className="ui basic label">
                            {this.state.results.length} trials taken
                        </div>
                    </div>
                </div>
            );

        return (
            <Container
                style={{
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -50%)'
                }}
            >
            <div className="ui equal width center aligned padded grid">
                <div className="row">
                    <div className="column">
                        {this.stimulus(this.state.stimulusPresent, this.state.stimulusType)}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        {buttonPanel}
                    </div>
                </div> 
            </div>
            </Container>
        );
    }
}

export { Experiment }