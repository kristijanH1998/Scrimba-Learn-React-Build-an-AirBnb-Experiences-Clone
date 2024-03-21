export default function Joke(props) {
    console.log(props.comments);
    return(
        <div>
            {props.setup && <h1>Setup: {props.setup}</h1>}
            <h3>Punchline: {props.punchline}</h3>
            <hr />
        </div>
    )
}