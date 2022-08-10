import styled from "styled-components"
import ConstructorsStandingsRow from "./ConstructorsStandingsRow"


const ConstructorsStandingsTable = ({constructorsStandings}) => { 
    return (
        <Compenent>
        <Title>Constructors Championship</Title>
        <Table>
            <TableHead>
                <Row>
                    <Cell>#</Cell>
                    <Cell>Constructor</Cell>
                    <Cell>Drivers</Cell>
                    <Cell>Points</Cell>
                </Row>
            </TableHead>
            <TableBody>
                <ConstructorsStandingsRow constructorsStandings={constructorsStandings}/>
            </TableBody>
        </Table>
    </Compenent>
    )
}

const Compenent = styled.div``

const Title = styled.h2``

const Table = styled.table`
    table-layout: fixed;
    width: auto 100%;
    min-width: 350px;

    color: #2D2D2A;
    background-color: white;
    box-shadow: 0 0 16px #042c499a;

    border: 3px solid #FE2A3C;
    border-radius: 10px;
    border-collapse: separate;
    border-spacing: 0;
`

const TableHead = styled.thead``

const Row = styled.tr`
    background: #FE2A3C;
    color: white;
`

const Cell = styled.th`
    padding: 16px;
    text-align: center;
`

const TableBody = styled.tbody`
    tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
    }
    tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
    }
`

export default ConstructorsStandingsTable