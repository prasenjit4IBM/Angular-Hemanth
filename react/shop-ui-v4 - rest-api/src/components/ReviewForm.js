import React, { useState, useRef } from 'react';

const ReviewForm = (props) => {
    const [isOpen, setOpen] = useState(false)

    const authorEl = useRef(null);
    const starsEl = useRef(null);
    const bodyEl = useRef(null);

    const handleForm = (e) => {
        e.preventDefault();
        let newReview = {
            author: authorEl.current.value,
            stars: starsEl.current.value,
            body: bodyEl.current.value
        }
        let { onSubmit } = props
        if (onSubmit) {
            onSubmit({ review: newReview })
            authorEl.current.value = ''
            starsEl.current.value = ''
            bodyEl.current.value = ''
            setOpen(false)
        }
    }

    const renderForm = () => {
        if (!isOpen)
            return (<button onClick={e => setOpen(true)} className="btn btn-dark btn-dark"><i className="fa fa-plus"></i></button>)
        else
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form onSubmit={e => handleForm(e)}>
                            <div className="form-group">
                                <label>Author</label>
                                <input className="form-control" ref={authorEl} />
                            </div>
                            <div className="form-group">
                                <label>stars</label>
                                <select className="form-control" ref={starsEl}>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea className="form-control" ref={bodyEl}></textarea>
                            </div>
                            <button className="btn btn-sm btn-primary">save</button>
                            &nbsp;
                            <button onClick={e => setOpen(false)} className="btn btn-sm btn-danger">cancel</button>
                        </form>
                    </div>
                </div>
            )
    }

    return (
        <div className="row">
            <div className="col-8">
                {renderForm()}
            </div>
        </div>
    );
};

export default ReviewForm;