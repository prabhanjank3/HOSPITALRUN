import { useSelector } from "react-redux"
import { RootState } from "../../../store"

export default () => {
    const isLoggedIn = useSelector((state:RootState) => state.user.isLoggedIn)
    if(isLoggedIn)
    {
        return <div></div>
    }
    
}