    import React, {useEffect, useState} from "react";
    import {useNavigate, Link} from "react-router";

    function createNewChampion({onSubmit}) {
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
                const response = await fetch('http://localhost:8095/champions', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                const data = await response.json();
                console.log('Success:', data);
                onSubmit(data)
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
            <div>
                <Link to={'/champions'}>Go back to list</Link>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="name">Full name</label>
                        <input type="text"
                               id="name"
                               name="name"
                               value={championData.name}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="year">Year</label>
                        <input type="text"
                               id="year"
                               name="year"
                               value={championData.year}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="team">Team name</label>
                        <input type="text"
                               id="team"
                               name="team"
                               value={championData.team}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age of driver</label>
                        <input type="text"
                               id="age"
                               name="age"
                               value={championData.age}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="number">Number on the car</label>
                        <input type="text"
                               id="number"
                               name="number"
                               value={championData.number}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="chassis">Chassis of the car</label>
                        <input type="text"
                               id="chassis"
                               name="chassis"
                               value={championData.chassis}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="motor">Power train</label>
                        <input type="text"
                               id="motor"
                               name="motor"
                               value={championData.motor}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="points">Points scored</label>
                        <input type="text"
                               id="points"
                               name="points"
                               value={championData.points}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="wins">Wins this season</label>
                        <input type="text"
                               id="wins"
                               name="wins"
                               value={championData.wins}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="podiums">Podiums</label>
                        <input type="text"
                               id="podiums"
                               name="podiums"
                               value={championData.podiums}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="poles">Poles</label>
                        <input type="text"
                               id="poles"
                               name="poles"
                               value={championData.poles}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="fastestLaps">Fastest laps</label>
                        <input type="text"
                               id="fastestLaps"
                               name="fastestLaps"
                               value={championData.fastestLaps}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="pointsClear">Points clear of 2nd</label>
                        <input type="text"
                               id="pointsClear"
                               name="pointsClear"
                               value={championData.pointsClear}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="tyres">Tyre supplier</label>
                        <input type="text"
                               id="tyres"
                               name="tyres"
                               value={championData.tyres}
                               onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    export default createNewChampion