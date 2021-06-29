import { PROJECT_REQUEST, PROJECT_REQUEST_SUCCESS, PROJECT_REQUEST_FAIL,PROJECT_SUBMIT_REQUEST, PROJECT_SUBMIT_SUCCESS, PROJECT_SUBMIT_FAIL} from '../constants/projectConstants'


export const projectListReducer = (state = {projects : []}, action) => {
    switch(action.type){
        case PROJECT_REQUEST :
                return {loading : true, projects : []}
        case PROJECT_REQUEST_SUCCESS:
                return {loading : false, projects : action.payload} 
        case PROJECT_REQUEST_FAIL:
                return {loading : false, error : action.payload }
        default :
                return state
    }
}

export const projectSubmitReducer = (state = {project : []}, action) => {
    switch(action.type){
        case PROJECT_SUBMIT_REQUEST :
                return { loading : true, project : []}
        case PROJECT_SUBMIT_SUCCESS:
                return {loading : false, project : action.payload} 
        case PROJECT_SUBMIT_FAIL:
                return {loading : false, error : action.payload }
        default :
                return state
    }
}


