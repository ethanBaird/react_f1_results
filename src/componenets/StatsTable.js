import StatsTableRow from "./StatsTableRow"

const StatsTable = ({driversStandings}) => {
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
                <StatsTableRow driversStandings={driversStandings}/>
            </tbody>
        </table>
            
    )
}

export default StatsTable