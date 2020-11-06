import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { CSVLink } from 'react-csv';

class Experiment extends React.Component<{}, { stimulusPresent: boolean, results: Array<[string, number]>, experimentCompleted: boolean, stimulusType: string}>
{
    private static approximateResponseLag = 160;
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
        var reaction_time = (new Date()).getTime() - startTime.getTime() - Experiment.approximateResponseLag;
        this.state.results.push([this.state.stimulusType, reaction_time]);
        console.log("You reacted in " + reaction_time.toString());
        this.nextTrial();
    }

    showStimulus()
    {
        console.log("REACT NOW!");
        this.setState({stimulusPresent: true, stimulusType: "text"});
    }

    waitForMs(ms: number) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    downloadResults()
    {
        console.log(this.state.results);
        this.setState({experimentCompleted: true})
    }

    constructExperimentName(title: string)
    {
        var currentDate = new Date();
        return title + " " + currentDate.getMonth() + "-" + currentDate.getDate() + "-" + currentDate.getFullYear() + " " + currentDate.getHours() + "-" + currentDate.getMinutes() + "-" + currentDate.getSeconds()
    }

    render() {
        var startTime = new Date();
        if (this.state.stimulusPresent)
        {
            startTime = new Date();
        }
        var filename = this.constructExperimentName("Basic Reaction Experiment");
        var opacityOfStimulus = this.state.stimulusPresent? 1: 0;
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
            <Container>
            <div className="ui equal width center aligned padded grid">
                <div className="row">
                    <div className="column">
                        <i className="red large circle icon"  style={{opacity: opacityOfStimulus}}></i>
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