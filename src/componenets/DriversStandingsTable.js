import DriversStandingRow from "./DriversStandingRow"

const DriversStandingsTable = ({driversStandings}) => {
    return (
        <table>
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