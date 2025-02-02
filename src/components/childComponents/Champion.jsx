import {Link} from "react-router";

function Champion({champion}) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="mb-2">
                <p className="text-blue-600 bg-blue-200 p-2 rounded">{`Season: ${champion.year}`}</p>
            </div>
            <h1 className="text-xl font-bold text-gray-800">{champion.name}</h1>
            <Link to={`/champion/${champion.id}`} className="mt-2 inline-block text-blue-500 hover:underline">
                Show details
            </Link>
        </div>
    )
}

export default Champion