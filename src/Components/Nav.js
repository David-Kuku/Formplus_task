import React, { Component } from 'react'
import Searchbar from './Searchbar'
import './Nav.css'
import Title from './Title'
import Tada from './Tada'
import { connect } from 'react-redux'
import { changecategoryvalue } from '../Redux/Templates/Actions'
import { changeorderfield } from '../Redux/Templates/Actions'
import { clearsearchvalue } from '../Redux/Templates/Actions'
import { changedatefield } from '../Redux/Templates/Actions'

class Nav extends Component {

    render() {
        const { handlechangecategory, handlechangeorder, handlechangedate, datevalue, Categoryvalue, ordervalue } = this.props

        return (
            <div>
                <div className="sort">
                    <Searchbar />

                    <div className="different">
                        <p className='sorttt'>Sort By:</p>
                        <fieldset className="field">
                            <legend style={{ margin: "0px", fontSize: "13px" }}>Category</legend>
                            <select className="classifications" onChange={e => handlechangecategory(e.target.value)} data-testid="select">
                                <option value="All" >All</option>
                                <option value="E-commerce" data-testid="ecommerce">E-commerce</option>
                                <option value="Health">Health</option>
                                <option value="Education">Education</option>
                            </select>
                        </fieldset>

                        <fieldset className="field" >
                            <legend style={{ margin: "0px", fontSize: "13px" }}>Order</legend>
                            <select className="classifications" onChange={e => handlechangeorder(e.target.value)} value={ordervalue} data-testid="selectorder" >
                                <option value="Default">Default</option>
                                <option value="Ascending" data-testid="ascending">Ascending</option>
                                <option value="Descending">Descending</option>

                            </select>
                        </fieldset>

                        <fieldset className="field">
                            <legend style={{ margin: "0px", fontSize: "13px" }}>Date</legend>
                            <select className="classifications" onChange={e => handlechangedate(e.target.value)} value={datevalue}>
                                <option value="Default">Default</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </select>
                        </fieldset>

                    </div>
                </div>
                <Tada />
                <Title titlevalue={Categoryvalue} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Categoryvalue: state.category,
        ordervalue: state.orderfield,
        datevalue: state.datefield

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlechangecategory: (eventvalue) => dispatch(changecategoryvalue(eventvalue)),
        handlechangeorder: (eventvalue) => dispatch(changeorderfield(eventvalue)),
        handleclearsearchvalue: () => dispatch(clearsearchvalue()),
        handlechangedate: (eventvalue) => dispatch(changedatefield(eventvalue))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
