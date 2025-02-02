import {Link} from "react-router";

function HomeScreen() {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Get to know all our champions</h1>
            <p className="text-gray-600 mb-6 text-center">
                Click on your favorite champion and see what they have accomplished in their career
            </p>
            <Link to={'/champions'} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                Go to list
            </Link>
        </div>
    )
    }

    export default HomeScreen