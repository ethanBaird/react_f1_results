const SeasonSelectOption = ({seasons}) => {
    const seasonOptions = seasons.map((season, index) => {
        return <option value={season} key={index}>{season}</option>
    })

    return(
        <>{seasonOptions}</>
    )

}


export default SeasonSelectOption