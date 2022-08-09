import { useEffect, useState } from "react"
import SeasonSelect from "../componenets/SeasonSelect"
import DriversStandingsTable from "../componenets/DriversStandingsTable"
import ConstructorsStandingsTable from "../componenets/ConstructorsStandingsTable"

const StatsContainer = () => {
    const [season, setSeason] = useState('2022')
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
        // const start = 1950;
        // const end = 2022;
        // const range = [...Array(end - start + 1).keys()].map(x => x + start);
        // const sortedRange = range.sort((a, b) => b-a);
        // const strRange = sortedRange.map((number) => number.toString());
        // setSeasons(strRange)
        fetch(`http://ergast.com/api/f1/seasons.json?limit=100`)
        .then(res => res.json())
        .then(data => {
            let seasons = data.MRData.SeasonTable.Seasons.map((season => season.season))
            setSeasons(seasons)
        }) 

    }
    
    // async function getSeasons() {
    //     const limitPerPage = 30
    //     let skipNo = 0
    //     let mostRecentReturn = {}
    //     let results = []
    //     do {
    //         const response = await fetch(`http://ergast.com/api/f1/seasons.json?limit=${limitPerPage}&offset=${skipNo}`);
    //         console.log(response);
    //         const data = await response.json();
    //         console.log(data);
    //         mostRecentReturn = data;
    //         results= results.concat(data.MRData.SeasonTable.Seasons);
    //         skipNo+=limitPerPage}
    //     while (mostRecentReturn.MRData.SeasonTable.Seasonslength === 30);
    //         setSeasons(results);
    // }
    


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

   

    
    // return (
    //     <div id="stats-container">
    //         <SeasonSelect seasons={seasons} onSeasonSelect={onSeasonSelect}/>
    //         <div id="standings-tables">
    //             <DriversStandingsTable driversStandings={driversStandings}/>
    //             <ConstructorsStandingsTable constructorsStandings={constructorsStandings} driversStandings={driversStandings}/>
    //         </div>
    //     </div>
    // )
}

export default StatsContainer