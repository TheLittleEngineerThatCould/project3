import { useNavigate } from "react-router-dom"
import {createStylist} from '../services/stylists-api'

function Create() {
    const nav = useNavigate()

    const createTheStylist = (e) => {
        const stylist = {description: e.target.description.value, complete: false}
        createStylist(stylist)
        nav('/')
    }

return(
    <div>
        <h3>Create a Stylist</h3>
        <form onSubmit={createTheStylist}>
            <input 
            type='text' 
            name='description' 
            id='dsc'/> 
            <br />
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create