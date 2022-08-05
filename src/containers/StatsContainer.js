import { useEffect, useState } from "react"
import SeasonSelect from "../componenets/SeasonSelect"
import StatsTable from "../componenets/StatsTable"

const StatsContainer = () => {
    const [season, setSeason] = useState('2022')
    const [seasons, setSeasons] = useState([])
    const [driversStandings, setDriversStandings] = useState([])
    
    useEffect(() => {
        getDriversStandings()
    }, [season])

    useEffect(() => {
        getSeasons()
    }, [])

    const getSeasons = () => {
        
        const start = 1950;
        const end = 2022;
        const range = [...Array(end - start + 1).keys()].map(x => x + start);
        const sortedRange = range.sort((a, b) => b-a);
        const strRange = sortedRange.map((number) => number.toString());
        setSeasons(strRange)
    }

    const getDriversStandings = () => {
        fetch(`https://ergast.com/api/f1/${season}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {
            let driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            setDriversStandings(driverStandings);
        });
    }

    const onSeasonSelect = (season) => {
        setSeason(season)
    }

   

    
    return (
        <>
            <SeasonSelect seasons={seasons} onSeasonSelect={onSeasonSelect}/>
            <StatsTable driversStandings={driversStandings}/>
        </>
            
    )
}

export default StatsContainer