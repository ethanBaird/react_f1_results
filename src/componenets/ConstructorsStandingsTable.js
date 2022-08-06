import ConstructorsStandingsRow from "./ConstructorsStandingsRow"

const ConstructorsStandingsTable = ({constructorsStandings}) => { 
    return (
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Constructor</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <ConstructorsStandingsRow constructorsStandings={constructorsStandings}/>
            </tbody>
        </table>
    )
}

export default ConstructorsStandingsTable