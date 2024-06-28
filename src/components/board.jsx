const board = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "10px 5px"
}

const tile = {
    backgroundColor: "grey",
    width: "50px",
    height: "50px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const Board = ({ nextPlayer, setNextPlayer }) => {
    const handleClickTile = (param) => {
        // console.log(param, nextPlayer);
        setNextPlayer(nextPlayer => nextPlayer === 'X' ? '0' : 'X')
    }

    return (
        <div style={board}>
            {[...Array(9).keys()].map(element => {
                return (
                    <div
                        key={element}
                        style={tile}
                        onClick={() => handleClickTile(element)}
                    >
                        {nextPlayer === 'X' ? "X" : "0"}
                    </div>
                )
            })}
        </div>
    )
}
