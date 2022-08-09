import DriversStandingRow from "./DriversStandingRow"

const DriversStandingsTable = ({driversStandings}) => {
    return (
        <>
            <h2>Drivers Championship</h2>
            <table id="drivers-standings-table" className="standings-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Driver</th>
                        <th>Constructor</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <DriversStandingRow driversStandings={driversStandings}/>
                </tbody>
            </table>
        </>
            
    )
}

export default DriversStandingsTable