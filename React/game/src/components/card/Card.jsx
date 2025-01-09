import Icon from "../icon/Icon";
import './Card.css'
function Card({name}){
    let icon = <Icon />
    if(name == 'X'){
        icon = <Icon name = "cross" />
    } else if(name == 'O'){
        icon = <Icon name = "circle" />
    }

    return(
        <div className="card">
            {icon}
        </div>
    );
    
}
export default Card;