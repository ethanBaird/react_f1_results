import './StatsContainer.css'
import { useEffect, useState } from "react"
import SeasonSelect from "../componenets/SeasonSelect"
import DriversStandingsTable from "../componenets/DriversStandingsTable"
import ConstructorsStandingsTable from "../componenets/ConstructorsStandingsTable"

const StatsContainer = () => {
    const [season, setSeason] = useState()
    const [seasons, setSeasons] = useState([])
    const [driversStandings, setDriversStandings] = useState([])
    const [constructorsStandings, setConstructorsStandings] = useState([])
    
    useEffect(() => {
        getDriversStandings()
        getConstructorsStandings()
    }, [season])

    useEffect(() => {
        getSeasons()
    }, [])

    const getSeasons = () => {
        fetch(`http://ergast.com/api/f1/seasons.json?limit=20&offset=63`)
        .then(res => res.json())
        .then(data => {
            let seasons = data.MRData.SeasonTable.Seasons.map((season => season.season))
            const orderedSeasons = seasons.reverse()
            setSeasons(orderedSeasons);
            setSeason(orderedSeasons[0]);
        }) 

    }
    
    const getDriversStandings = () => {
        fetch(`https://ergast.com/api/f1/${season}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {
            let driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            setDriversStandings(driverStandings);
        });
    }

    const getConstructorsStandings = () => {
        fetch(`https://ergast.com/api/f1/${season}/constructorStandings.json`)
        .then(res => res.json())
        .then(data => {
            let constructorsStandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
            setConstructorsStandings(constructorsStandings);
        });
    };

    const onSeasonSelect = (season) => {
        setSeason(season)
    }

    return (
        <div id="stats-container">
            <SeasonSelect seasons={seasons} onSeasonSelect={onSeasonSelect}/>

                <DriversStandingsTable driversStandings={driversStandings}/>

                <ConstructorsStandingsTable constructorsStandings={constructorsStandings} driversStandings={driversStandings}/>

        </div>
    )
}

export default StatsContainer