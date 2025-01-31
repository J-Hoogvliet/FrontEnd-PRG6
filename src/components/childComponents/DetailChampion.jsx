import {Link} from "react-router";

function DetailChampion({champion}) {
    console.log(champion)
    return (
        <div>
            <div>
                <h1>Season: {champion.year}</h1>
                <h2>{champion.name} age: {champion.age}</h2>
                <p>{ champion.team}</p>
            </div>
            <div>
                <ul>
                    <li>Team: {champion.team}</li>
                    <li>Motor: {champion.motor}</li>
                    <li>Chassis: {champion.chassis}</li>
                    <li>Car number: {champion.number}</li>
                    <li>Tyres: {champion.tyres}</li>
                </ul>
                <ul>
                    <li>Points scored: {champion.points}</li>
                    <li>Wins: {champion.wins}</li>
                    <li>Podiums: {champion.podiums}</li>
                    <li>Poles: {champion.poles}</li>
                    <li>Fastest laps: {champion.fastestLaps}</li>
                </ul>
            </div>
            <Link to={`/champions`}>Back to Champions</Link>
        </div>
    )
}

export default DetailChampion