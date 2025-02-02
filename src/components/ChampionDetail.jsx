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

    async function deleteFetch() {
        try {
            const response = await fetch(`http://145.24.223.67:8095/champions/${id}`, {
                method: 'DELETE',
                headers: {'Accept': 'application/json'}
            })
            console.log(response)
            navigate('/champions')
        } catch (error) {
            console.error("Error with deleting this Champion", error)
        }
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <DetailChampion champion={champion}/>
            <div className="mt-4 space-x-2">
                <Link
                    to={`/champion/${champion.id}/edit`}
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                >
                    Edit details
                </Link>
                <button
                    onClick={deleteFetch}
                    className="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                >
                    Delete {champion.name}
                </button>
            </div>
        </div>

    )
}

export default ChampionDetail