import styled from "styled-components"

const DriversStandingsRow = ({driversStandings}) => {

    const standingsRows = driversStandings.map((standing, index) => {
        return (    
        <Row key={index}>
            <Cell>{standing.position}</Cell>
            <Cell>{standing.Driver.givenName} <b>{standing.Driver.familyName.toUpperCase()}</b></Cell>
            <Cell>{standing.Constructors[0].name}</Cell>
            <Cell>{standing.points}</Cell>
        </Row>
        )
    })


    return (
        <>{standingsRows}</>
        )
}

const Row = styled.tr`
    &:hover {
        background-color: whitesmoke;
    }
`
const Cell = styled.td`
    padding: 16px;
    text-align: center;
`

export default DriversStandingsRow