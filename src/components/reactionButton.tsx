import React from 'react';
import { Button } from 'semantic-ui-react';

class ReactionButton extends React.Component<{}, { stimulusPresent: boolean, results: Array<number>}>
{
    constructor(props: any)
    {
        super(props);
        this.state = 
        {
            stimulusPresent: false,
            results: new Array<number>()
        };
        this.recordReactionTime = this.recordReactionTime.bind(this);
    }

    componentDidMount()
    {
        this.setState({ stimulusPresent: true });
    }

    async recordReactionTime(startTime: Date)
    {
        var reaction_time = (new Date()).getTime() -startTime.getTime();
        this.state.results.push(reaction_time);
        console.log("You reacted in " + reaction_time.toString());
        this.setState({stimulusPresent: false})
        await this.waitForMs(Math.random() * 1000 + 2000);
        this.setState({stimulusPresent: true});
        console.log("now!");
    }

    waitForMs(ms: number) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        var startTime = new Date();
        if (this.state.stimulusPresent)
        {
            startTime = new Date();
        }
        return (
            <Button disabled={!this.state.stimulusPresent} onClick={() => this.recordReactionTime(startTime)}>
                React
            </Button>
        );
    }
}

export { ReactionButton }