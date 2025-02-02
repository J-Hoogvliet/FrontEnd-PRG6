import React, {useEffect, } from "react";
import Champion from "./childComponents/Champion.jsx";
import {Link, } from "react-router";

function ChampionCollection({champions, setChampions}) {

    useEffect(() => {
        async function fetchChampions() {
            try {
                const response = await fetch(`http://145.24.223.67:8095/champions`, {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                const data = await response.json()
                console.log(data)
                setChampions(data.items)
            } catch (error) {
                console.error("Error in fetching Champions", error)
            }
        }

        fetchChampions();
    }, []);



    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 bg-blue-200 p-4 rounded mb-4">
                F1 champions from 1950 to now
            </h1>

            <Link to={'/champion/create'}
                  className="mb-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                Create Champion
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {champions.map(champion => (
                    <article key={champion.id} className="bg-white rounded-lg shadow-md p-4">
                        <Champion champion={champion}/>
                    </article>
                ))}
            </div>
        </div>
    )


}


export default ChampionCollection