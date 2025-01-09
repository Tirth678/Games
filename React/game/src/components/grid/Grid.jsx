import { useState } from "react";
import Card from "../card/Card";
import './Grid.css'

function Grid({numOfCards}){
    const [board, setBoard] = useState(Array(numOfCards).fill(""));
    return(
        <div className="grid">
            {board.map((el, idx)=> <Card key={idx} />)}
        </div>
    );
}
export default Grid;