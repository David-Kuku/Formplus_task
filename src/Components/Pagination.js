import React from 'react'
import { connect } from 'react-redux'
import './pagination.css'
import { changepaginationprevious, changepaginationnext } from '../Redux/Templates/Actions'

const Pagination = ({ templatedetails, currentpage, templatesperpage, changepaginationprevious, changepaginationnext }) => {

    const pages = []
    for (let i = 1; i <= Math.ceil(templatedetails.length / templatesperpage); i++) {
        pages.push(i);
    }

    let a = Math.ceil((templatedetails.length / templatesperpage) - 1)
    return (
        <div className="flex-container" >
            <div>
                <button style={{ cursor: "pointer" }} 
                onClick={changepaginationprevious}
                data-testid="prev"
                disabled={currentpage=== pages[0]?true: false}>
                    <i className="fa fa-angle-left arrow-left"></i>
                    <b>Previous</b>
                </button>
            </div>
            <div>
                <button data-testid="current">
                    <b>{currentpage}</b>
                </button>
                <b> of {a} </b>
            </div>
            <div>
                <button style={{ cursor: "pointer" }}
                 onClick={changepaginationnext}
                 data-testid="next"
                 disabled={currentpage=== pages[pages.length -1]?true: false}>
                    <b>Next</b>
                    <i className="fa fa-angle-right arrow-right"></i>
                </button>
            </div>
        </div>

    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        templatesperpage: state.templatesperpage,
        currentpage: state.currentpage,
        templatedetails: ownProps.templatedetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changepaginationprevious: () => { dispatch(changepaginationprevious()) },
        changepaginationnext: () => { dispatch(changepaginationnext()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

