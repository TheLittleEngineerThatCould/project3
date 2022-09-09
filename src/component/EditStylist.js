import {getStylist, editStylist} from '../services/stylists-api'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
const {id} = useParams()
const nav = useNavigate()
const [data, setData] = useState({})

useEffect(() => {
    getStylist(id) // get the todo that matches this id
    .then(res => setData(res.data)) // updating the state to the todo we get back
}, []) // prevent a continous loop

const editTheStylist = (e) => {
    e.preventDefault()
    const updatedStylist = {description: e.target.description.value, complete: e.target.complete.checked}
    editStylist(id, updatedStylist)
    nav(`/${id}`)
}
    return (
        <div>
            <form onSubmit={editTheStylist}>
                <input 
                type='text' 
                name='description' 
                defaultValue={data.description}/>
                Complete: <input 
                type='checkbox' 
                name='complete' 
                defaultChecked={data.complete}/>
                <input type='submit' />
            </form>
        </div>
    )
}
export default Edit