import ConstructorsStandingsRow from "./ConstructorsStandingsRow"

const ConstructorsStandingsTable = ({constructorsStandings, driversStandings}) => { 
    return (
       <>
            <h2>Constructors Championship</h2>
            <table id="constructors-standings-table" className="standings-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Constructor</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <ConstructorsStandingsRow constructorsStandings={constructorsStandings} driversStandings={driversStandings}/>
                </tbody>
            </table>
       </>
    )
}

export default ConstructorsStandingsTable