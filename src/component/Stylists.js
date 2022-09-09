import { getStylists } from '../services/stylists-api'
import { useState, useEffect } from 'react'
import Create from './CreateStylist'


export default function Stylists() {
    const [stylists, setStylists] = useState([])
    useEffect(() => {
        getStylists()
            .then(res => setStylists(res.data))
    }, [])
    console.log(stylists)
    return (
        <div>
            <ul>
                {stylists.map((stylist) => {
                    return (
                        <li><a href={`/${stylist._id}`}>{stylist.description}</a>
                        </li>
                    )
                })}

            </ul>
            <Create />
        </div>
    )

}
