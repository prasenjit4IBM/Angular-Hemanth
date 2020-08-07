import React from 'react';
import { useSelector } from 'react-redux'

const VoteSummary = () => {

    const vote = useSelector(state => state.vote)
    const nagVote = vote['Nag'] || {}
    let { up = 0, down = 0 } = nagVote;
    let nagTotalVotes = up + down;

    const hemanthVote = vote['Hemanth'] || {};
    ({ up = 0, down = 0 } = hemanthVote);
    let hemanthTotalVotes = up + down;

    return (
        <nav className="panel is-info">
            <p className="panel-heading">
                Vote Summary
            </p>
            <div className="panel-block has-background-white">
                <span className="has-text-grey">Nag : {nagTotalVotes} </span>
            </div>
            <div className="panel-block has-background-white">
                <span className="has-text-grey">Hemanth : {hemanthTotalVotes} </span>
            </div>
        </nav>
    );
};

export default VoteSummary;
