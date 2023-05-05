import './Survey.scss';


function Survey() {
    return (
        <>
            <div className='survey'>
                <h1 className="survey__header">Monthly Employee Survey</h1>
                <p className="survey__text">Your feedback is important to us and it will help us improve our workplace!</p>
                <button className="survey__button">Start Survey</button>
            </div>
        </>
    );
}

export default Survey;