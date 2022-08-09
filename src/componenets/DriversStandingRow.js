const DriversStandingsRow = ({driversStandings}) => {

    const standingsRows = driversStandings.map((standing, index) => {
        return (
        <tr key={index}>
            <td>{standing.position}</td>
            <td>{standing.Driver.givenName} <b>{standing.Driver.familyName.toUpperCase()}</b></td>
            <td>{standing.Constructors[0].name}</td>
            <td>{standing.points}</td>
        </tr>
        )
    })


    return (
        <>{standingsRows}</>
        )
}

export default DriversStandingsRow