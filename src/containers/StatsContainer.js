import { useEffect, useState } from "react"
import StatsTable from "../componenets/StatsTable"

const StatsContainer = () => {
    const [driversStandings, setDriversStandings] = useState([])

    useEffect(() => {
        getDriversStandings()
    }, [])

    const getDriversStandings = () => {
        fetch('https://ergast.com/api/f1/current/driverStandings.json')
        .then(res => res.json())
        .then(data => {
            let driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            setDriversStandings(driverStandings);
        });
    }
   

    
    return (
        <StatsTable driversStandings={driversStandings}/>
    )
}

export default StatsContainer