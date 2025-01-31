import {Link} from "react-router";

function Champion({champion}) {
    return (
        <div>
            <div>
                <p>Season: {champion.year}</p>
            </div>
            <h1>{champion.name}</h1>
            <Link to={`/champion/${champion.id}`}>Show details</Link>
        </div>
    )
}

export default Champion