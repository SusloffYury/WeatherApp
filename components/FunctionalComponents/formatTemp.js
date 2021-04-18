const formatTemp = temp => {
    const roundTemp = Math.round(temp)
    return (roundTemp > 0) ? `+${roundTemp} ` : roundTemp;
}
export default formatTemp;
