import { useState } from 'react'
import './App.css'
import ChampionCollection from "./components/ChampionCollection.jsx";
import ChampionDetail from "./components/ChampionDetail.jsx";
import HomeScreen from "./components/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import CreateNewChampion from "./components/CreateNewChampion.jsx";
import ChangeChampion from "./components/ChangeChampion.jsx";
function App() {
    const [champions, setChampions] = useState([])

    const router = createBrowserRouter([
        {
            // element: <layout/>,
            children:[
                {
                    path: '/',
                    element: <HomeScreen/>
                },
                {
                    path: '/champions',
                    element: <ChampionCollection champions={champions} setChampions={setChampions}/>
                },
                {
                    path: '/champion/:id',
                    element: <ChampionDetail/>
                },
                {
                    path: '/champion/create',
                    element: <CreateNewChampion/>
                },
                {
                    path: '/champion/:id/edit',
                    element: <ChangeChampion/>
                },
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
