import SeasonSelectOption from "./SeasonSelectOption"

const SeasonSelect = ({seasons, onSeasonSelect}) => {
    const handleChange = (event) => {
        onSeasonSelect(event.target.value)
    }
    
    return(
        <select onChange={handleChange}>
            <SeasonSelectOption seasons={seasons}/>
        </select>
    )
}

export default SeasonSelect