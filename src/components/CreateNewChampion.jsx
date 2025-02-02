    import React, {useEffect, useState} from "react";
    import {useNavigate, Link} from "react-router";

    function createNewChampion() {
        const navigate = useNavigate()

        const [championData, setChampionData] = useState({
            year: '',
            name: '',
            age: '',
            chassis: '',
            motor: '',
            team: '',
            tyres: '',
            poles: '',
            wins: '',
            podiums: '',
            points: '',
            pointsClear: '',
            fastestLaps: '',
            number: '',
        })
        const addChampion = async (formData) => {
            try {
                const response = await fetch('http://145.24.223.67:8095/champions', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                const data = await response.json();
                console.log('Success:', data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        const handleInputChange = (event) => {
            const {name, value} = event.target
            setChampionData({
                ...championData,
                [name]: value,
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            addChampion(championData)
            navigate(`/champions`)
        }

        return (
            <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
                <Link to={'/champions'} className="text-blue-500 hover:underline mb-4 block">
                    Go back to list
                </Link>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={championData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                        <input
                            type="text"
                            id="year"
                            name="year"
                            value={championData.year}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="team" className="block text-sm font-medium text-gray-700">Team name</label>
                        <input
                            type="text"
                            id="team"
                            name="team"
                            value={championData.team}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age of driver</label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={championData.age}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number on the car</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={championData.number}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="chassis" className="block text-sm font-medium text-gray-700">Chassis of the car</label>
                        <input
                            type="text"
                            id="chassis"
                            name="chassis"
                            value={championData.chassis}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="motor" className="block text-sm font-medium text-gray-700">Power train</label>
                        <input
                            type="text"
                            id="motor"
                            name="motor"
                            value={championData.motor}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="points" className="block text-sm font-medium text-gray-700">Points scored</label>
                        <input
                            type="text"
                            id="points"
                            name="points"
                            value={championData.points}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="wins" className=" block text-sm font-medium text-gray-700">Wins this season</label>
                        <input
                            type="text"
                            id="wins"
                            name="wins"
                            value={championData.wins}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="podiums" className="block text-sm font-medium text-gray-700">Podiums</label>
                        <input
                            type="text"
                            id="podiums"
                            name="podiums"
                            value={championData.podiums}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="poles" className="block text-sm font-medium text-gray-700">Poles</label>
                        <input
                            type="text"
                            id="poles"
                            name="poles"
                            value={championData.poles}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="fastestLaps" className="block text-sm font-medium text-gray-700">Fastest laps</label>
                        <input
                            type="text"
                            id="fastestLaps"
                            name="fastestLaps"
                            value={championData.fastestLaps}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pointsClear" className="block text-sm font-medium text-gray-700">Points clear of 2nd</label>
                        <input
                            type="text"
                            id="pointsClear"
                            name="pointsClear"
                            value={championData.pointsClear}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tyres" className="block text-sm font-medium text-gray-700">Tyre supplier</label>
                        <input
                            type="text"
                            id="tyres"
                            name="tyres"
                            value={championData.tyres}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="col-span-2 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }

    export default createNewChampion