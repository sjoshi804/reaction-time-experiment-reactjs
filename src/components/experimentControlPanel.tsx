import React from 'react';
import { Container } from 'semantic-ui-react';
import { ReactionButton } from './reactionButton';

class ExperimentControlPanel extends React.Component
{
    render() {
        return <Container>
            <ReactionButton></ReactionButton>
        </Container>
    }
}

export { ExperimentControlPanel }