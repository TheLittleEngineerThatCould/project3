// This file will be our endpoints
// connecting to my express api
import axios from 'axios'
//const baseURL = ''


export const getStylists = () => {
    const URL = 'http://localhost:3001/stylists'
    // const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const getStylist = (id) => {
    const URL = `http://localhost:3001/stylists/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteStylist = (id) => {
    const URL = `http://localhost:3001/stylists/${id}`
    const response = axios.delete(URL)
    return response
}

export const editStylist = (id, updatedStylist) => {
    const URL = `http://localhost:3001/stylists/${id}`
    console.log('sending: ', URL, updatedStylist);

    const response = axios.put(URL, updatedStylist)
    return response
}

export const createStylist = (stylist) => {
    const URL = 'http://localhost:3001/stylists' 
    const response = axios.post(URL, stylist)
    return response
}