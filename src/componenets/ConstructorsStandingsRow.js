const ConstructorsStandingsRow = ({constructorsStandings}) => {
    const standingsRows = constructorsStandings.map((standing, index) => {
        return (
            <tr key={index}>
                <td>{standing.position}</td>
                <td>{standing.Constructor.name}</td>
                <td>{standing.points}</td>
            </tr>
            )
        })
    
    return (
        <>{standingsRows}</>
        )
}

export default ConstructorsStandingsRow