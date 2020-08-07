import React from 'react';

import { useDispatch, useSelector } from 'react-redux'

const Item = ({ value }) => {

    const dispatch = useDispatch()
    const vote = useSelector(state => state.vote[value] || {})

    const handleUpVoteEvent = e => {
        dispatch({ type: 'UP_VOTE', person: value })
    }
    const handleDownVoteEvent = e => {
        dispatch({ type: 'DOWN_VOTE', person: value })
    }
     
    const handleVoteClear = e => {
        dispatch({ type: 'CLEAR',person: value })
    }

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">{value}</p>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="columns">
                        <div className="column">
                            <div className="buttons are-medium">
                                <button className="button is-primary" onClick={e => handleUpVoteEvent(e)}>Up</button>
                                <button className="button is-danger" onClick={e => handleDownVoteEvent(e)}>Down</button>                                <button className="button is-danger" onClick={e => handleDownVoteEvent(e)}>Down</button>
                                <button className="button is-info" onClick={e => handleVoteClear(e)}>clear</button>

                            </div>
                        </div>
                        <div className="column">
                            Up : {vote.up || 0}, Down :{vote.down || 0}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;