import React, {useEffect, useState} from "react";
import {useParams} from "react-router";

function ChampionDetail() {
    const {id} = useParams()
    const [champion, setChampion] = useState('')
    // const navigate = useNavigate()
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
                const data =await response.json()
                setChampion(data)
            } catch (error) {
                console.error("This driver is not a champion", error)
            }
        }

        fetchChampionDetail()
    }, [id]);
    return (
        <p>{champion.name}</p>
    )
}

export default ChampionDetail