import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router";

function ChangeChampion() {
    const {id} = useParams()
    const [champion, setChampion] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchChampionDetail() {
            try {
                const response = await fetch(`http://145.24.223.67:8095/champions/${id}`, {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                    }
                })
                const data = await response.json()
                setChampion(data)
            } catch (error) {
                console.error("This driver is not a champion", error)
            }
        }

        fetchChampionDetail()
    }, [id]);


    const handleInputChange = (event) => {
        const {name, value} = event.target
        setChampion((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`http://145.24.223.67:8095/champions/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(champion),
            })
            if (!response.ok) {
                throw new Error('Failed to update item');
            }

            navigate(`/champion/${id}`)

        } catch (error) {
            console.error('Error occurred:', error);

        }
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <h1 className="text-xl font-bold mb-4">Edit page season: {champion.year}</h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full name
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={champion.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                        Year
                        <input
                            type="text"
                            id="year"
                            name="year"
                            value={champion.year}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="team" className="block text-sm font-medium text-gray-700">
                        Team name
                        <input
                            type="text"
                            id="team"
                            name="team"
                            value={champion.team}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        Age of driver
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={champion.age}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                        Number on the car
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={champion.number}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="chassis" className="block text-sm font-medium text-gray-700">
                        Chassis of the car
                        <input
                            type="text"
                            id="chassis"
                            name="chassis"
                            value={champion.chassis}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="motor" className="block text-sm font-medium text-gray-700">
                        Power train
                        <input
                            type="text"
                            id="motor"
                            name="motor"
                            value={champion.motor}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="points" className="block text-sm font-medium text-gray-700">
                        Points scored
                        <input
                            type="text"
                            id="points"
                            name="points"
                            value={champion.points}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="wins" className="block text-sm font-medium text-gray-700">
                        Wins this season
                        <input
                            type="text"
                            id="wins"
                            name="wins"
                            value={champion.wins}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="podiums" className="block text-sm font-medium text-gray-700">
                        Podiums
                        <input
                            type="text"
                            id="podiums"
                            name="podiums"
                            value={champion.podiums}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="poles" className="block text-sm font-medium text-gray-700">
                        Poles
                        <input
                            type="text"
                            id="poles"
                            name="poles"
                            value={champion.poles}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="fastestLaps" className="block text-sm font-medium text-gray-700">
                        Fastest laps
                        <input
                            type="text"
                            id="fastestLaps"
                            name="fastestLaps"
                            value={champion.fastestLaps}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="pointsClear" className="block text-sm font-medium text-gray-700">
                        Points clear of 2nd
                        <input
                            type="text"
                            id="pointsClear"
                            name="pointsClear"
                            value={champion.pointsClear}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="tyres" className="block text-sm font-medium text-gray-700">
                        Tyre supplier
                        <input
                            type="text"
                            id="tyres"
                            name="tyres"
                            value={champion.tyres}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                    </label>
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
        ;
}

export default ChangeChampion