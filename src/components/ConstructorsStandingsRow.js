import styled from "styled-components"

const ConstructorsStandingsRow = ({constructorsStandings}) => {

    const standingsRows = constructorsStandings.map((standing, index) => {
        return (
            <Row key={index}>
                <Cell>{standing.position}</Cell>
                <Cell><b>{standing.Constructor.name}</b></Cell>
                <Cell>Drivers</Cell>
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

export default ConstructorsStandingsRow