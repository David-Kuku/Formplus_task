import React from 'react';
import SkeletonElement from './skeletonElement';
import './skeleton.css'
import Shimmer from './shimmer';

const SkeletonTemplate =()=>{
    return(
        <div className="skeleton-wrapper">
            <div className="skeleton-template">
                <SkeletonElement type="title"/>
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="link" />
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonTemplate