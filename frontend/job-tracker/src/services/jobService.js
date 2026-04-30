import axios from 'axios';

//const API_URL="https://localhost:7182/api/Jobs";
const API_URL="https://job-tracker-app-w7q4.onrender.com/Jobs"

export const getJobs=()=>{
    return axios.get(API_URL);
}

export const addJob = (job) =>{
    return axios.post(API_URL,job);
}

export const deleteJob= (id)=>{
    return axios.delete(`${API_URL}/${id}`);
}

export const updateJob =(id,job)=>{
    return axios.put(`${API_URL}/${id}`,job);
}