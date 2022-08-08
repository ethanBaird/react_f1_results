import ConstructorsStandingsRow from "./ConstructorsStandingsRow"

const ConstructorsStandingsTable = ({constructorsStandings, driversStandings}) => { 
    return (
        <table>
            <caption><h2>Constructors' Standings</h2></caption>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Constructor</th>
                    <th>Drivers</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <ConstructorsStandingsRow constructorsStandings={constructorsStandings} driversStandings={driversStandings}/>
            </tbody>
        </table>
    )
}

export default ConstructorsStandingsTable