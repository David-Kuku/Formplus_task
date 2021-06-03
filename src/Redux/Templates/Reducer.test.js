import { reducer } from './Reducer'
import * as actions from './Actions'


test("Should render the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    })
})


test("Should update the state after change search field action is dispatched", () => {
    expect(reducer({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    }, actions.changesearchfield("sear"))).toEqual({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: 'sear',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    })
})


test("Should update the state after change date field action is dispatched", () => {
    expect(reducer({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    }, actions.changedatefield("sear"))).toEqual({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'sear',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    })
})

test("Should update the state after change order field action is dispatched", () => {
    expect(reducer({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    }, actions.changeorderfield("sear"))).toEqual({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'sear',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    })
})

test("Should update the state when a template request action is dispatched", () => {
    expect(reducer({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    }, actions.fetchtemplaterequest())).toEqual({
        loading: true,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    })
})

test("Should update the state after the fetch request successful action is dispatched", () => {
    expect(reducer({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    }, actions.fetchtemplatesuccess([{ item1: "item 1" }, { item2: "item 2" }]))).toEqual({
        loading: false,
        details: [{ item1: "item 1" }, { item2: "item 2" }],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    })
})

test("Should update the state after the next-page action is dispatched", () => {
    expect(reducer({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 1,
    }, actions.changepaginationnext())).toEqual({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 2,
    })
})


test("Should update the state after the previous-page action is dispatched", () => {
    expect(reducer({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 7,
    }, actions.changepaginationprevious())).toEqual({
        loading: false,
        details: [],
        error: "",
        category: 'All',
        searchfield: '',
        orderfield: 'default',
        datefield: 'default',
        pageNumber: 0,
        templatesperpage: 15,
        currentpage: 6
    })
})


