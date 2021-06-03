import {
    CHANGE_CATEGORY_VALUE,
    CHANGE_SEARCH_FIELD,
    FETCH_TEMPLATE_FAILURE,
    FETCH_TEMPLATE_REQUEST,
    FETCH_TEMPLATE_SUCCESS,
    CHANGE_ORDER_FIELD,
    CLEAR_SEARCH_VALUE,
    CHANGE_DATE_FIELD,
    CHANGE_PAGINATION_PREVIOUS,
    CHANGE_PAGINATION_NEXT
} from './Types'

export const initialState = {
    loading: false,
    details: [],
    error: "",
    category: 'All',
    searchfield:'',
    orderfield:'default',
    datefield: 'default',
    pageNumber: 0,
    templatesperpage: 15,
    currentpage: 1,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEMPLATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEMPLATE_SUCCESS:
            return {
                ...state,
                loading: false,
                details: action.payload
            }
        case FETCH_TEMPLATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CHANGE_CATEGORY_VALUE:
            return{
                ...state,
                category: action.payload,
                searchfield:'',
                orderfield:'default',
                datefield: 'default',
                currentpage: 1
            }
        case CHANGE_SEARCH_FIELD:{
            return{
                ...state,
                searchfield: action.payload
            }
        }
        case CHANGE_ORDER_FIELD:{
            return{
                ...state,
                datefield:'default',
                orderfield: action.payload
            }
        }
        case CLEAR_SEARCH_VALUE:{
            return{
                ...state,
                searchfield: ''
            }
        }
        case CHANGE_DATE_FIELD:{
            return{
                ...state,
                orderfield:'default',
                datefield:action.payload
            }
        }
        case CHANGE_PAGINATION_NEXT:{
            return{
                ...state,
                currentpage: state.currentpage +1
            }
        }
        case CHANGE_PAGINATION_PREVIOUS:{
            return{
                ...state,
                currentpage: state.currentpage -1
            }
        }
        default: return state
    }
}
