import React from 'react'
import { fetchtemplates } from '../Redux/Templates/Actions'
import TemplateCards from './TemplateCards'
import './TemplateList.css'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import SkeletonTemplate from '../skeletons/SkeletonTemplates'
import Pagination from './Pagination'


const TemplateList = ({ templatedetails, searchfieldvalue, ordervalue, datevalue,categoryvalue, templatesperpage, currentpage, templateerror, templateloading, fetchtemplates }) => {

    useEffect(() => {
        fetchtemplates()
    }, [])

    // Pagination
    const indexoflastitem = currentpage * templatesperpage;
    const indexofirstitem = indexoflastitem - templatesperpage;
    const paginatedTemplates = templatedetails.slice(indexofirstitem, indexoflastitem)



    // sorting with search
    const filteredtemplates = paginatedTemplates.filter(onetemp => {
        return onetemp.name.toLowerCase().includes(searchfieldvalue.toLowerCase());
    })

    let filter

    //sorting with order
    if (ordervalue === "Ascending") {
        filter = filteredtemplates.sort((x, y) => {

            let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
            return a === b ? 0 : a > b ? 1 : -1;
        })
    }
    else if (ordervalue === "Descending") {
        filter = filteredtemplates.sort((x, y) => {

            let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
            return a === b ? 0 : b > a ? 1 : -1;
        })
    }
    //sorting with date
    else if (datevalue === "Ascending") {
        filter = filteredtemplates.sort((x, y) => {
            let a = Date.parse(x.created.replace(/\s+/g, '')),
                b = Date.parse(y.created.replace(/\s+/g, ''))
            return a === b ? 0 : a > b ? 1 : -1;
        })
    }
    else if (datevalue === "Descending") {
        filter = filteredtemplates.sort((x, y) => {
            let a = x.id,
                b = y.id;
            return a === b ? 0 : b > a ? 1 : -1;
        })
    }
    else {
        filter = filteredtemplates
    }

    const Template = filter.map((info) => {
        return (
            //Setting each card with the following property values
            <TemplateCards
                key={info.name}
                body={info.description}
                name={info.name}
                link={info.link}
                category={info.category}
                created={info.created} />
        )
    })

    if (templatedetails.length) {
        //after successful loading
        return (
            <div>
                <div className="list">
                    {Template}
                </div>

                <Pagination templatedetails={templatedetails} />
            </div>
        )
    }
    else {

        //skeleton templates to be displayed while loading
        const arr = [];
        for (let i = 0; i < templatesperpage; i++) {
            arr.push(i)
        }

        const skeletontemplatelist = arr.map((n) => <SkeletonTemplate key={n} />)
        return (
            <div>
                <i className="" style={{ textAlign: "center" }}><h3>Loading templates... this will just take some few minutes</h3></i>
                <div className="list">{skeletontemplatelist}</div>
            </div>)
    }

}

const mapStateToProps = (state) => {
    return {
        templatedetails: state.details,
        templateloading: state.loading,
        templateerror: state.error,
        searchfieldvalue: state.searchfield,
        ordervalue: state.orderfield,
        datevalue: state.datefield,
        categoryvalue: state.category,
        templatesperpage: state.templatesperpage,
        currentpage: state.currentpage,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchtemplates: () => { dispatch(fetchtemplates()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList)
