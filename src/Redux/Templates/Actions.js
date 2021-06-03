import axios from 'axios'

import {
    FETCH_TEMPLATE_FAILURE,
    FETCH_TEMPLATE_REQUEST,
    FETCH_TEMPLATE_SUCCESS,
    CHANGE_CATEGORY_VALUE,
    CHANGE_SEARCH_FIELD,
    CHANGE_ORDER_FIELD,
    CLEAR_SEARCH_VALUE,
    CHANGE_DATE_FIELD,
    CHANGE_PAGINATION_NEXT,
    CHANGE_PAGINATION_PREVIOUS
} from './Types'

export const fetchtemplaterequest =()=>{
    return{
        type: FETCH_TEMPLATE_REQUEST
    }
}

export const fetchtemplatesuccess =(templates)=>{
    return{
        type: FETCH_TEMPLATE_SUCCESS,
        payload: templates
    }
}

export const fetchtemplatesfailure =(error)=>{
    return{
        type: FETCH_TEMPLATE_FAILURE,
        payload: error
    }
}


export const fetchtemplates =()=>{
    return (dispatch) =>{
        dispatch(fetchtemplaterequest)
        return axios.get("https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates")
        .then(response =>{
            const templates = response.data
            dispatch(fetchtemplatesuccess(templates))
        })
        .catch(error =>{
            const errormsg = error.message
            dispatch(fetchtemplatesfailure(errormsg))
           
        })
    }
}

export const changecategoryvalue =(newCategory)=>{
    return{
        type: CHANGE_CATEGORY_VALUE,
        payload: newCategory
    }
}
export const changesearchfield =(searchvalue)=>{
    return{
        type: CHANGE_SEARCH_FIELD,
        payload: searchvalue
    }
}

export const changeorderfield =(ordervalue)=>{
    return{
        type: CHANGE_ORDER_FIELD,
        payload: ordervalue
    }
}

export const clearsearchvalue =()=>{
    return{
        type: CLEAR_SEARCH_VALUE
    }
}

export const changedatefield=(datevalue)=>{
    return{
        type: CHANGE_DATE_FIELD,
        payload: datevalue
    }
}
export const changepaginationnext=()=>{
    return{
        type:CHANGE_PAGINATION_NEXT
    }
}
export const changepaginationprevious=()=>{
    return{
        type:CHANGE_PAGINATION_PREVIOUS
    }
}

