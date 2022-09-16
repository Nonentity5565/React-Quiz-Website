import './StartScreen.css';
export default function StartScreen(props) {
    return (
        <div className="start-screen-con">
            <h1>Quizzical</h1>
            <p>Final React Project Challenge From <a 
            href="https://scrimba.com/" 
            target="_blank" >
                Scrimba's
            </a> Free React Course</p>
            <button className="start-btn" onClick={props.handleClick}>Start quiz</button>
        </div>
    );
}