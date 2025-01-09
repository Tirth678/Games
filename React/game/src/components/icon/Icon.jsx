import { FaCircle, FaTimes, FaPen } from "react-icons/fa"
function Icon({name}){
    if(name == "circle"){
        return <FaCircle />
    } else if(name == "cross"){
        return <FaTimes />
    }
    else{
        return <FaPen />
    }

}
export default Icon;