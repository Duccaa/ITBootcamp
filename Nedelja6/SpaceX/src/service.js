// axios
import axios from 'axios';

export const getPastLunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches/past');
}

export const getLunchesByYear = (year) => {
    return axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`)
}

export const getCompanyInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}