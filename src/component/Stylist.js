import { getStylist, deleteStylist } from '../services/stylists-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function Stylist() {
    const nav = useNavigate()
    const { id } = useParams()
    const [stylist, setStylist] = useState({})
    
    useEffect(() => {
        getStylist(id)
        .then(res => setStylist(res.data))
    }, [])

    const deleteTheStylist = () => {
        deleteStylist(id) // service in todos-api
        nav('/') // take us back to home screen
    }

    return (
        <div>
            <h1>Stylist:</h1>
            <h3>{stylist.description}</h3>
            Stylist Name: <input type='' /> <br />
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheStylist}>Delete</button>
            <button onClick={() => (nav('/'))}>Home</button>
        </div>
    )
}

export default Stylist