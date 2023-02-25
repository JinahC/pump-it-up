export default function GuidedExercise(props) {

    return (
        <div>
            <h2 className="exercise--title">{props.name}</h2>
            <img className="exercise--img" src={props.exerciseImg} alt="" />
            <div className="">
                <img class="soundwaves" src={props.soundwaves} alt="" />
                <audio controls>
                    <source src={props.audioURL} type="audio/mp3" />
                </audio>
                <button className="exercise--btn pink" onClick={props.returnToMenu}>Return</button>
            </div>
        </div>
    )
}