const StatsTableRow = ({driversStandings}) => {

    const standingsRows = driversStandings.map((standing) => {
        return (
        <tr>
            <td>{standing.position}</td>
            <td>{standing.Driver.givenName} {standing.Driver.familyName.toUpperCase()}</td>
            <td>{standing.Constructors[0].name}</td>
            <td>{standing.points}</td>
        </tr>
        )
    })


    return (
        <>{standingsRows}</>
        )
}

export default StatsTableRow