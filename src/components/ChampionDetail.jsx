import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router";
import DetailChampion from "./childComponents/DetailChampion.jsx";

function ChampionDetail() {
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

    async function deleteFetch() {
        try {
            const response = await fetch(`http://localhost:8095/champions/${id}`, {
                method: 'DELETE',
                headers: {'Accept': 'application/json'}
            })
            if (!response.ok) {
                throw new Error('Netwerk answer was not okay');
            }
            navigate('/champions')
        } catch (error) {
            console.error("Error with deleting this Champion", error)
        }
    }

    return (
        <div>
            <DetailChampion champion={champion}/>
            <Link to={`/champion/${champion.id}/edit`}>Edit details</Link>
            <button onClick={deleteFetch}>Delete {champion.name}</button>
        </div>

    )
}

export default ChampionDetail