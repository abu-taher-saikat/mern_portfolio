import axios from 'axios';
import { PROJECT_REQUEST_FAIL, PROJECT_REQUEST_SUCCESS, PROJECT_REQUEST, PROJECT_SUBMIT_REQUEST, PROJECT_SUBMIT_SUCCESS, PROJECT_SUBMIT_FAIL } from '../constants/projectConstants';

export const projects = () => async (dispatch) => {
    try {
        // const URL = 'localhost:5000/'
        dispatch({ type : PROJECT_REQUEST });
        const {data} = await axios.get(`api/v1/project`);
        
        dispatch({ 
            type : PROJECT_REQUEST_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : PROJECT_REQUEST_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


// project submits
export const projectSubmits = (data, newPost) => async (dispatch) => {
    console.log(`data`, data)
    try {
        dispatch({ type : PROJECT_SUBMIT_REQUEST });
        // const config ={
        //     headers : {
        //         'Content-Type' : "application/json"
        //     }
        // }
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        // const {data} = await axios.post(`/v1/project/post`, {formData} , config);
        
        // await axios.post(`http://localhost:5000/api/upload`, data);
        const project = await axios.post('http://localhost:5000/api/v1/project/post', {newPost}, config)
     

        
        console.log(`data`, data)
        dispatch({ 
            type : PROJECT_SUBMIT_SUCCESS,
            payload : project
        })
    } catch (error) {
        dispatch({
            type : PROJECT_SUBMIT_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
