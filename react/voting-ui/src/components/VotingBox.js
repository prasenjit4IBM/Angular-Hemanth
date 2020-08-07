import React from 'react';
import Item from './Item';
import VoteSummary from './VoteSummary';

const VotingBox = () => {

    return (
        <div className="hero">
            <div className="hero-body">
                <div className="columns">
                    <div className="column">
                        <Item value="Nag" />
                    </div>
                    <div className="column">
                        <Item value="Hemanth" />
                    </div>
                </div>
                <VoteSummary />
            </div>
        </div>
    );
};

export default VotingBox;