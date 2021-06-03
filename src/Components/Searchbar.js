import React from 'react'
import './Searchbar.css'
import { changesearchfield } from '../Redux/Templates/Actions'
import { connect } from 'react-redux'

const Searchbar = ({ searchfieldvalue, handlesearchchange }) => {
    console.log(searchfieldvalue)
    return (
        <div>
            <div className="first" style={{ position: "relative" }}>
                <input
                    onChange={(e) => handlesearchchange(e.target.value)}
                    className="input"
                    data-testid="searchbar"
                    placeholder="Search Template"
                    value={searchfieldvalue}

                />
                <i className="fa fa-search search" style={{ cursor: "pointer" }}></i>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchfieldvalue: state.searchfield
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlesearchchange: (event) => dispatch(changesearchfield(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)