import DriversStandingRow from "./DriversStandingRow"

const DriversStandingsTable = ({driversStandings}) => {
    return (
        <table>
            <caption><h2>Drivers' Standings</h2></caption>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Driver</th>
                    <th>Constructor</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <DriversStandingRow driversStandings={driversStandings}/>
            </tbody>
        </table>
            
    )
}

export default DriversStandingsTable