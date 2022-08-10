import { useEffect, useState } from "react"
import SeasonSelect from "../components/SeasonSelect"
import DriversStandingsTable from "../components/DriversStandingsTable"
import ConstructorsStandingsTable from "../components/ConstructorsStandingsTable"
import styled from 'styled-components'

const StatsContainer = () => {
    const [season, setSeason] = useState()
    const [seasons, setSeasons] = useState([])
    const [driversStandings, setDriversStandings] = useState([])
    const [constructorsStandings, setConstructorsStandings] = useState([])
    
    useEffect(() => {
        getSeasons()
    },[])
    
    useEffect(() => {
        getDriversStandings()
        getConstructorsStandings()
    },[season])

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
        <Container>
            <SeasonSelect seasons={seasons} onSeasonSelect={onSeasonSelect}/>
            <StandingsTables>
                <DriversStandingsTable driversStandings={driversStandings}/>

                <ConstructorsStandingsTable constructorsStandings={constructorsStandings}/>
            </StandingsTables>
            
        </Container>
    )

}

const Container = styled.div`
    background-color: whitesmoke;
    border-radius: 10px;
    margin: 2rem;
    padding: 1rem;
    text-align: center;
`

const StandingsTables = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default StatsContainer