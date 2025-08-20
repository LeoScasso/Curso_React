import { winner_combos } from "../constants"

export const checkWinnerFrom = (boardToCheck)=>{
    for (const combo of winner_combos){
        const [a,b,c] = combo
        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ){
            return boardToCheck[a]
        }
    }
        //si no hay ganador
    return null
}


export const checkDraw = (newBoard) => {
    return newBoard.every((square) => square != null)
}
