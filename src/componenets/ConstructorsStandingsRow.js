const ConstructorsStandingsRow = ({constructorsStandings}, driversStandings) => {

//    const driversByConstructor = driversStandings.filter((driver) => driver.Constructor.constructorID === constructorsStandings)


    
    const standingsRows = constructorsStandings.map((standing, index) => {
        return (
            <tr key={index}>
                <td>{standing.position}</td>
                <td><b>{standing.Constructor.name}</b></td>
                <td>{standing.points}</td>
            </tr>
            )
        })
    
    return (
        <>{standingsRows}</>
        )
}

export default ConstructorsStandingsRow