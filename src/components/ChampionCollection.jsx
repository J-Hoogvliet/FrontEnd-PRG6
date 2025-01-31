import React, {useEffect, } from "react";
import Champion from "./childComponents/Champion.jsx";
import {Link, } from "react-router";

function ChampionCollection({champions, setChampions}) {

    useEffect(() => {
        async function fetchChampions() {
            try {
                const response = await fetch(`http://localhost:8095/champions`, {
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
        <div>
            {champions.map(champion =>
                <article key={champion.id}>
                    < Champion champion={champion}/>
                </article>
            )}
<Link to={'/champion/create'}>Create Champion</Link>
        </div>

    )


}


export default ChampionCollection