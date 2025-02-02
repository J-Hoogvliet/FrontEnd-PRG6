import {Link} from "react-router";

function DetailChampion({champion}) {
    console.log(champion)
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-blue-600">Season: {champion.year}</h1>
                <h2 className="text-xl text-green-600">{champion.name} age: {champion.age}</h2>
                <p className="text-gray-500">{champion.team}</p>
            </div>

            <div className="flex space-x-4">
                <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow">
                    <ul className="list-disc pl-5">
                        <li className="text-purple-600 text-lg">Team: {champion.team}</li>
                        <li className="text-purple-600 text-lg">Motor: {champion.motor}</li>
                        <li className="text-purple-600 text-lg">Chassis: {champion.chassis}</li>
                        <li className="text-purple-600 text-lg">Car number: {champion.number}</li>
                        <li className="text-purple-600 text-lg">Tyres: {champion.tyres}</li>
                    </ul>
                </div>


                <div className="flex-1 bg-gray-200 p-4 rounded-lg shadow">
                    <ul className="list-disc pl-5">
                        <li className="text-orange-600">Points scored: {champion.points}</li>
                        <li className="text-orange-600">Wins: {champion.wins}</li>
                        <li className="text-orange-600">Podiums: {champion.podiums}</li>
                        <li className="text-orange-600">Poles: {champion.poles}</li>
                        <li className="text-orange-600">Fastest laps: {champion.fastestLaps}</li>
                    </ul>
                </div>
            </div>

            <Link to={`/champions`} className="mt-4 inline-block text-blue-500 hover:underline">
                Back to Champions
            </Link>
        </div>
    )
}

export default DetailChampion