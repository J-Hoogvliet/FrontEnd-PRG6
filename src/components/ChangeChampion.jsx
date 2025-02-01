import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router";

function ChangeChampion() {
    const {id} = useParams()
    const [champion, setChampion] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchChampionDetail() {
            try {
                const response = await fetch(`http://localhost:8095/champions/${id}`, {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                    }
                })
                if (!response.ok) {
                    throw new Error('Netwerk antwoord was niet ok');
                }
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
            const response = await fetch(`http://localhost:8095/champions/${id}`, {
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
        <div>
            <h1>Edit page season: {champion.year}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Full name</label>
                    <input type="text"
                           id="name"
                           name="name"
                           value={champion.name}
                           onChange={handleInputChange}
                           required
                    />
                </div>
                <div>
                    <label htmlFor="year">Year
                        <input type="text"
                               id="year"
                               name="year"
                               value={champion.year}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="team">Team name
                        <input type="text"
                               id="team"
                               name="team"
                               value={champion.team}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="age">Age of driver
                        <input type="text"
                               id="age"
                               name="age"
                               value={champion.age}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="number">Number on the car
                        <input type="text"
                               id="number"
                               name="number"
                               value={champion.number}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="chassis">Chassis of the car
                        <input type="text"
                               id="chassis"
                               name="chassis"
                               value={champion.chassis}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="motor">Power train
                        <input type="text"
                               id="motor"
                               name="motor"
                               value={champion.motor}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="points">Points scored
                        <input type="text"
                               id="points"
                               name="points"
                               value={champion.points}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="wins">Wins this season
                        <input type="text"
                               id="wins"
                               name="wins"
                               value={champion.wins}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="podiums">Podiums
                        <input type="text"
                               id="podiums"
                               name="podiums"
                               value={champion.podiums}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="poles">Poles
                        <input type="text"
                               id="poles"
                               name="poles"
                               value={champion.poles}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="fastestLaps">Fastest laps
                        <input type="text"
                               id="fastestLaps"
                               name="fastestLaps"
                               value={champion.fastestLaps}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="pointsClear">Points clear of 2nd
                        <input type="text"
                               id="pointsClear"
                               name="pointsClear"
                               value={champion.pointsClear}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <div>
                    <label htmlFor="tyres">Tyre supplier
                        <input type="text"
                               id="tyres"
                               name="tyres"
                               value={champion.tyres}
                               onChange={handleInputChange}
                               required
                        /></label>

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
        ;
}

export default ChangeChampion